const {getAllMessages} = require("../database/messages");
const { saveMessagesToDB } = require("./utils");

class chatServices {
    constructor() {
        this.messages = getAllMessages();
    }

    getAll = () => {
        return this.messages;
    }

    saveNewMessage = (newMessage) => {
        const messages = this.messages;

        messages.push(newMessage);
        saveMessagesToDB(messages);
    }
}

module.exports = new chatServices;