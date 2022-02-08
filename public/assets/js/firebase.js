const firebaseConfig = {
  apiKey: "AIzaSyBatTheyGbmlMNu3UabSw0RvKO0NXn-ZDk",
  authDomain: "vanaj-vanguardia.firebaseapp.com",
  projectId: "vanaj-vanguardia",
  storageBucket: "vanaj-vanguardia.appspot.com",
  messagingSenderId: "15712480574",
  appId: "1:15712480574:web:a9114d1f7a3ed4a02d506f",
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

//Variable to access database collection
const db = firestore.collection("contact");

//Get Submit Form
let submitButton = document.getElementById("submit");

let sendMessage = (event) => {
  event.preventDefault();

  let contactName = document.getElementById("name");
  let contactEmail = document.getElementById("email");
  let contactSubject = document.getElementById("subject");
  let contactMessage = document.getElementById("message");

  db.doc()
    .set({
      message: contactMessage.value,
      name: contactName.value,
      subject: contactSubject.value,
      email: contactEmail.value,
    })
    .then(() => {
      // console.log("Data saved")
    })
    .catch((error) => {
      console.log(error);
    });

  contactName.value = "";
  contactEmail.value = " ";
  contactSubject.value = "";
  contactMessage.value = "";
  $(".toast").toast("show");
};

const form = document.getElementById("form");
form.addEventListener("submit", sendMessage);
