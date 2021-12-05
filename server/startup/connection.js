import mongoose from "mongoose";

export default async function connection(app) {
  const port = process.env.PORT || 3001;

  await mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(() =>
      app.listen(port, () =>
        console.log(`Listening on port ${port} \nand connected to mongodb...`)
      )
    )
    .catch((err) => {
      console.log("AN ERROR OUCCURED...", err);
    });
}
