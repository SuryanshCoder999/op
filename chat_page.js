const firebaseConfig = {
    apiKey: "AIzaSyCpCsG18gbQpPKaAIt5z-F0QS0-5P9Znbo",
    authDomain: "kwitter-c82ff.firebaseapp.com",
    databaseURL: "https://kwitter-c82ff-default-rtdb.firebaseio.com",
    projectId: "kwitter-c82ff",
    storageBucket: "kwitter-c82ff.appspot.com",
    messagingSenderId: "621610630307",
    appId: "1:621610630307:web:fcee288f2c4f9411cdd316"
  };
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  
function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
    console.log(firebase_message_id);
    console.log(message_data);
    name = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_width_tag = "<h4>"+ name +"<img class = 'user_tick  src='tick.png'></h4>";
    message_width_tag = "<h4 class='message_h4'>" + message + "</h4>";
    like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>like:"+like +"</span></button><hr>";


    row = name_width_tag + message_width_tag +like_button + span_with_tag;
    document.getElementById("output").innerHTML += row;
    } });  }); }
getData();
function updateLike(message_id){
    console.log("clicked on like button -" + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes)+1;
    console.log(updated_likes);
    firebase.database().ref(room_name).child(message_id).update({
          like : updated_likes
    });
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}
