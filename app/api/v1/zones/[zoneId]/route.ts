import { NextResponse } from "next/server";
import { apiAuth } from "@/utils/supabase/api-auth";
import { UnauthorizedError } from "@/lib/exceptions/UnauthorizedError";

let counter = 0;
export async function GET(
  request: Request,
  { params }: { params: Promise<{ zoneId: string }> }
) {
  try {
    const { supabase } = await apiAuth();
    const { zoneId } = await params;

    counter = 0;

    const { data: zones, error } = await supabase
      .from("zones")
      .select("*")
      .eq("zone_id", zoneId);

    if (error) {
      return NextResponse.json(
        { error: "Failed to fetch zone", message: error.message },
        { status: 500 }
      );
    }

    if (zones.length === 0) {
      return NextResponse.json({ error: "Zone not found" }, { status: 404 });
    }

    return NextResponse.json(zones);
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
