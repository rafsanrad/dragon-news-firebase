// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRweYo1HDBf563Q7vTwnqWx06zMzHE6dE",
  authDomain: "my-dragon-news-site.firebaseapp.com",
  projectId: "my-dragon-news-site",
  storageBucket: "my-dragon-news-site.firebasestorage.app",
  messagingSenderId: "568921750436",
  appId: "1:568921750436:web:542fc137d6e3beaaf5df31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;