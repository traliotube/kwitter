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

userName = localStorage.getItem("userName");
roomName = localStorage.getItem("roomName");

function send() {
  msg = document.getElementById("msg").value;
  firebase.database().ref(roomName).push({
    name: userName,
    msg: msg,
    like: 0,
  });
  document.getElementById("msg").value = "";
}

function getData() {
  firebase
    .database()
    .ref("/" + roomName)
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        childData = childSnapshot.val();
        if (childKey != "purpose") {
          firebase_message_id = childKey;
          message_data = childData;
          console.log(firebase_message_id);
          console.log(message_data);

          name = message_data["name"];
          like = message_data["like"];
          msg = message_data["msg"];

          nameTag = `<h4>${name}<img src="tick.png" alt="" class="user_tick" /></h4>`;
          msgTag = `<h4 class="messgage_h4">${msg}</h4>`;
          likeTag = `<button class="btn btn-warning" id="${firebase_message_id}" value="${like}" onclick="updateLike(this.id)">`;
          spanTag = `<span class="bi bi-hand-thumbs-up">Like: ${like}</span></button><hr>`;

          row = nameTag + msgTag + likeTag + spanTag;
          document.getElementById("output").innerHTML += row;
        }
      });
    });
}
getData();

function updateLike(msgId) {
  console.log("Like clicked - " + msgId);
  buttonId = msgId;
  likes = document.getElementById(buttonId).value;
  updatedLikes = Number(like) + 1;
  console.log(updatedLikes);

  firebase.database().ref(roomName).child(buttonId).update({
    like: updatedLikes,
  });
}

function logout() {
  localStorage.removeItem("roomName");
  localStorage.removeItem("userName");
  window.location.replace("index.html");
}
