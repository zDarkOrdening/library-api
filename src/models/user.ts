import { model } from "mongoose";
import userSchema from "./schemas/userSchema";

const User = model("user", userSchema);

export default User