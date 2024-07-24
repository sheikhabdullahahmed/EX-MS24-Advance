import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore"; 



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


async function signup (userInfo) {
  const { email, password, fullname, age} = userInfo
  await  createUserWithEmailAndPassword(auth, email, password)
  return  addDoc(collection(db, "user"), {email, password, age });   
}


function signin () {
 return signInWithEmailAndPassword(auth, email, password)
}



async function addproduct (product) {
  const {title, description, price, image} = product

  const 
}