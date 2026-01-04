
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

//context creation and export .
export const AuthContext = createContext();

const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    //set kore user share korar jonno obj create korte hobe.

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const updateUser=(updatedData)=>{
        return updateProfile(auth.currentUser,updatedData);
    }

    const logOut=()=>{
        return signOut(auth)
    }
    
    //for making observer.
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        });
        return ()=>{
            unsubscribe();
        } 
    },[])

    const authData={
        user,         //user:user  same.
        setUser, 
        createUser  ,
        logOut,
        signIn,
        loading,
        setLoading,
        updateUser,
    }
  return <AuthContext value={authData}>{children}</AuthContext>;
  //authprovider k keu call korle authcontext return kore dibo.
  //authprovider er peter moddhe ja thakbe sobai oi value taake use korte parbe.

  //authprovider er peter moddhe routerProvider thakay children props er maddhome access kora jabe..tai je component theke mon chay ekhn info gulo access kora jabe..
};

export default AuthProvider;
