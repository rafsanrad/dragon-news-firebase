
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

//context creation and export .
export const AuthContext = createContext();

const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    //set kore user share korar jonno obj create korte hobe.

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        return signOut(auth)
    }
    
    //for making observer.
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
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
    }
  return <AuthContext value={authData}>{children}</AuthContext>;
  //authprovider k keu call korle authcontext return kore dibo.
  //authprovider er peter moddhe ja thakbe sobai oi value taake use korte parbe.

  //authprovider er peter moddhe routerProvider thakay children props er maddhome access kora jabe..tai je component theke mon chay ekhn info gulo access kora jabe..
};

export default AuthProvider;
