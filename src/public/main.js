const socket = io();

socket.on("connect", ()=> {
    console.log("connected to server")
})

socket.on("products", (products) => {

    fetch("http://localhost:8080/products.hbs")
        .then(res => {
            return res.text();
        })
        .then(text => {
            const template = Handlebars.compile(text)
            const html = template({products: products})
            document.getElementById("products").innerHTML = html;
        }) 
})

function saveProduct() {
    const title = document.getElementById("title").value;
    const price = document.getElementById("price").value;
    const thumbnail = document.getElementById("thumbnail").value;

    socket.emit("POST_PRODUCT", {title, price, thumbnail})
}
