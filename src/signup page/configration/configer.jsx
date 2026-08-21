// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyA0g1J7k8n5x6y7z8a9b0c1d2e3f4g5h6i",
  authDomain: "users-data-59235.firebaseapp.com",
  projectId: "users-data-59235",
  storageBucket: "users-data-59235.firebasestorage.app",
  messagingSenderId: "90025055566",
  appId: "1:90025055566:web:e95f3d3d950a4b1f6d3a1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

export default app;
