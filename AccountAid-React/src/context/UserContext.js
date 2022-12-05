import React, { createContext, useContext, useEffect, useState } from 'react'

const UserContext = createContext()

export function useUser() {
    return useContext(UserContext)
}

export function UserProvider({ children }) {
    const [user, setUser] = useState({})
    const [currentID, setCurrentID] = useState('')

    const updateCurrentID = (uid) => {
        setCurrentID(uid)
    }

    useEffect(() => {
        getBucketAmount('Bills')
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
        if(!user.buckets) {
            return []
        }
        const buckets = Object.keys(user.buckets)
        const categories = buckets.map((bucket) => user.buckets[bucket].category)
        return categories
    }

    const getBucketId = (category) => {
        const ids = Object.keys(user.buckets)
        for(let i = 0; i < ids.length; i++){
            if(user.buckets[ids[i]].category===category){
                return ids[i]
            }
        }
    }

    const getBucketPayments = (category) => {
        if(!!user.transactions){
            const bucketPayments = getTransactionsArray().filter((payment) => category===payment.category)
            return bucketPayments
        }
        return []

    }

    const getBucketAmount = (category) => {
        const bucketAmount = getBucketPayments(category).reduce((prev, curr) => prev+parseFloat(curr.amount), 0)
        return parseFloat(bucketAmount).toFixed(2)
    }

    const getBucketsArray = () => {
        if(!user || user===undefined){ return []; }
        //console.log(user?.transactions)
        try{
            const keys = Object.keys(user.buckets)
            const buckets = keys.map((id) => user.buckets[id])
            return buckets
        } catch {
        }
    }
    
    const getTransactionsArray = () => {
        if(!user || user===undefined){ return []; }
        //console.log(user?.transactions)
        try{
            const keys = Object.keys(user.transactions)
            const transactions = keys.map((id) => user.transactions[id])
            return sortTransactions(transactions)
        } catch {
        }
    }

    const sortTransactions = (array) => {
        if(!!user.transactions){
            array.sort((a,b) => {
                const yearA = parseInt(a.date.substring(a.date.indexOf(',')+1))
                const [dayA, monthA] = parseDate(a.date)
                const dateA = dayA+monthA+yearA
                const yearB = parseInt(b.date.substring(b.date.indexOf(',')+1))
                const [dayB, monthB] = parseDate(b.date)
                const dateB = dayB+monthB+yearB
                return dateB-dateA
            })
        }
        return array
        
    }

    const getCurrencySymbol = () => {
        if(user.currency === 'USD') {
            return '$'
        } else if(user.currency === 'EUR') {
            return '£'
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
        getBucketCategories,
        getTransactionsArray,
        getBucketPayments,
        calculateBucketAmount,
        sortTransactions,
        getBucketsArray,
        getBucketAmount,
        getBucketId,
    }
    return (
        <UserContext.Provider value={defaultUser}>
            { children }
        </UserContext.Provider>
    )
}