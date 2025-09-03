// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEcEpCqWB5CX_UpPCcuC01gt_HcXpVysQ",
  authDomain: "netflixgpt-1f35c.firebaseapp.com",
  projectId: "netflixgpt-1f35c",
  storageBucket: "netflixgpt-1f35c.firebasestorage.app",
  messagingSenderId: "775229967837",
  appId: "1:775229967837:web:683786975f99bcefe37a34",
  measurementId: "G-LJ3Y2HM9R7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
