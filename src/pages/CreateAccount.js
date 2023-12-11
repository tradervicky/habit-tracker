import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as api from '../api/api';
import { useFirebase } from '../context/FirebaseContext';
import styles from './Login.module.css';

function CreateAccount() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
const firebase = useFirebase();
  const navigate = useNavigate();
  

  const handleCreateAccount = async (e) => {
    e.preventDefault(); 

    try {
      
      firebase.signUpEmailPassword(email,password , name)
      
    } catch (err) {
      console.error('Account creation error:', err);
      setError(err.message || 'Error creating account');
    }
  };

const navigateLogin = ()=>{
  navigate('/login')
}
  return (
    <div className={styles.mainContainerLogin}>
      <h3>Create Account</h3>
      
        <div className={styles.LoginFormContainer}>
          <div className={styles.inputValuesUser}>
            <div className={styles.UsernameUSER}>
              <label htmlFor="email">
                Username<span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.UsernameUSER}>
              <label htmlFor="name">
                Name<span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.UserPasswordUser}>
              <label htmlFor="password">
                Password<span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={styles.UserLoginBtn}>
              <button type="submit" onClick={handleCreateAccount}>Create Account</button>
            </div>
          </div>
          <div className={styles.ForgetPasswordUser}>
            <p>Already have an account? <a href="" onClick={navigateLogin}>Sign in</a></p>
          </div>
          {error && <p className={styles.error}>{error}</p>}
        </div>
      
    </div>
  );
}

export default CreateAccount;
