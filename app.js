/** @format */

import express from "express";
const app = express();
app.use(express.json());
app.use(express.json({limit: "50mb"}));
import advertismentModel from "./model/advertismentModel.js";
import productModel from "./model/productModel.js";
import { configDotenv } from "dotenv";
import connectToDb from "./utils/connectToDB.js";
const port = 5500;

app.get("/", async (req, res) => {
    res.status(200).json({
        message: "app is working",
    });
});

//add advertisment
app.post("/addAdvert", async (req, res) => {
    try {
        const data = req.body;
        const addAdvert = await advertismentModel.create(data);
        return res.status(200).json({
            message: "advertisment added",
            data: addAdvert,
        });
    } catch (error) {
        console.log(error);
        return res.json({
            message: "hata",
            err: error,
        });
    }
});

//show advertisment
app.get("/main", async (req, res) => {
    try {
        const foundData = await advertismentModel.find();
        return res.status(200).json({
            message: "advertisment listed",
            data: foundData,
        });
    } catch (error) {
        console.log(error);
        return res.json({
            message: "hata",
            err: error,
        });
    }
});

//add product
app.post("/addProduct", async (req, res) => {
    try {
        const data = req.body;
        const addAdvert = await productModel.create(data);
        return res.status(200).json({
            message: "product added",
            data: addAdvert,
        });
    } catch (error) {
        console.log(error);
        return res.json({
            message: "hata",
            err: error,
        });
    }
});

//list product all
app.get("/listProduct", async (req, res) => {
    try {
        const foundData = await productModel.find();
        return res.status(200).json({
            message: "advertisment listed",
            data: foundData,
        });
    } catch (error) {
        console.log(error);
        return res.json({
            message: "hata",
            err: error,
        });
    }
});

//list product by id
app.get("/listProductbyId/:Id", async (req, res) => {
    try {
        const productId = req.params.Id;
        const foundData = await productModel.find({_id:productId});
        return res.status(200).json({
            message: "advertisment listed",
            data: foundData,
        });
    } catch (error) {
        console.log(error);
        return res.json({
            message: "hata",
            err: error,
        });
    }
});

app.post("/searchProduct",async(req,res)=>{
    try {
        const data = req.body;
        const searchData = data.keyword
        const foundProduct = await productModel.find({$or: [
            { seller: { $regex: searchData, $options: 'i' } }, // 'i' seçeneği büyük/küçük harf duyarlılığını kaldırır
            { description: { $regex: searchData, $options: 'i' } },
            { category: { $regex: searchData, $options: 'i' } },
            { title: { $regex: searchData, $options: 'i' } }
          ]});
        return res.status(200).json({
            message: "product ",
            data: foundProduct,
        });
    } catch (error) {
        console.log(error);
        return res.json({
            message: "hata",
            err: error,
        });
    }
})

app.listen( process.env.PORT || port, () => {
    console.log(`App started at http://localhost:${port}`);
    connectToDb();
});
