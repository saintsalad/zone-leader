import { NextResponse } from "next/server";
import { apiAuth } from "@/utils/supabase/api-auth";
import { UnauthorizedError } from "@/lib/exceptions/UnauthorizedError";

let counter = 0;
export async function GET(
  request: Request,
  { params }: { params: Promise<{ routeId: string }> }
) {
  try {
    const { supabase } = await apiAuth();
    const { routeId } = await params;

    counter = 0;

    const { data: route, error } = await supabase
      .from("routes")
      .select("*")
      .eq("route_id", routeId)
      .single();

    if (error) {
      return NextResponse.json(
        { error: "Failed to fetch route", message: error.message },
        { status: 500 }
      );
    }

    if (!route) {
      return NextResponse.json({ error: "Route not found" }, { status: 404 });
    }

    return NextResponse.json({ route: route });
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      counter++;

      return NextResponse.json(
        {
          error: "Unauthorized",
          message: counter > 10 ? "Just stop it btch" : error.message,
        },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error", message: error },
      { status: 500 }
    );
  }
}
