import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { getDatabase, onValue,get ,push, ref, set } from "firebase/database";


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
const CreateCategory = (category, icon,uid ) => {
    const categoriesRef = ref(database, 'category/');
    const newCategoryRef = push(categoriesRef); 

    set(newCategoryRef, {
        name: category,
        icon: icon,
        userId : uid
    });
}
// read data 
// update category data 


const readAllCategories = async () => {
    try {
      const categoriesRef = ref(database, 'category/');
      const snapshot = await get(categoriesRef);
  
      if (snapshot.exists()) {
        const categoriesData = snapshot.val();
        const categories = Object.keys(categoriesData).map((categoryKey) => ({
          id: categoryKey,
          ...categoriesData[categoryKey],
        }));
        return categories;
      } else {
        return [];
      }
    } catch (error) {
      throw error;
    }
  };

  // method -2

//   const readAllCategories = () => {
//     return new Promise((resolve, reject) => {
//       const categoriesRef = ref(database, 'category/');
  
//       onValue(categoriesRef, (snapshot) => {
//         const categoriesData = snapshot.val();
  
//         if (categoriesData) {
//           const categories = Object.keys(categoriesData).map((categoryKey) => {
//             return {
//               id: categoryKey,
//               ...categoriesData[categoryKey],
//             };
//           });
//           resolve(categories);
//         } else {
//           resolve([]);
//         }
//       }, (error) => {
//         reject(error);
//       });
//     });
//   };
  
  
    

// signup function
const signUpEmailPassword = (email, password , setUid) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user)
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
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

const signinEmailPassword = async (email, password,setUid) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      if (user) {
        const uid = user.uid;
        setUid(uid);
        localStorage.setItem('uid', uid);
        console.log(uid);
      }

      return { success: true, message: "Authentication successful" };
    } catch (error) {
      throw error;
    }
  };
  





export const FirebaseProvider = (props)=>{
    return(
        <FirebaseContext.Provider value={{putData,signUpEmailPassword,signinEmailPassword,signUpwithGoogle, CreateCategory, readAllCategories}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}
export const useFirebase = ()=> useContext(FirebaseContext)

    
