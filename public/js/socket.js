const socket = io("/");
socket.on("connect", () => {
  console.log("Connected to the server" + " " + socket.id);
});

socket.on("loadnotes", (data) => {
  console.log(data);
});

const send = document.getElementById("add_patient_inpatient");
send.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("inpatient");
  socket.emit("sendinpatient");
  // testTableID.innerHTML = "Test";
});
