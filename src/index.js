const express = require("express");
const productRouter = require("./routes/productRoutes");
const cartRouter = require("./routes/cartRoutes")
const productSvcs = require("./services/productServices");
const chatSvcs = require("./services/chatServices");
const {Server: HTTPServer} = require("http");
const {Server: SocketServer} = require("socket.io");

const app = express();
const httpServer = new HTTPServer(app);
const io = new SocketServer(httpServer);

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);

io.on("connection", (socket) => {
    console.log("new client");
    io.emit("products", productSvcs.getAll())
    io.emit("INIT", chatSvcs.getAll())

    socket.on("POST_PRODUCT", (product) => {
        console.log(product)
        productSvcs.saveNewProduct(product);
        io.sockets.emit("products", productSvcs.getAll());
    })
    
})

const PORT = process.env.PORT || 8080;

httpServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})