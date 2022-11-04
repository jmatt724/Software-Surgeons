import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase/firebase'
import { signInWithEmailAndPassword,createUserWithEmailAndPassword, onAuthStateChanged, signOut, deleteUser } from 'firebase/auth'
import { delUser } from '../firebase/api'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password) {
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
