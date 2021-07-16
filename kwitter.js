var firebaseConfig = {
  apiKey: "AIzaSyA5PRytVpniBn7qyAmxKrozhTps3ZqC7PQ",
  authDomain: "kwitter-c6df5.firebaseapp.com",
  databaseURL: "https://kwitter-c6df5-default-rtdb.firebaseio.com",
  projectId: "kwitter-c6df5",
  storageBucket: "kwitter-c6df5.appspot.com",
  messagingSenderId: "275849529985",
  appId: "1:275849529985:web:e7f762ab57e8a1a841db80",
  measurementId: "G-2EQ2KKCG62",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

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

        //End code
      });
    });
}
getData();
