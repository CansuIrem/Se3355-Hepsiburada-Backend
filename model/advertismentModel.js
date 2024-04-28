import mongoose from "mongoose";
const Schema = mongoose.Schema;

const advertSchema = new Schema(
	{
		img: {
			type: String,
			required: true,
		},
        title:{
            type:String,  
        },
		subTitle:{
            type:String,  
        }
	},
	{ timestamps: true }
);

const advert = mongoose.model("Adverts", advertSchema);

const create = (Data) => {
	const newAddvert = new advert(Data);
	return newAddvert.save();
};

const find = async (query) => {
	const foundData = await advert.find(query);
	return foundData;
};


export default {
	create,
	find
};
