import * as signalR from "@microsoft/signalr";

let connection = new signalR.HubConnectionBuilder()
    .withUrl("https://localhost:7282/serviceHub")
    .configureLogging(signalR.LogLevel.Information)
    .build();

async function start() {
    try {
        await connection.start();
        console.log("connected");
    } catch (err) {
        console.log(err);
        setTimeout(start, 5000);
    }
};

connection.onclose(start);

start();

export default connection;