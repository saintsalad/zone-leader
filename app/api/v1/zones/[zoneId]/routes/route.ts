import { NextRequest, NextResponse } from "next/server";
import { apiAuth } from "@/utils/supabase/api-auth";
import { UnauthorizedError } from "@/lib/exceptions/UnauthorizedError";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ zoneId: string }> }
) {
  try {
    const { zoneId } = await params;
    console.log("zoneId", zoneId);

    const { supabase } = await apiAuth();

    const { data: routes, error } = await supabase
      .from("routes")
      .select("*")
      .eq("zone_id", zoneId); // filter by zone_id

    if (error) {
      return NextResponse.json(
        { error: "Failed to fetch routes", message: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ routes: routes });
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return NextResponse.json(
        {
          error: "Unauthorized",
          message: error.message,
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
