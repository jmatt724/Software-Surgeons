import React, { createContext, useContext, useState } from 'react'
import { v4 as uuid } from 'uuid'; // library that generates random ID numbers

const UserContext = createContext()

export function useUser() {
    return useContext(UserContext)
}

export function UserProvider({ children }) {
    const [user, setUser] = useState(
        { 
            firstName: 'Grant',
            lastName: 'Pennington',
            currency: 'USD',
            balance: '0.00',
            cards: [
                { cardID: uuid(), cardName: 'Grant Pennington', cardNumber: 'XXXX - XXXX - XXXX - 5726', amount: '3625.96', expiration: '06/26' },
                { cardID: uuid(), cardName: 'Grant Pennington', cardNumber: 'XXXX - XXXX - XXXX - 6255', amount: '1623.35', expiration: '10/28' },
                { cardID: uuid(), cardName: 'Grant Pennington', cardNumber: 'XXXX - XXXX - XXXX - 9162', amount: '6352.23', expiration: '07/27' },
            ],
            sortState: 'Date',
            transactions: [
                { paymentID: uuid(), recipiant: 'Me', sender: 'John', date: 'Oct 15, 2022', category: 'Food', amount: '35.62' },
                { paymentID: uuid(), recipiant: 'Krystal', sender: 'Me', date: 'Oct 25, 2022', category: 'Entertainment', amount: '345.66' },
                { paymentID: uuid(), recipiant: 'Big Billy',sender: 'Me', date: 'Sep 22, 2022', category: 'Entertainment', amount: '85.24' },
                { paymentID: uuid(), recipiant: 'Me', sender:'Your mom', date: 'Oct 11, 2022', category: 'Hush Hush', amount: '26.72' },
                { paymentID: uuid(), recipiant: 'Kaitlyn', sender:'Me', date: 'Oct 10, 2022', category: 'Food', amount: '10.25' },
                { paymentID: uuid(), recipiant: 'Justin', sender:'Me', date: 'Oct 7, 2022', category: 'Food', amount: '16.36' }
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

    const updateSortState = (newSort) => {
        setUser((prev) => {
            const updated = {
                ...prev,
                sortState: newSort, 
            }
            return updated
        })
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
                ...prev,
                balance: newBalance,
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
    }
    return (
        <UserContext.Provider value={defaultUser}>
            { children }
        </UserContext.Provider>
    )
}