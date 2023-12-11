// import {getDatabase, ref, set} from 'firebase/database'


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Category from './pages/category/Category';

import CreateAccount from './pages/CreateAccount';
import Footer from './pages/footer/Footer';
import Habit from './pages/habit/Habit';
import Login from './pages/Login';





// const db = getDatabase(app);
// const putData = ()=>{
//   set(ref(db, "users/vicky"),
//   {
//     id:1,
//     name:"vicky",
//     email : "vicky@test.in"
//   })
// }


function App() {

  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        
       
        <Route path='/login' element={<Login/>} />
        <Route path='/create' element={<CreateAccount/>} />
        <Route path='/' element={<Category/>} />
        <Route path='/habit' element={<Habit/>} />
        
      </Routes>
     
      </BrowserRouter>
      <Footer/>

    </div>
  );
}

export default App;
