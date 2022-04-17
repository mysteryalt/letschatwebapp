//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyALbcPZF8uZKHD7_2gU2B5gLVqEz24xU_M",
      authDomain: "kwitter-67441.firebaseapp.com",
      databaseURL: "https://kwitter-67441-default-rtdb.firebaseio.com",
      projectId: "kwitter-67441",
      storageBucket: "kwitter-67441.appspot.com",
      messagingSenderId: "852218092470",
      appId: "1:852218092470:web:1e6aba267153eda359ff17"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("username")
room_name = localStorage.getItem("room_name")

function send() {
message = document.getElementById("msg").value 
firebase.database().ref(room_name).push({
name: user_name ,
message: message ,
like: 0 
});
document.getElementById("msg").value = " "
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id)
console.log(message_data)
name1 = message_data['name']
message = message_data['message']
like = message_data['like']
name_with_tag = "<h4> "+  name1  +" <img src='tick.png' class='user_tick'> </h4>"
message_with_tag = "<h5 class='message_h4'>" + message + "</h5>"
like_button = "<button id= '"+firebase_message_id+"' class='btn btn-warning' value='"+ like +"' onclick='updatelike(this.id)'>" 
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> Like: " + like + " </span> </button> <hr>";
row = name_with_tag+message_with_tag+like_button+span_with_tag 
document.getElementById("output").innerHTML += row
//End code
      } });  }); }
getData();

function updatelike(message_id) {
console.log(message_id)
button_id = message_id
likes = document.getElementById(button_id).value
updated_likes = Number(likes) + 1
console.log(updated_likes)
firebase.database().ref(room_name).child(message_id).update({
like: updated_likes
});
}
function logout() {
localStorage.removeItem("room_name")
localStorage.removeItem("username")
window.location = "index.html"
}