import { Index } from "@upstash/vector";
import * as dotenv from "dotenv";

dotenv.config();
/**
 * Represents a product with specific attributes.
 */
export type ApiProductType = {
  id: string; // Unique identifier for the product
  imageId: string; // Identifier for the product's image
  name: string; // Name of the product
  size: "S" | "M" | "L"; // Available sizes for the product
  color: "white" | "beige" | "blue" | "green" | "purple"; // Available colors for the product
  price: number; // Price of the product
};

/**
 * Database index for storing and querying products.
 */
export const db = new Index<ApiProductType>();

// Example of adding a product to the index (uncomment and customize if needed)
// try {
//   productIndex.add({
//     id: "1",
//     imageId: "img123",
//     name: "Cool Shirt",
//     size: "M",
//     color: "blue",
//     price: 29.99
//   });
// } catch (error) {
//   console.error("Error adding product to index:", error);
// }
