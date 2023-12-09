import React, { useState } from 'react';
import * as api from '../api/api';
import { useFirebase } from '../context/FirebaseContext';
import styles from './Login.module.css';

function CreateAccount() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
const firebase = useFirebase();

  console.log(firebase)
  const signUpFunction = firebase.signUpEmailPassword
  const handleCreateAccount = async (e) => {
    e.preventDefault(); 

    try {
      
      firebase.signUpEmailPassword(username,password)
      
    } catch (err) {
      console.error('Account creation error:', err);
      setError(err.message || 'Error creating account');
    }
  };

  return (
    <div className={styles.mainContainerLogin}>
      <h3>Create Account</h3>
      
        <div className={styles.LoginFormContainer}>
          <div className={styles.inputValuesUser}>
            <div className={styles.UsernameUSER}>
              <label htmlFor="username">
                Username<span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
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
            <p>Already have an account? <a href="#">Sign in</a></p>
          </div>
          {error && <p className={styles.error}>{error}</p>}
        </div>
      
    </div>
  );
}

export default CreateAccount;
