function addUser() {
  var userName = document.getElementById("username").value;
  localStorage.setItem("userName", userName);
  window.location = "kwitter.html";
}
