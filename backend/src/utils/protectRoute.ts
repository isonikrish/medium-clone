import { getCookie } from "hono/cookie";
import { verify } from "hono/jwt";
import { Context } from "hono";
import { PrismaClient } from "@prisma/client/edge.js";
import { withAccelerate } from "@prisma/extension-accelerate";

export async function protectRoute(c: Context, next: () => Promise<void>) {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const token = getCookie(c, "jwt");
    if (!token) {
      return c.json({ error: "Unauthorized: No token provided" }, 401);
    }

    const payload = await verify(token, c.env.JWT_SECRET);
// @ts-ignore
    const user = await prisma.user.findFirst({where: {id:payload.id}})
    // console.log(user)
    c.set("user", user);

    return next();
  } catch (err) {
    return c.json({ error: "Unauthorized: Invalid token" }, 401);
  }
}
