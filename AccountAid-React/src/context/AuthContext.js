import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase/firebase'
import { signInWithEmailAndPassword,createUserWithEmailAndPassword, onAuthStateChanged, signOut, deleteUser, setPersistence, browserSessionPersistence } from 'firebase/auth'
import useLocalStorage from './../hooks/useLocalStorage';

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useLocalStorage('auth-user', '')
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password) {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
        return signInWithEmailAndPassword(auth, email, password)
    }

    function deleteUserAuth() {
        deleteUser(currentUser).then(() => {
            alert('Account Deleted!')
            setCurrentUser()
        }).catch((error) => {
            alert('Error occurred!', error)
        })
    }

    function logout() {
        return signOut(auth)
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
                setCurrentUser(user)
                setLoading(false)
        })
        return unsubscribe
    }, [])

    /**
     const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
     */
    
    
    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        deleteUserAuth,
    }
    
    return (
        <AuthContext.Provider value={value}>
            { !loading && children }
        </AuthContext.Provider>
    )
}
