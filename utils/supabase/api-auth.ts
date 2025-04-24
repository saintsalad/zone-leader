// utils/supabase/requireUser.ts
import { createClient } from "@/utils/supabase/sever";
import { UnauthorizedError } from "@/lib/exceptions/UnauthorizedError";
export const apiAuth = async () => {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (!user || error) throw new UnauthorizedError();

  return { user, supabase };
};
