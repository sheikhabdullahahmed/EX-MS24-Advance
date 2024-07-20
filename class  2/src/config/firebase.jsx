import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAUqJjcjYXVY33IeK-8N0OPNDz9YNOKAbQ",
    authDomain: "expo-87544.firebaseapp.com",
    projectId: "expo-87544",
    storageBucket: "expo-87544.appspot.com",
    messagingSenderId: "915899974409",
    appId: "1:915899974409:web:9875909ca0f2aaa7f409d8",
    measurementId: "G-X985EE02F9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function signup(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Sign up successful");
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(`Error: ${errorMessage}`);
    });
}

export function login(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Login successful");
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(`Error: ${errorMessage}`);
    });
}
