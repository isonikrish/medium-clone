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
    secure: true,
    maxAge: 60 * 60 * 24,
    path: "/",
    sameSite: "None"
  });
  return c.json({ message: 'Token generated and cookie set' });
}
