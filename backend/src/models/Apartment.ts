import mongoose, { Schema, Document } from 'mongoose';

export interface IApartment extends Document {
  name: string;
  description: string;
  area: string;
  size: number;
  propertyType: string; 
  bedrooms: number;
  price: number;
  compound: string;
  realEstateDeveloper: string;
  images: string[]; // Assuming the images are stored as file paths or URLs
}

const ApartmentSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  area: { type: String, required: true },
  size: { type: Number },
  propertyType: { type: String, required: true },
  bedrooms: { type: Number, required: true },
  price: { type: Number, required: true },
  compound: { type: String },
  realEstateDeveloper: { type: String },
  images: { type: [String], required: true }, // Array of image paths or URLs

});

export default mongoose.model<IApartment>('Apartment', ApartmentSchema,'propertyCollection');

