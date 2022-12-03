import React, { createContext, useContext, useEffect, useState } from 'react'
import { doc, where, query, setDoc, getDoc, collection, deleteDoc, getDocs, updateDoc, onSnapshot, deleteField } from "firebase/firestore";
import { db } from "../firebase/firebase"
import { useUser } from './UserContext';
import { runTransaction } from "firebase/firestore";
import { useAuth } from './AuthContext';
import { useIsLoading } from '../hooks/useIsLoading';


const DbContext = createContext()

export function useDb() {
    return useContext(DbContext)
}

export function DbProvider({ children }) {
    const { user, setUser } = useUser()
    const { currentUser } = useAuth()
    const [isLoading, setIsLoading] = useIsLoading()

    useEffect(() => {
        //console.log('UPDATING USER CONTEXT')
        //setUserContext()
    }, [])

    
    const listener = (userID) => {
        const unsub = onSnapshot(doc(db, "Users", userID), (doc) => {
            console.log("Current data: ", doc.data());
        });
    }

    const setUserContext = async () => {
        const docRef = doc(db, 'Users', currentUser.uid)
        await getDoc(docRef).then((value) => {
            setIsLoading(true)
            setUser(value.data())
        }).finally(() => {
            setIsLoading(false)
        }).catch((error) => {
            console.log('ERROR: ',error)
        })
    }

    const getUser = async (uid) => {
        const docRef = doc(db, 'Users', uid)
        const docSnap = await getDoc(docRef)
        return docSnap.data()
    }

    const updateField = async (userID, field, value) => {
        const docRef = doc(db, "Users", userID);
        //console.log(docRef)
        
    }

    const deleteFriendRequest = async (userID, requestID) => {
        const docRef = doc(db, "Users", userID);
        await updateDoc(docRef, { [`requestList.${[requestID]}`]: deleteField() }).then(() => {
            console.log('Field Updated!')
        }).catch((error) => {
            console.warn(error)
        })
        setUserContext()
    }

    const acceptFriendRequest = async (userID, requestID) => {
        const docRef = doc(db, "Users", userID);
        await getUser(requestID).then((value) => {
            const docRef2 = doc(db, "Users", value.userID);
            const friendID = value.userID
            const friendUsername = value.username
            const ffirst = value.firstName
            const flast = value.lastName
            //const newList = {...oldList, [friendID] : {ffirst,flast,friendUsername}}
            deleteFriendRequest(userID, requestID)
            //updateField(value, "requestList", newList)
            updateDoc(docRef2, { [`friendsList.${[user.userID]}`]: {ffirst: user.firstName, flast: user.lastName, friendUsername: user.username} }).then(() => {
                console.log('Field Updated!')
            }).catch((error) => {
                console.warn(error)
            })
            updateDoc(docRef, { [`friendsList.${[requestID]}`]: {ffirst,flast,friendUsername} }).then(() => {
                //setUserContext()
                console.log('Field Updated!')
            }).catch((error) => {
                console.warn(error)
            })
            setUserContext()
        })
    }

    const removeFriend = async (userID) => {
        const docRef = doc(db, "Users", user.userID);
        await updateDoc(docRef, { [`friendsList.${[userID]}`]: deleteField() }).then(() => {
            console.log('Friend Removed!')
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
        deleteFriendRequest,
        acceptFriendRequest,
        removeFriend,
    }
    return (
        <DbContext.Provider value={defaultDb}>
            { children }
        </DbContext.Provider>
    )
}