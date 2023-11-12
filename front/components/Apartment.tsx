// Definition of the Apartment type
interface Apartment {
  _id?: string; // Optional property, as it might not be present for new apartments
  name: string;
  description: string;
  area: string;
  size: number;
  propertyType: string;
  bedrooms: number;
  price: number;
  compound: string;
  realEstateDeveloper: string;
  images: string[] | string; // Images can be an array of strings or a single string
}

export default Apartment;
