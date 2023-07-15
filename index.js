const express = require("express");
const conectaDB = require("./config/db");
const cors = require("cors");

// creamos server
const app = express();

// conectamos a la DB
conectaDB();
app.use(cors());

// definimos ruta principal
// app.get("/", (req, res) => {
//   res.send("hola mundo");
// });
app.use(express.json());

app.use("/api/productos", require("./routes/producto"));

app.listen(4000, () => {
  console.log("el servidor esta corriendo");
});
