import { model, Document } from "mongoose";
import userSchema from "./schemas/userSchema";

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: string
}

const User = model<IUser>("user", userSchema);

export default User