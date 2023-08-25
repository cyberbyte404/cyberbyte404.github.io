import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js';
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import { getFirestore, collection, getDocs, onSnapshot } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyC2gCo3UOpEOe1opwhN5YkzgxmNxvHfF5M",
    authDomain: "cyberbyte-academy.firebaseapp.com",
    projectId: "cyberbyte-academy",
    storageBucket: "cyberbyte-academy.appspot.com",
    messagingSenderId: "896909864668",
    appId: "1:896909864668:web:83ade6e2908bb9df5a8e19",
    measurementId: "G-FX9PTDDR8G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Firebase Firestore and get a reference to the service
const db = getFirestore(app);

// authentication
onAuthStateChanged(auth, function (user) {
   if (user){

   }else {
    document.querySelector(".courses-auth-alert").classList.remove("invisible");
   } 
});

// collection references
let coursesCollection = collection(db, "courses");

// Fetch all the courses data and add them to the HTML
getDocs(coursesCollection).then(function (snapshot) {
    console.log(snapshot.docs[0].data().text);
    // document.querySelector(".courses-sec-c").innerHTML = `
    // <h1 class="text heading">Courses</h3>
    // `;
    // document.querySelector(".courses-sec-c").innerHTML = ``;
});