var firebaseConfig = {
  apiKey: "AIzaSyAqMy9zxCpqeNYIi_nlTV_j0eA8cYi33bM",
  authDomain: "kwitter-6e059.firebaseapp.com",
  projectId: "kwitter-6e059",
  databaseURL: "https://kwitter-6e059-default-rtdb.firebaseio.com",
  storageBucket: "kwitter-6e059.appspot.com",
  messagingSenderId: "372577202138",
  appId: "1:372577202138:web:879f52a6bbff251067dae3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("userName");
document.getElementById("usernameOutput").innerHTML = `Welcome ${username}!`;

function addRoomName() {
  var localRoomName = document.getElementById("roomname").value;
  firebase
    .database()
    .ref("/")
    .child(localRoomName)
    .set({ purpose: "adding room name" });
  localStorage.setItem("roomName", localRoomName);
  window.location = "kwitter.html";
}

function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code
        console.log("Room Name - " + Room_names);
        row = `<div class='room_name' id='${Room_names}' onclick='redirectRoom(this.id)'>#${Room_names}</div><hr>`;
        document.getElementById("output").innerHTML += row;
        //End code
      });
    });
}
getData();

function redirectRoom(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("roomName");
  localStorage.removeItem("userName");
  window.location.replace("index.html");
}
