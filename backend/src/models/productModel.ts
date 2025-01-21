import pool from "../database";

// Define the product interface
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}

// Function to get all products from the database
const getAllProducts = async (): Promise<Product[]> => {
  const result = await pool.query("SELECT * FROM products");
  return result.rows;
};

export { getAllProducts, Product };
