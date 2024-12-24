import { PrismaClient } from "@prisma/client/edge.js";
import { withAccelerate } from "@prisma/extension-accelerate";


export async function handleCreateBlog(c: any) {
  const body = await c.req.json();
  const authorId = c.get("user").id;
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        autorId: authorId,
      },
    });
    // console.log(blog);
    return c.json({ msg: "Blog created" }, 200);
  } catch (error) {
    return c.json({ msg: "Internal server error" }, 500);
  }
}

export async function handleEditBlog(c: any) {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.blog.update({
      where: { id: body.id },
      data: {
        title: body.title,
        content: body.content,
      },
    });
    return c.json({ msg: "Blog updated" }, 200);
  } catch (error) {
    return c.json({ msg: "Internal server error" }, 500);
  }
}

export async function handleGetBlog(c: any) {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const blog = await prisma.blog.findFirst({ where: { id: Number(id) } });
    if (!blog) return c.json({ msg: "There is no blog" }, 400);

    return c.json(blog);
  } catch (error) {
    return c.json({ msg: "Internal server error" }, 500);
  }
}
export async function handleGetBlogs(c: any) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blogs = await prisma.blog.findMany({
      select: {
        content: true,
        title: true,
        id: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    return c.json(blogs);
  } catch (error) {

    return c.json({ msg: "Internal server error" }, 500);
  }
}
