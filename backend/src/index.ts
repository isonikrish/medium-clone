import { Hono } from "hono";

import authRoutes from "./routes/auth";
import blogRoutes from "./routes/blog";
const app = new Hono();

app.route("/api/v1/user", authRoutes);
app.route("/api/v1", blogRoutes)


export default app;
