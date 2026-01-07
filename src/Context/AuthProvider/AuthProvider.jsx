import React, { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from '../../Firebase/firebase.config';
import AuthContext from '../AuthContext/AuthContext';


const AuthProvider = ({ children }) => {

  // state
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);


  const [themeController, setThemeController] = useState('dark');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // auth methods
  const createUserByGoogle = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const createUserByEmail = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const updateUserProfile = (updateData) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updateData);
  };

  const login = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const logOut = () => {
    return signOut(auth);
  };

  // auth state observer
  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => subscriber();
  }, []);

  // context value
  const authInfo = {
    createUserByGoogle,
    createUserByEmail,
    updateUserProfile,
    login,
    logOut,
    user,
    setUser,
    loading,
    setLoading,
    themeController,
    setThemeController,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
