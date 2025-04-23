import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";
import { createClient } from "@/utils/supabase/sever";

// Routes that require authentication
const protectedRoutes = [
  "/zones",
  "/challenges",
  "/rankings",
  "/system",
  "/profile",
  "/logout",
];

// Routes that should be accessible only to non-authenticated users
const authRoutes = ["/login", "/signup"];

export async function middleware(request: NextRequest) {
  try {
    // Update the session
    const res = await updateSession(request);
    const supabase = await createClient();

    // Get the pathname from the URL
    const pathname = request.nextUrl.pathname;

    // Check authentication status
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const isAuthenticated = !!user;

    // Check route types
    const isProtectedRoute = protectedRoutes.some((route) =>
      pathname.startsWith(route)
    );
    const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

    // Redirect logic
    if (!isAuthenticated && isProtectedRoute) {
      // If not authenticated and trying to access protected route, redirect to login
      const redirectUrl = new URL("/login", request.url);
      redirectUrl.searchParams.set("redirect_to", pathname);
      return NextResponse.redirect(redirectUrl);
    }

    if (isAuthenticated && isAuthRoute) {
      // If authenticated and trying to access auth routes (login/signup), redirect to profile or redirect_to
      const redirectTo =
        request.nextUrl.searchParams.get("redirect_to") || "/profile";
      return NextResponse.redirect(new URL(redirectTo, request.url));
    }

    // For all other cases (public routes or authenticated users), proceed normally
    return res;
  } catch (error) {
    // If there's any error in authentication check, treat user as unauthenticated
    console.error("Middleware authentication error:", error);

    // If trying to access protected route, redirect to login
    const pathname = request.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.some((route) =>
      pathname.startsWith(route)
    );

    if (isProtectedRoute) {
      const redirectUrl = new URL("/login", request.url);
      redirectUrl.searchParams.set("redirect_to", pathname);
      return NextResponse.redirect(redirectUrl);
    }

    // For other routes, proceed with caution
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc)
     * - api routes
     */
    "/((?!_next/static|_next/image|favicon.ico|api|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
