function addUser() {
  var userName = document.getElementById("username").value;
  firebase
    .database()
    .ref("/")
    .child(userName)
    .update({ purpose: "adding user" });
  localStorage.setItem("userName", userName);
  window.location = "kwitter.html";
}
