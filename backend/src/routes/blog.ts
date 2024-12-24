import { Hono } from "hono";
import { protectRoute } from "../utils/protectRoute";
import { handleCreateBlog, handleEditBlog, handleGetBlog, handleGetBlogs } from "../controllers/blog";

const blogRoutes = new Hono();


blogRoutes.post("/blog", protectRoute, handleCreateBlog)
blogRoutes.put("/blog", protectRoute, handleEditBlog)
blogRoutes.get("/blog/bulk",protectRoute, handleGetBlogs);
blogRoutes.get("/blog/:id", protectRoute, handleGetBlog)


export default blogRoutes;