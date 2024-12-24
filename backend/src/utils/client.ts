import { env } from "hono/adapter";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient({
  // @ts-ignore
  datasourceUrl: env.DATABASE_URL,
}).$extends(withAccelerate());


export default prisma;