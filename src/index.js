const express = require("express");
const productRouter = require("./routes/productRoutes");
const templateRouter = require("./routes/templateRoutes")

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/products", productRouter);
app.use("/", templateRouter);

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})