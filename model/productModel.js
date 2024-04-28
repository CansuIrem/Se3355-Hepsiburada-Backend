import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema(
	{
		img: {
			type: String
		},
        title:{
            type:String,  
        },
        price: {
            type:Number,
        },
        category: {
            type:String,
        },
        description: {
            type:String,
        },
		seller:{
			type:String,
		},
		address:{
			type:String,
		},
		deliverTomorrow:{
			type: Boolean,
			default:false,
		}
	},
	{ timestamps: true }
)

const product = mongoose.model("Products", productSchema);

const create = (Data) => {
	const newProduct = new product(Data);
	return newProduct.save();
};

const find = async (query) => {
	const foundData = await product.find(query);
	return foundData;
};


export default {
	create,
	find
};
