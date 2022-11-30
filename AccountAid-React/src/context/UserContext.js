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
        setCurrentUser((prev) => prev)
    }, [])

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
    }
    return (
        <UserContext.Provider value={defaultUser}>
            { children }
        </UserContext.Provider>
    )
}