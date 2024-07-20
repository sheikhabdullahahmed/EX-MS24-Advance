
// import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword,  signInWithEmailAndPassword } from "firebase/auth";


// const firebaseConfig = {
//   apiKey: "AIzaSyAUqJjcjYXVY33IeK-8N0OPNDz9YNOKAbQ",
//   authDomain: "expo-87544.firebaseapp.com",
//   projectId: "expo-87544",
//   storageBucket: "expo-87544.appspot.com",
//   messagingSenderId: "915899974409",
//   appId: "1:915899974409:web:9875909ca0f2aaa7f409d8",
//   measurementId: "G-X985EE02F9"
// };


// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);


// function  signup  (email,password)  {
//     const auth = getAuth();
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         alert("sign up")
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         alert("error", error)
//       });

// }


// function login (email, password) {
//     const auth = getAuth();
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         alert("looking good")
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         alert("error 2", error)
//       });

// }

// export default {signup, login }