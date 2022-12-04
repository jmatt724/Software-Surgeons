import { doc, onSnapshot } from 'firebase/firestore';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { getUser } from '../firebase/api';
import { db } from '../firebase/firebase';
import useLocalStorage from './../hooks/useLocalStorage';
import { useAuth } from './AuthContext';

const UserContext = createContext()

export function useUser() {
    return useContext(UserContext)
}

export function UserProvider({ children }) {
    const [user, setUser] = useState({})
    const [currentID, setCurrentID] = useState('')
    const { currentUser } = useAuth()

    const updateCurrentID = (uid) => {
        setCurrentID(uid)
    }

    useEffect(() => {
        // const docRef = doc(db, 'Users', currentUser.uid)
        // // getUser(currentUser.uid).then((value) => {
        // //     console.log('User retrieved')
        // //     setCurrentUser(value)
        // // })
        // const unsub = onSnapshot(docRef, (doc) => {
        //     if(doc.size){
        //         console.log('WE HAVE DATA')
        //         console.log(doc.data())
        //         // do
        //     } else {
        //         // empty
        //     }
        //     //console.log("Current data: ", doc.data());
        // }, (error) => console.log(error));
        // return () =>  { unsub() }
        //getTransactionsArray()
        // get the user.transactions object. Look at each trasaction category
    }, [user])

    const setCurrentUser = (user) => {
        setUser(user)
    }

    const getUserID = () => {
        return user.userID
    }

    const calculateBucketAmount = (bucket) => {
        const initialValue = 0
        const total = getBucketPayments(bucket)
        const newTotal = total.reduce((prev, current) => prev+parseFloat(current.amount), initialValue)
        return newTotal
    }

    const getBucketCategories = () => {
        const buckets = user.buckets
        const categories = buckets.map((bucket) => bucket.category)
        return categories
    }

    const getBucketPayments = (category) => {
        //const categories = getBucketCategories()
        const bucketPayments = getTransactionsArray().filter((payment) => category===payment.category)
        return bucketPayments
        //console.log(bucketPayments)
    }

    const getTransactionsArray = () => {
        if(!user || user===undefined){ return []; }
        //console.log(user?.transactions)
        try{
            const keys = Object.keys(user.transactions)
            const transactions = keys.map((id) => user.transactions[id])
            return transactions
        } catch {
        }
        
    }

    const getCurrencySymbol = () => {
        if(user.currency === 'USD') {
            return '$'
        } else if(user.currency === 'EUR') {
            return '£'
        }
    }

    const sortTransaction = (arr, sort) => {
        const temp = arr
        if(sort==='Date'){
            temp.sort((a, b) => {
                const [ dayA, monthA ] = parseDate(a.date)
                const [ dayB, monthB ] = parseDate(b.date)
                return dayB-dayA && monthB-monthA
            })
            setUser((prev) => {
                const updated = {
                    ...prev,
                    transactions: temp, 
                }
                return updated
            })
        }
        else if(sort==='Category'){
            temp.sort((a, b) => {
                const categoryA = a.category.toUpperCase(); // ignore upper and lowercase
                const categoryB = b.category.toUpperCase(); // ignore upper and lowercase
                if (categoryA < categoryB) {
                    return -1;
                }
                if (categoryA > categoryB) {
                    return 1;
                }
    
                // names must be equal
                return 0;
            })
            setUser((prev) => {
                const updated = {
                    ...prev,
                    transactions: temp, 
                }
                return updated
            })
        }
        else if(sort==='From'){
            temp.sort((a, b) => {
                const senderA = a.sender.toUpperCase(); // ignore upper and lowercase
                const senderB = b.sender.toUpperCase(); // ignore upper and lowercase
                if (senderA < senderB) {
                    return 1;
                }
                if (senderA > senderB) {
                    return -1;
                }
    
                // names must be equal
                return 0;
            })
            setUser((prev) => {
                const updated = {
                    ...prev,
                    transactions: temp, 
                }
                return updated
            })
        }
        else if(sort==='To'){
            temp.sort((a, b) => {
                const receiverA = a.recipiant.toUpperCase(); // ignore upper and lowercase
                const receiverB = b.recipiant.toUpperCase(); // ignore upper and lowercase
                if (receiverA < receiverB) {
                    return 1;
                }
                if (receiverA > receiverB) {
                    return -1;
                }
    
                // names must be equal
                return 0;
            })
            setUser((prev) => {
                const updated = {
                    ...prev,
                    transactions: temp, 
                }
                return updated
            })
            
        }
        else if(sort==='Amount'){
            temp.sort((a, b) => {
                const amountA = parseFloat(a.amount).toFixed(2)
                const amountB = parseFloat(b.amount).toFixed(2)
                return amountB-amountA
            })
            return temp
        }
        
    }
    
    const parseDate = (date) => {
        const month = date.substring(0, date.indexOf(' '))
        const day = date.substring(date.indexOf(' '), date.indexOf(','))
        return [ parseInt(day), parseInt(getMonthNumber(month)) ]
    }
    
    const getMonthNumber = (month) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        return months.indexOf(month)+1
    }

    const updateSortState = (newSort) => {
        setUser((prev) => {
            const updated = {
                ...prev,
                sortState: newSort, 
            }
            return updated
        })
    }

    const addTransaction = (payment) => {
        setUser((prev) => {
            const updated = {
                ...prev,
                transactions: prev.transactions.push(payment), 
            }
            return updated
        })
        //console.log('USER TRANSACTIONS: ',user.transactions)
    }

    const removeCard = (cardID) => {
        const cards = user.cards
        const filteredCards = cards.filter(card => card.cardID!==cardID)
        setUser((prev) => {
            const updated = {
                ...prev,
                cards: filteredCards, 
            }
            return updated
        })
    }

    const updateBalance = (category, newBalance) => {
        setUser((prev) => { 
            const updated = {
                ...prev,
                [category]: newBalance,
            }
            return updated
        })
    }
    
    const defaultUser = {
        user,
        setUser,
        updateBalance,
        getCurrencySymbol,
        removeCard,
        updateSortState,
        setCurrentUser,
        addTransaction,
        getUserID,
        currentID,
        updateCurrentID,
        sortTransaction,
        getBucketCategories,
        getTransactionsArray,
        getBucketPayments,
        calculateBucketAmount,
    }
    return (
        <UserContext.Provider value={defaultUser}>
            { children }
        </UserContext.Provider>
    )
}