"use server";

import { getSession } from "./session";

export const getProfile = async () => {
  const session = await getSession();
  const response = await fetch(`${process.env.BACKEND_URL}/auth/protected`, {
    headers: {
      authorization: `Bearer ${session?.accessToken}`,
    },
  });

  const result = await response.json();

  return result;
};
