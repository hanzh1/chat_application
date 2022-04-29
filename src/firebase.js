import firebase from "firebase/compat/app";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, addDoc, collection } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  checkActionCode,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB6DW6l39hZOl-IhNVrGeam7qlx_CvwT5I",
    authDomain: "terrierchat-9c94a.firebaseapp.com",
    projectId: "terrierchat-9c94a",
    storageBucket: "terrierchat-9c94a.appspot.com",
    messagingSenderId: "306549665874",
    appId: "1:306549665874:web:d217ef3566cadd50cb6f8b",
    measurementId: "G-8Y9B54KF8G"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  // const register = async (email, password) => {
  //   try {
      
  //       const res = await createUserWithEmailAndPassword(auth, email, password);
  //       const user = res.user;
  //       const docRef = await addDoc(collection(db, "users"), {
  //         uid: user.uid,
  //         email,
  //         role,
  //         school,
  //       });
  //       console.log("Document written with ID: ", docRef.id);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     alert(err.message);
  //   }
  // };
  
  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  
  const logout = () => {
    auth.signOut();
  };
  
  export { app, db, auth, signIn, resetPassword, logout };

  export default firebase;