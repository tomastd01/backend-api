const express = require("express");
const productRouter = require("./routes/productRoutes")

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.use("/api/products", productRouter);


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})