
//ADICIONE SEUS LINKS FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyASvEjJhASyvR6pS2FqX4txGcyQxBbtQ88",
  authDomain: "chatuol-a505e.firebaseapp.com",
  databaseURL: "https://chatuol-a505e-default-rtdb.firebaseio.com/",
  projectId: "chatuol-a505e",
  storageBucket: "chatuol-a505e.appspot.com",
  messagingSenderId: "158027378755",
  appId: "1:158027378755:web:fbd878d758e697a36ce4f6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update
  ({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) 
  { document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function(childSnapshot) 
    { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
       row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
       document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
