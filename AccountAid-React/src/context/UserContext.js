import React, { createContext, useContext, useState } from 'react'

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

    const setCurrentUser = (user) => {
        setUser(user)
    }

    const getUserID = () => {
        return user.userID
    }

    const getCurrencySymbol = () => {
        if(user.currency === 'USD') {
            return '$'
        } else if(user.currency === 'EUR') {
            return '£'
        }
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
        console.log('USER TRANSACTIONS: ',user.transactions)
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
        updateBalance,
        getCurrencySymbol,
        removeCard,
        updateSortState,
        setCurrentUser,
        addTransaction,
        getUserID,
        currentID,
        updateCurrentID,
    }
    return (
        <UserContext.Provider value={defaultUser}>
            { children }
        </UserContext.Provider>
    )
}