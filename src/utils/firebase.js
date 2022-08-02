// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnqdZGLg_HumqvVnNBGYn-hfPCh1mQmw8",
  authDomain: "ecommerce-app-8f17d.firebaseapp.com",
  projectId: "ecommerce-app-8f17d",
  storageBucket: "ecommerce-app-8f17d.appspot.com",
  messagingSenderId: "84765662680",
  appId: "1:84765662680:web:ebbec2ae9aec56540426ad",
  measurementId: "G-CR0508WK47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);