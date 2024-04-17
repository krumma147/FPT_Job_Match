import * as signalR from "@microsoft/signalr";

let connection = null;

export const createConnection = (username) => {
    connection = new signalR.HubConnectionBuilder()
        .withUrl("https://localhost:7282/chatHub?username=" + username)
        .build();

    connection.start()
        .catch(err => console.error('SignalR Connection Error: ', err));
}

export const sendMessage = (sender, recipient, message) => {
    if (connection) {
        connection.invoke("SendMessage", sender, recipient, message)
            .catch(err => console.error(err));
    }
}
export const registerMessageReceivedHandler = (handler) => {
    if (connection) {
        connection.on("ReceiveMessage", handler);
    }
}