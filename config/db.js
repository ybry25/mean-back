const mongoose = require("mongoose");
require("dotenv").config({ path: "variable.env" });

const conectaDB = async () => {
  try {
    await mongoose.connect(process.env.BD_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   useFindAndModify: true,
    });
    console.log("BD conectada");
  } catch (error) {
    console.log(error);
    process.exit(1); // se detiene la app
  }
};

module.exports = conectaDB;
