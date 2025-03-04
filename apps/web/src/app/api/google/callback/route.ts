import { createSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const accessToken = searchParams.get("access_token");
  const refreshToken = searchParams.get("refresh_token");
  const userId = searchParams.get("userId");
  const name = searchParams.get("name");

  if (!accessToken || !refreshToken || !userId || !name)
    throw new Error("Google Oauth Failed!");

  await createSession({
    user: {
      id: userId,
      name: name,
    },
    accessToken,
    refreshToken,
  });

  redirect("/");
}
