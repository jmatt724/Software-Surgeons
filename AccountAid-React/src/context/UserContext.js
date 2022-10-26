import React, { createContext, useContext, useState } from 'react'
import { v4 as uuid } from 'uuid'; // library that generates random ID numbers

const UserContext = createContext()

export function useUser() {
    return useContext(UserContext)
}

export function UserProvider({ children }) {
    const [user, setUser] = useState(
        { 
            currency: 'USD',
            balance: 36000,
            cards: [
                { cardID: uuid(), cardName: 'Grant Pennington', cardNumber: 'XXXX - XXXX - XXXX - 5726', amount: '3625.96', expiration: '06/26' },
                { cardID: uuid(), cardName: 'Grant Pennington', cardNumber: 'XXXX - XXXX - XXXX - 6255', amount: '1623.35', expiration: '10/28' },
                { cardID: uuid(), cardName: 'Grant Pennington', cardNumber: 'XXXX - XXXX - XXXX - 9162', amount: '6352.23', expiration: '07/27' },
            ],
            expenses: [
                { paymentID: 'j279216-002', recipiant: 'John', date: 'Oct 15', category: 'Food', amount: 35 },
                { paymentID: 't27rb52-561', recipiant: 'Krystal', date: 'Oct 25', category: 'Sexy Time', amount: 345 },
                { paymentID: 'w87bwu2-196', recipiant: 'Big Billy', date: 'Oct 22', category: 'Devils Lettuce SHEEE', amount: 85 },
            ]
        }
    )

    const getCurrencySymbol = () => {
        if(user.currency === 'USD') {
            return '$'
        } else if(user.currency === 'EUR') {
            return '£'
        }
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

    const updateBalance = (newBalance) => {
        setUser((prev) => { 
            const updated = {
                balance: newBalance, 
                ...prev
            }
            return updated
        })
    }
    
    const defaultUser = {
        user,
        updateBalance,
        getCurrencySymbol,
        removeCard,
    }
    return (
        <UserContext.Provider value={defaultUser}>
            { children }
        </UserContext.Provider>
    )
}