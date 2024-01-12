// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTs2vZQn75pfd1nL-qSwE2ws0ypThM2Is",
  authDomain: "registration-page-b4d10.firebaseapp.com",
  databaseURL: "https://registration-page-b4d10-default-rtdb.firebaseio.com",
  projectId: "registration-page-b4d10",
  storageBucket: "registration-page-b4d10.appspot.com",
  messagingSenderId: "961616751196",
  appId: "1:961616751196:web:1326a2e3418699c41ad499"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var username = getInputVal('username');
    var gmail = getInputVal('gmail');
    var password = getInputVal('password');
    var confirmpassword = getInputVal('confirmpassword');
  
    // Save message
    saveMessage(name, username, gmail, password, confirmpassword);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, username, gmail, password, confirmpassword){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      username:username,
      Gmail:Gmail,
      password:password,
      confirmpassword:confirmpassword
    });
  }