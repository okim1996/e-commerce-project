import { Request, Response } from "express";
import { getAllProducts } from "../models/productModel";

// Controller function to handle GET request and return all products
const getAllProductsController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const products = await getAllProducts();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: `Internal Server Error` });
  }
};

export { getAllProductsController };
