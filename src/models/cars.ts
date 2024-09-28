import mongoose, { Document, Schema } from "mongoose";

export interface ICar extends Document {
  name: string;
  image: string;
  passengers: number;
  type: string;
  cost: number;
  desc?: string;
  pic1?: string;
  pic2?: string;
  pic3?: string;
}

const CarSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    passengers: { type: Number },
    type: { type: String, enum: ["auto", "manual"] },
    cost: { type: Number },
    desc: { type: String, required: false },
    pic1: { type: String, required: false },
    pic2: { type: String, required: false },
    pic3: { type: String, required: false },
  },
  { timestamps: true }
);

const Cars = mongoose.models.Cars || mongoose.model<ICar>("Cars", CarSchema);

export default Cars;
