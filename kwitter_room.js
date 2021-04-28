
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAOQRWLZfdHeXB0VVeOxWAP5Crk99_heFc",
    authDomain: "kwitter-cdc21.firebaseapp.com",
    databaseURL: "https://kwitter-cdc21-default-rtdb.firebaseio.com",
    projectId: "kwitter-cdc21",
    storageBucket: "kwitter-cdc21.appspot.com",
    messagingSenderId: "631831591311",
    appId: "1:631831591311:web:19e20cac1d627c5e75f3fa",
    measurementId: "G-8TZLFN245V"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
  
  function addRoom()
  {
        room_name = document.getElementById("room_name").value;

        firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
        });

        localStorage.setItem("room_name", room_name);

        window.location = "kwitter_page.html"
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirctToRoomName(this.id)' >#"+Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName (name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}