// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyHdEIkxUHghydKrY9xAhVqJAhIMEgcF0",
  authDomain: "chatarra-rock.firebaseapp.com",
  projectId: "chatarra-rock",
  storageBucket: "chatarra-rock.appspot.com",
  messagingSenderId: "209502221308",
  appId: "1:209502221308:web:72bf815ff80a68e85c3879",
  measurementId: "G-XX28BHWYV4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { analytics, storage, auth }