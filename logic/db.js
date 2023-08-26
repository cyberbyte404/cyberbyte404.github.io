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
console.log(auth.currentUser);
onAuthStateChanged(auth, function (user) {
    if (user) {

    } else {
        let courses_sec = document.querySelector(".courses-sec");
        document.querySelector(".courses-auth-alert").classList.remove("invisible");
        let oldHTML = courses_sec.innerHTML;
        courses_sec.innerHTML = oldHTML + `
        <div style="height: 80px"></div>
    `;
    }
});

// collection references
let coursesCollection = collection(db, "courses");

// Fetch all the courses data and add them to the HTML
getDocs(coursesCollection).then(function (snapshot) {
    // close loader
    document.querySelector(".courses-sec-c").innerHTML = "<h1 class='text heading'>Courses</h3> <div class='courses-grid'></div>";

    let rawCourses = snapshot.docs;

    // set the courses on ui
    rawCourses.forEach(rawCourse => {
        let courseData = rawCourse.data();
        let formattedCourseData = {
            title: courseData.title,
            instructor: courseData.instructor,
            price: courseData.price,
            level: courseData.level,
            progress: courseData.progress,
            thumbnail: courseData.thumbnail,
        };

        console.log(courseData);
        let courses_grid = document.querySelector(".courses-grid");

        let oldHTML = courses_grid.innerHTML;

        courses_grid.innerHTML = oldHTML + `
            <div class="course">
                <a href="/course?id=${rawCourse.id}" style="text-decoration:none;">
                    <img src="${formattedCourseData.thumbnail}" />
                    <div class="wrapper"> 
                        <div class="title-price-div">
                            <p class="text title">${formattedCourseData.title}</p>
                            <span class="text price">$${formattedCourseData.price}</span>
                        </div>
                        <div class="text level">
                        <svg class="tag" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.0498 7.0498H7.0598M10.5118 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V10.5118C3 11.2455 3 11.6124 3.08289 11.9577C3.15638 12.2638 3.27759 12.5564 3.44208 12.8249C3.6276 13.1276 3.88703 13.387 4.40589 13.9059L9.10589 18.6059C10.2939 19.7939 10.888 20.388 11.5729 20.6105C12.1755 20.8063 12.8245 20.8063 13.4271 20.6105C14.112 20.388 14.7061 19.7939 15.8941 18.6059L18.6059 15.8941C19.7939 14.7061 20.388 14.112 20.6105 13.4271C20.8063 12.8245 20.8063 12.1755 20.6105 11.5729C20.388 10.888 19.7939 10.2939 18.6059 9.10589L13.9059 4.40589C13.387 3.88703 13.1276 3.6276 12.8249 3.44208C12.5564 3.27759 12.2638 3.15638 11.9577 3.08289C11.6124 3 11.2455 3 10.5118 3ZM7.5498 7.0498C7.5498 7.32595 7.32595 7.5498 7.0498 7.5498C6.77366 7.5498 6.5498 7.32595 6.5498 7.0498C6.5498 6.77366 6.77366 6.5498 7.0498 6.5498C7.32595 6.5498 7.5498 6.77366 7.5498 7.0498Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        
                        ${formattedCourseData.level}</div>
                        <p class="text instructor">Instructor: ${formattedCourseData.instructor}</p>
                        <p class="text status">Status: ${formattedCourseData.progress === "onGoing" ? "Live" : "Finished"}</p>
                    </div>
                </a>
            </div>
            `;

    });
});