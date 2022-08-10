const express = require("express");
const {engine} = require("express-handlebars");
const productRouter = require("./routes/productRoutes");
const templateRouter = require("./routes/templateRoutes");
const productSvcs = require("./services/productServices");
const chatSvcs = require("./services/chatServices")
const {Server: HTTPServer} = require("http");
const {Server: SocketServer} = require("socket.io");
const path = require("path");

const app = express();
const httpServer = new HTTPServer(app);
const io = new SocketServer(httpServer);
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.set("views", path.join(__dirname + "/views"));

app.engine(".hbs", engine({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: path.join(__dirname + "/views/layouts"),
    partialsDir: path.join(__dirname + "/views/partials")
}))

app.set("view engine", ".hbs");

app.use("/api/products", productRouter);
app.use("/template", templateRouter);

io.on("connection", (socket) => {
    console.log("new client");
    io.emit("products", productSvcs.getAll())
    io.emit("INIT", chatSvcs.getAll())

    socket.on("POST_PRODUCT", (product) => {
        console.log(product)
        productSvcs.saveNewProduct(product);
        io.sockets.emit("products", productSvcs.getAll());
    })

    socket.on("POST_MESSAGE", (msg) => {
        let date = new Date()
        const newMsg = {...msg, id: socket.id, date: date.toLocaleString()};
        chatSvcs.saveNewMessage(newMsg);
        io.sockets.emit("NEW_MESSAGE", newMsg);
    })
    
})

httpServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})