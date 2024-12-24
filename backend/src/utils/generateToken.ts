import { setCookie } from "hono/cookie";
import { sign } from "hono/jwt";

export async function generateTokenAndSetCookie(c: any, userId: any) {
  const jwt = await sign(
    {
      id: userId,
    },
    c.env.JWT_SECRET
  );
  setCookie(c, "jwt", jwt, {
    httpOnly: true,
    secure: false,
    maxAge: 60 * 60 * 24,
    path: "/",
  });
}
