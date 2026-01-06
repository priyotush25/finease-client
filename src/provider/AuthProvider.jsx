import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.init';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [income, setIncome] = useState([])
    const [expense, setExpense] = useState([])
    const [themeController, setThemeController] = useState('dark')
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUserByGoogle = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    const createUserByEmail = (email, pass) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const updateUserProfile = (updateData) => {
        setLoading(true)
        return updateProfile(auth.currentUser, updateData)
    }

    const login = (email, pass) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const subscriber = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            subscriber();
        }
    }, [])


    const authInfo = {
        createUserByGoogle,
        createUserByEmail,
        updateUserProfile,
        login,
        user,
        setUser,
        logOut,
        loading,
        setLoading,
        themeController,
        setThemeController
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;