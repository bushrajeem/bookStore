import mongoose from "mongoose";

export const Db_Connection = () => {
  mongoose
    .connect("mongodb://localhost:27017/test")
    .then(() => console.log("Connected!"))
    .catch((err) => console.error("MongoDb coneection failed", err));
};

