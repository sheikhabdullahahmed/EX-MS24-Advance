// Importing necessary functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getFirestore, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyAUqJjcjYXVY33IeK-8N0OPNDz9YNOKAbQ",
  authDomain: "expo-87544.firebaseapp.com",
  projectId: "expo-87544",
  storageBucket: "expo-87544.appspot.com",
  messagingSenderId: "915899974409",
  appId: "1:915899974409:web:9875909ca0f2aaa7f409d8",
  measurementId: "G-X985EE02F9"
};

// Initializing Firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Function to sign up a user
export function signup(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(`Error: ${errorMessage}`);
    });
}

// Function to log in a user
export function login(email, password) {
   return signInWithEmailAndPassword(auth, email, password)
    .catch((error) => {
      const errorMessage = error.message;
      alert(`Error: ${errorMessage}`);
    });
}

// Function to add a product to Firestore
export async function addProduct(product) {
  try {
    const docRef = await addDoc(collection(db, "products"), product);
    alert("Product added with ID: " + docRef.id);
  } catch (e) {
    console.error("Error adding product: ", e);
    alert("Error adding product: " + e.message);
  }
}

// Function to upload a file to Firebase Storage
export async function uploadFile(file) {
  console.log(file)
  if (!file) return;

  const storageRef = ref(storage, 'products/' + file.name);
  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        console.log(snapshot)
      },
      (error) => {
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          resolve(downloadURL);
          console.log(downloadURL)
        });
      }
    );
  });
}

// Function to fetch products from Firestore
export async function fetchProducts() {
  const querySnapshot = await getDocs(collection(db, 'products'));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}


export async function deleteProduct(productId) {
  try {
    const productRef = doc(db, 'products', productId);
    await deleteDoc(productRef);
  } catch (e) {
    console.error("Error deleting product: ", e);
    alert("Error deleting product: " + e.message);
  }
}









