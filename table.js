// table.js
//uses websocket io to communicate with server and client and updates the UI
const socket = require("socket.io")(server);


//listen for the start game event from server
socket.on("startGame", (data) => {
    // update UI to show the game has started
    updateUI(data);
    
});
//listen for the move event from server
socket.on("serverMove", (data) => {
    // update UI to show the move
    updateUI(data);
    
});
//listen for move event from client
socket.on("clientMove", (data) => {
    // update UI to show the move
    updateUI(data);
    // send the move to the server
    socket.emit("serverMove", data);
    
});
//function to update the UI with the latest game data
function updateUI(data) {
    //update the table with the latest move
    updateTable(data.table);
    //update the status message with the latest game status
    updateStatus(data.status);
}
//function to update the table with the latest move
function updateTable(table) {
    //update the table with the latest move
    io.emit("updateTable", table);
}
//function to update the status message with the latest game status
function updateStatus(status) {
    //update the status message with the latest game status
    io.emit("updateStatus", status);
}
//listen
server.listen(3000, () => {
    console.log("listening on port 3000");
});

