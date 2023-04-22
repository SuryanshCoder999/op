const firebaseConfig = {
      apiKey: "AIzaSyCpCsG18gbQpPKaAIt5z-F0QS0-5P9Znbo",
      authDomain: "kwitter-c82ff.firebaseapp.com",
      databaseURL: "https://kwitter-c82ff-default-rtdb.firebaseio.com",
      projectId: "kwitter-c82ff",
      storageBucket: "kwitter-c82ff.appspot.com",
      messagingSenderId: "621610630307",
      appId: "1:621610630307:web:fcee288f2c4f9411cdd316"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

function addroom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            pourpose : "adding room name"
      });

            localStorage.setItem("room_name",room_name);

            window.location = "chat_page.html";
}
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class ='room_name' id="+Room_names+" onclick= 're(this.id)'> #"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function re(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="!..WELCOME..!"+user_name;