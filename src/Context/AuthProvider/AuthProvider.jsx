import React from 'react';
import AuthContext from '../AuthContext/AuthContext';

const AuthProvider = ({children}) => {







    const authInfo = {}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;