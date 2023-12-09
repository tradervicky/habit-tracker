// import {getDatabase, ref, set} from 'firebase/database'


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Category from './pages/category/Category';

import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import Success from './pages/Success';




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
        
        <Route path='/succ' element={<Success/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/create' element={<CreateAccount/>} />
        <Route path='/' element={<Category/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
