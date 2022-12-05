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
    const { user, setUser, calculateBucketAmount, getBucketAmount, getBucketCategories, getBucketId } = useUser()
    const { currentUser } = useAuth()

    const setUserContext = async () => {
        const docRef = doc(db, 'Users', currentUser.uid)
        await getDoc(docRef).then((value) => {
            setUser(value.data())
        }).catch((error) => {
            console.log('ERROR: ',error)
        })
    }

    const getUser = async (uid) => {
        const docRef = doc(db, 'Users', uid)
        const docSnap = await getDoc(docRef)
        return docSnap.data()
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
            deleteFriendRequest(userID, requestID)
            updateDoc(docRef2, { [`friendsList.${[user.userID]}`]: {ffirst: user.firstName, flast: user.lastName, friendUsername: user.username} }).then(() => {
            }).catch((error) => {
                console.warn(error)
            })
            updateDoc(docRef, { [`friendsList.${[requestID]}`]: {ffirst,flast,friendUsername} }).then(() => {
            }).catch((error) => {
                console.warn(error)
            })
            setUserContext()
        })
    }

    const removeFriend = async (userID) => {
        const docRef = doc(db, "Users", user.userID);
        const docRefFriend = doc(db, "Users", userID);
        await updateDoc(docRef, { [`friendsList.${[userID]}`]: deleteField() }).then(() => {
            setUserContext()
        }).catch((error) => {
            console.warn(error)
        })
        await updateDoc(docRefFriend, { [`friendsList.${[user.userID]}`]: deleteField() }).then(() => {
        }).catch((error) => {
            console.warn(error)
        })
    }

    const updateTransactions = async (otherUser, field, key, data) => {
        const docRef = doc(db, "Users", otherUser.userID);
        await updateDoc(docRef, { [field]: { [key]: data, ...user.transactions } }).then(() => {
            if(getBucketCategories().includes(data.category)){
                updateBucketAmount(user.userID, getBucketId(data.category), data.category)
            }
            setUserContext()
        }).catch((error) => {
            console.warn(error)
        })
    }

    const updateBucket = async (userID, field, bucketID, data) => {
        // Create an initial document to update.
        const docRef = doc(db, "Users", userID);
        const value = {
            [field]: { [bucketID]: data, ...user.buckets }
        }
      
            // To update
            await updateDoc(docRef, value)
            .catch((error) => console.log(error))
      }

    const updateBucketAmount = async (userID, bucketID, category) => {
        // Create an initial document to update.
        const docRef = doc(db, "Users", userID);
          const value = {
            [`buckets.${bucketID}.amount`]: getBucketAmount(category).toString()
          }
      
            // To update
            await updateDoc(docRef, value)
            .catch((error) => console.log(error))
      }


    const defaultDb = {
        getUser,
        setUserContext,
        updateTransactions,
        deleteFriendRequest,
        acceptFriendRequest,
        removeFriend,
        updateBucketAmount,
        updateBucket
    }
    return (
        <DbContext.Provider value={defaultDb}>
            { children }
        </DbContext.Provider>
    )
}