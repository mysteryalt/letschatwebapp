
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyALbcPZF8uZKHD7_2gU2B5gLVqEz24xU_M",
      authDomain: "kwitter-67441.firebaseapp.com",
      databaseURL: "https://kwitter-67441-default-rtdb.firebaseio.com" ,
      projectId: "kwitter-67441",
      storageBucket: "kwitter-67441.appspot.com",
      messagingSenderId: "852218092470",
      appId: "1:852218092470:web:1e6aba267153eda359ff17"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    user_name=localStorage.getItem("username")
    document.getElementById("username").innerHTML = "Welcome " + user_name

   function addroom() {
         room_name= document.getElementById("addroom").value 
         firebase.database().ref("/").child(room_name).update({
               purpose:"adding room name"
         });
      localStorage.setItem("room_name" , room_name)
         window.location="kwitter_page.html"
   }
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names)
row = "<div class='room_name' id='"+Room_names+"' onclick='redirecttoroom(this.id)'># "+Room_names+"</div> <hr>"
document.getElementById("output").innerHTML+= row 
      //End code
      });});}
getData();
function redirecttoroom(name) {
console.log(name)
localStorage.setItem("room_name" , name)
window.location="kwitter_page.html"
}

function logout() {
localStorage.removeItem("room_name")
localStorage.removeItem("username")
window.location = "index.html"
}