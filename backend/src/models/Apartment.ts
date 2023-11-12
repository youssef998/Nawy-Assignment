import mongoose, { Schema, Document } from 'mongoose';

// Define the structure of the Apartment document using the mongoose Schema
export interface IApartment extends Document {
  name: string;
  description: string;
  area: string;
  size?: number; // Size is optional
  propertyType: string;
  bedrooms: number;
  price: number;
  compound?: string; // Compound is optional
  realEstateDeveloper?: string; // Real estate developer is optional
  images: string[]; // Array of image paths or URLs
}

// Define the mongoose Schema for the Apartment model
const ApartmentSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  area: { type: String, required: true },
  size: { type: Number }, // Size is optional
  propertyType: { type: String, required: true },
  bedrooms: { type: Number, required: true },
  price: { type: Number, required: true },
  compound: { type: String }, // Compound is optional
  realEstateDeveloper: { type: String }, // Real estate developer is optional
  images: { type: [String], required: true }, // Array of image paths or URLs
});

// Create the mongoose model for the Apartment, specifying the document interface and the collection name
export default mongoose.model<IApartment>('Apartment', ApartmentSchema, 'propertyCollection');
