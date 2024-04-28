import mongoose from "mongoose";
let count = 0;

const connectToDb = async () => {
    console.log("MongoDB connection with retry");
    await mongoose
        .connect(`mongodb+srv://bugrauslu:bugrauslu@bugra.v23tn.mongodb.net/homework?retryWrites=true&w=majority`)
        .then(() => {
           console.log("MongoDB is connected");
        })
        .catch((err) => {
            console.log("MongoDB connection unsuccessful, retry after 5 seconds. ", ++count);
            setTimeout(connectToDb, 5000);
        });
};

export default connectToDb;
