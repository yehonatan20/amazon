import { generateCustomError } from "../middleware/errorHandler.js"
import Product from "../models/Product.js"

export const getProducts = async(req,res) => {
    const products = await Product.find({});
    res.send(products);
}