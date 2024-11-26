const socket = io()

let chatInput = document.getElementById('chatInput')
let chatSend = document.getElementById('chatSend')
let chatSpace = document.getElementById('chatSpace')

let chatInputName = document.getElementById('chatInputName')
let chatSendName = document.getElementById('chatSendName')

socket.on('updatePlayers', (players) => {
    console.log(players)
})

socket.on('resendMessage', (message, receivingSocket) => {
    console.log(message)

    let newBubble = document.createElement('li')
    newBubble.innerText = receivingSocket + ": " + message
    chatSpace.appendChild(newBubble)
})



function sendMessage(){
    console.log("Sending message")
    socket.emit('sendMessage', chatInput.value)
}

function setName(){
    console.log("Setting name")
    socket.emit('setName', chatInputName.value)
}