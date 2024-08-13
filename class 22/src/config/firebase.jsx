  import { initializeApp } from "firebase/app";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
  import { addDoc,getFirestore, collection } from "firebase/firestore";

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
  const db = getFirestore(app);


  export function signup (email, password) {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(`Error: ${errorMessage}`);
      });
  }

  export function login (email, password) {
      return signInWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        const errorMessage = error.message;
        alert(`Error: ${errorMessage}`);
      });
  }

  export async function addProduct(product) {
    const { title, description, price, category } = product;

    
    return addDoc(collection(db, "data"), { title, description, price, category });
  }
