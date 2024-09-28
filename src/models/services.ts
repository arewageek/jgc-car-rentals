import mongoose, { Schema } from "mongoose";

export interface IService {
  title: string;
  desc: string;
}

const servicesSchema: Schema = new Schema({
  title: { type: String },
  desc: { type: String },
});

const Services =
  mongoose.models.Services ||
  mongoose.model<IService>("Services", servicesSchema);
export default Services;
