import { authFetch } from "@/lib/authFetch";
import { deleteSession } from "@/lib/session";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const response = await authFetch(`${process.env.BACKEND_URL}/auth/signout`, {
    method: "POST",
  });
  if (!response.ok) {
    await deleteSession();
  }
  // await deleteSession();

  revalidatePath("/", "layout");
  revalidatePath("/", "page");

  return NextResponse.redirect(new URL("/", req.nextUrl));
}
