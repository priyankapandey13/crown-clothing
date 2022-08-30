// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArt8zuBM3-JWzd16hPHYj0heAKU-UxE8Q",
  authDomain: "crown-db-bc180.firebaseapp.com",
  projectId: "crown-db-bc180",
  storageBucket: "crown-db-bc180.appspot.com",
  messagingSenderId: "910283364404",
  appId: "1:910283364404:web:efe040664dabe43f831261"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
})

export const auth = getAuth();
export const signInWithgooglepopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth)=>{
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
  
  
  // if user data does not exists, then create one
  
  if(!userSnapshot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName, email, createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
      
    }
  }
 return userDocRef;
}