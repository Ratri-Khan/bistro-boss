// import React from 'react';
import { getAuth } from "firebase/auth";
import app from "../Firebase/FIrebase.config";
import { createContext } from "react";

const auth = getAuth(app);
const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const user = [null];
    const authInfo ={
        user
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;