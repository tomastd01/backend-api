const express = require("express");
const productRouter = require("./routes/productRoutes");
const cartRouter = require("./routes/cartRoutes");
const { controlAuth } = require("./middleware/auth");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})

server.on("error", err => {
    console.log(`server error: ${err}`)
})