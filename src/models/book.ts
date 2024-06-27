import { model } from "mongoose";
import bookSchema from "./schemas/bookSchema";

const Book = model("book", bookSchema);

export default Book