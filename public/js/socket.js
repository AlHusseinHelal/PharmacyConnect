const socket = io("/");
    socket.on('connect', () => {
      console.log('Connected to the server' + " " +  socket.id);
    })

    // const ptfloor = document.getElementById('ptfloor').value;
    //   socket.emit('message', { ptfloor}); 


// function appendMessage(message) {
//   const ptfloor = document.getElementById('ptfloor');
// }


const send = document.getElementById('sendmessage')
send.addEventListener('click', (event) => {
  console.log("inpatient");
  socket.emit("sendinpatient")
});
socket.on('init', data => {
if (data.length) {
  console.log(data);
  location.reload(true);
}
});



socket.on("response", () => {
  console.log("message received");

})


// socket.on('message', (message) => {
//   appendMessage(message);
// });

// function sendMessage() {

// }

