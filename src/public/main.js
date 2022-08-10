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

// CHAT -----------------------------------------------------

socket.on("INIT", (messages)=> {
    document.getElementById("posts").innerHTML = "";
    messages
        .forEach(msg => appendMessage(msg));
});


socket.on("NEW_MESSAGE", (msg) => {
    appendMessage(msg)
});

function appendMessage(msg) {
    document.getElementById("posts").innerHTML += `
    <div class="post">
        <p>
            <span class="email">${msg.email}</span><span class="date">[${msg.date}</span>]: <span class="msg">${msg.message}</span>
        </p>
    </div>
    `;
}

function sendMessage() {
    const email = document.getElementById("email").value;
    const message = document.getElementById("msg").value;
    if (!email) return;
    socket.emit("POST_MESSAGE", {email, message})
}
