import express from "express";
import { getAllProducts } from "../models/productModel";
import { getAllProductsController } from "../controllers/productController";

const router = express.Router();

// Define the route for getting all products
router.get("/products", getAllProductsController);

export default router;
