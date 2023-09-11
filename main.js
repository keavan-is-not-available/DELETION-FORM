const firebaseConfig = {
    apiKey: "AIzaSyAN47AseloCzrbVkUaCijJ4bHoRoBxwQps",
    authDomain: "kwitter-of-knockoff-twit-17218.firebaseapp.com",
    projectId: "kwitter-of-knockoff-twit-17218",
    storageBucket: "kwitter-of-knockoff-twit-17218.appspot.com",
    messagingSenderId: "906824446564",
    appId: "1:906824446564:web:af7ef4599616ff5cd22571"
  };

  
 function addUser(){
    email=document.getElementById("email").value;
    f_name=document.getElementById("f_name").value;
firebase.database().ref("/").child(email).update({
   purpose: "adding user",
   email_adress:email,
   fname:f_name
});
 }