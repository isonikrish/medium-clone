import { PrismaClient } from "@prisma/client/edge.js";
import { withAccelerate } from "@prisma/extension-accelerate";
import { generateTokenAndSetCookie } from "../utils/generateToken";

export async function handleSignup(c: any) {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const { name, email, password } = body;
    if (!name || !email || !password) {
      return c.json({ error: "All fields are required" }, 400);
    }
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return c.json(newUser, 201);
  } catch (error) {
    return c.json({ msg: "Internal Server Error" }, 500);
  }
}
export async function handleSigin(c: any) {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const { email, password } = body;
    if (!email || !password) {
      return c.json({ error: "All fields are required" }, 400);
    }

    const isUserExists = await prisma.user.findFirst({
      where: { email: email },
    });
    if (!isUserExists) {
      return c.json({ msg: "User not exists" }, 400);
    }

    await generateTokenAndSetCookie(c,isUserExists.id);

    return c.json(isUserExists, 200);
  } catch (error) {
    return c.json({ msg: "Internal Server Error" }, 500);
  }
}
export async function handleGetMe(c: any){
  const user = c.get("user");

  if (!user) {
    return c.json({ error: "User not found in context" }, 500);
  }
  return c.json(user)
}