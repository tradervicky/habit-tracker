import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyD-kqQNx658CAWkN1otii-9Bh8cH7QHTe8",
    authDomain: "habit-tracker-14151.firebaseapp.com",
    databaseURL: "https://habit-tracker-14151-default-rtdb.firebaseio.com",
    projectId: "habit-tracker-14151",
    storageBucket: "habit-tracker-14151.appspot.com",
    messagingSenderId: "391151885157",
    appId: "1:391151885157:web:6b3f565443a290f8791f8c",
    databaseURL: "https://habit-tracker-14151-default-rtdb.firebaseio.com/"
  };
  
  const app = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app)
  const database = getDatabase(app);
const FirebaseContext = createContext(null);

// create data in database 
const putData = (key, data, email, password)=>{
    set(ref(database, 'users/'),{
        email: email,
        password: password
    })
}
const CreateCategory = (category, icon)=>{
    set(ref(database, 'category/'),{
        name: category,
        icon: icon
    })
}


// signup function
const signUpEmailPassword = ( email, password)=>{
    createUserWithEmailAndPassword(auth, email, password).then( 
        console.log("success")
      )
      .catch((error) => {
       console.error(error.message)
      });
}
//create with google
const signUpwithGoogle = ()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
        
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential)
      
      }).catch((error) => {
        // Handle Errors here.
        console.error(error)
      });
}
// signin function

const signinEmailPassword = (email, password)=>{
    signInWithEmailAndPassword(auth, email, password).then(console.log("success")).catch((err)=>console.error(err.message))
}





export const FirebaseProvider = (props)=>{
    return(
        <FirebaseContext.Provider value={{putData,signUpEmailPassword,signinEmailPassword,signUpwithGoogle, CreateCategory}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}
export const useFirebase = ()=> useContext(FirebaseContext)

    