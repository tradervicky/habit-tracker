import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useFirebase } from '../context/FirebaseContext';
import styles from './Login.module.css'

function Login() {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const firebase = useFirebase();
  const navigate = useNavigate()
const handleLogin = ()=>{
  firebase.signinEmailPassword(username, password)
  .then(
    navigate('/success')
  ).catch((err)=>
  console.error(err.messsage)
  )
}
const handleLoginGoogle =()=>{
  firebase.signUpwithGoogle()
}
  return (
    <div className={styles.mainContainerLogin}>
      <h3>User Login</h3>
      <div className={styles.LoginFormContainer}>
        <div className={styles.inputValuesUser}>
          <div className={styles.UsernameUSER}>
            <label htmlFor="username">
              username<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles.UserPasswordUser}>
            <label htmlFor="password">
              password<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.UserLoginBtn}>
            <button onClick={handleLogin}>login</button>
          </div>
        </div>
        <div className={styles.ForgetPasswordUser}>
          <p onClick={handleLoginGoogle}>LoginWithGoogle</p>
          <p>Forget Password?</p>
        </div>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  )
}

export default Login