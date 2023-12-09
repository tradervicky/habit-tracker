import axios from 'axios';

const BASE_URL = 'https://habit-tracker-14151-default-rtdb.firebaseio.com/';
const API_KEY = 'AIzaSyD-kqQNx658CAWkN1otii-9Bh8cH7QHTe8';

const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}:signInWithPassword?key=${API_KEY}`, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
    return response.data;
  } catch (error) {
    throw error.response.data.error.message;
  }
};

const signUpUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}:signUp?key=${API_KEY}`, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
    return response.data;
  } catch (error) {
    throw error.response.data.error.message;
  }
};

const resetPassword = async (email) => {
  try {
    const response = await axios.post(`${BASE_URL}:sendOobCode?key=${API_KEY}`, {
      email: email,
      requestType: 'PASSWORD_RESET',
    });
    return response.data;
  } catch (error) {
    throw error.response.data.error.message;
  }
};

const getUserProfile = async (idToken) => {
  try {
    const response = await axios.post(`${BASE_URL}:lookup?key=${API_KEY}`, {
      idToken: idToken,
    });
    return response.data;
  } catch (error) {
    throw error.response.data.error.message;
  }
};

export { loginUser, signUpUser, resetPassword, getUserProfile };