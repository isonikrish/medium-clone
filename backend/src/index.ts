import { Hono } from "hono";
import {cors} from 'hono/cors'


import authRoutes from "./routes/auth";
import blogRoutes from "./routes/blog";
const app = new Hono();
app.use("*",cors({
    origin: "http://localhost:5173",
    credentials: true,
}))

app.route("/api/v1/user", authRoutes);
app.route("/api/v1", blogRoutes)


export default app;
