import { model, Document } from "mongoose";
import bookSchema from "./schemas/bookSchema";

interface IBook extends Document {
  name: string;
  author: string;
  genre: string;
  price: number;
  stock: number;
}

const Book = model<IBook>("book", bookSchema);

export default Book