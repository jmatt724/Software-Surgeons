import React, { createContext, useContext, useEffect, useState } from 'react'
import { doc, where, query, setDoc, getDoc, collection, deleteDoc, getDocs, updateDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase"
import { useUser } from './UserContext';
import { runTransaction } from "firebase/firestore";
import { useAuth } from './AuthContext';


const DbContext = createContext()

export function useDb() {
    return useContext(DbContext)
}

export function DbProvider({ children }) {
    const { user, setUser } = useUser()
    const { currentUser } = useAuth()

    useEffect(() => {
        console.log('UPDATING USER CONTEXT')
        setUserContext()
    }, [])

    
    const listener = (userID) => {
        const unsub = onSnapshot(doc(db, "Users", userID), (doc) => {
            console.log("Current data: ", doc.data());
        });
    }

    const setUserContext = async () => {
        const docRef = doc(db, 'Users', currentUser.uid)
        const docSnap = await getDoc(docRef)
        setUser(docSnap.data())
    }

    const getUser = async (uid) => {
        const docRef = doc(db, 'Users', uid)
        const docSnap = await getDoc(docRef)
        return docSnap.data()
    }

    const updateField = async (userID, field, value) => {
        const docRef = doc(db, "Users", userID);
        //console.log(docRef)
        await updateDoc(docRef, { [field]: value }).then(() => {
            setUserContext(user)
            console.log('Field Updated!')
        }).catch((error) => {
            console.warn(error)
        })
    }

    const updateTransactions = async (otherUser, field, key, data) => {
        const docRef = doc(db, "Users", otherUser.userID);
        console.log(docRef)
        await updateDoc(docRef, { [field]: { [key]: data, ...user.transactions } }).then(() => {
            setUserContext(user)
            console.log('Field Updated!')
        }).catch((error) => {
            console.warn(error)
        })
    }


    const defaultDb = {
        getUser,
        setUserContext,
        updateTransactions,
        listener,
        updateField,
    }
    return (
        <DbContext.Provider value={defaultDb}>
            { children }
        </DbContext.Provider>
    )
}