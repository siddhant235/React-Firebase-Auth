import React,{useContext,useState,useEffect} from 'react'
import {auth} from '../firebase'
const AuthContext=React.createContext();
export const useAuth=()=>{
    return  useContext(AuthContext)
}
export const AuthProvider = ({children}) => {
    const [currentUser,setCurrentUser]=useState()
    const [loading,setLoading]=useState(true)

    const signup=(email,password)=>{
      return  auth.createUserWithEmailAndPassword(email,password).then(res=>{
          console.log(res)
      })
    }
    const login=(email,password)=>{
        return auth.signInWithEmailAndPassword(email,password)
    }
    const logout=()=>{
       return auth.signOut()
    }

    const resetPassword=(email)=>{
        return auth.sendPasswordResetEmail(email)

    }
    useEffect(()=>{
      const unsubscriber= auth.onAuthStateChanged(user=>{
         setLoading(false)
            setCurrentUser(user)
        })
        return unsubscriber;
    },[])
    
    const value={
        currentUser,
        login,
        logout,
        signup,
        resetPassword
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

