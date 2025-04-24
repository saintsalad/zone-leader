import { NextResponse } from "next/server";
import { apiAuth } from "@/utils/supabase/api-auth";
import { UnauthorizedError } from "@/lib/exceptions/UnauthorizedError";

let counter = 0;

export async function GET() {
  try {
    const { supabase } = await apiAuth();

    counter = 0;
    const { data: zones, error } = await supabase.from("zones").select("*");

    if (error) {
      return NextResponse.json(
        { error: "Failed to fetch zones", message: error },
        { status: 500 }
      );
    }

    return NextResponse.json({ zones });
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
