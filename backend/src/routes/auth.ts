import {Hono} from 'hono'
import { handleGetMe, handleSigin, handleSignup } from '../controllers/auth';
import { protectRoute } from '../utils/protectRoute';

const authRoutes = new Hono();


authRoutes.post("/signup", handleSignup)
authRoutes.post("/signin", handleSigin)
authRoutes.get("/getMe",protectRoute, handleGetMe)
export default authRoutes