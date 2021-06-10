//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDUJszjil0g4vgEue8LaEpshj79w4Zoba8",
      authDomain: "class-test-817de.firebaseapp.com",
      databaseURL: "https://class-test-817de-default-rtdb.firebaseio.com",
      projectId: "class-test-817de",
      storageBucket: "class-test-817de.appspot.com",
      messagingSenderId: "673949863127",
      appId: "1:673949863127:web:8b2fa73f149e8adfab3492"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
        name : user_name,
        message : msg,
        like : 0 
  })   ;
  document.getElementById("msg").value="";
}