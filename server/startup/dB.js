import mongoose from "mongoose";

export default async function DBConnection() {
  await mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(() => console.log("connected to mongodb..."))
    .catch((err) => {
      console.log("AN ERROR OUCCURED", err);
    });
}