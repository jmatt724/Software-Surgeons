import React, { createContext, useContext, useEffect, useState } from 'react'
import { doc, where, query, setDoc, getDoc, collection, deleteDoc, getDocs, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../firebase/firebase"
import { useUser } from './UserContext';
import { runTransaction } from "firebase/firestore";

const DbContext = createContext()

export function useDb() {
    return useContext(DbContext)
}

export function DbProvider({ children }) {
    const { user, setUser } = useUser()

    useEffect(() => {
        setUserContext(user)
    }, [])

    const setUserContext = async () => {
        const docRef = doc(db, 'Users', user.userID)
        const docSnap = await getDoc(docRef)
        setUser(docSnap.data())
    }

    const getUser = async (uid) => {
        const docRef = doc(db, 'Users', uid)
        const docSnap = await getDoc(docRef)
        return docSnap.data()
    }

    const updateTransactions = async (otherUser, field, key, data) => {
        const docRef = doc(db, "Users", otherUser.userID);
        console.log(docRef)
        await updateDoc(docRef, { [field]: { [key]: data } }).then(() => {
            console.log('Field Updated!')
        })
    }


    const defaultDb = {
        getUser,
        setUserContext,
        updateTransactions,
    }
    return (
        <DbContext.Provider value={defaultDb}>
            { children }
        </DbContext.Provider>
    )
}