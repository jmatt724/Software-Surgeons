import { v4 as uuid } from 'uuid'; // library that generates random ID numbers

export const USER1 = {
    userID: uuid(),
    firstName: 'Grant',
    lastName: 'Pennington',
    currency: 'USD',
    balance: '0.00',
    digitalWalletAmount: '0.00',
    cards: [
        { cardID: uuid(), cardName: 'Grant Pennington', cardNumber: 'XXXX - XXXX - XXXX - 5726', amount: '3625.96', expiration: '06/26', digitalWallet: false },
        { cardID: uuid(), cardName: 'Grant Pennington', cardNumber: 'XXXX - XXXX - XXXX - 6255', amount: '1623.35', expiration: '10/28', digitalWallet: true },
        { cardID: uuid(), cardName: 'Grant Pennington', cardNumber: 'XXXX - XXXX - XXXX - 9162', amount: '6352.23', expiration: '07/27', digitalWallet: false },
    ],
    sortState: 'Date',
    transactions: [
        { paymentID: uuid(), recipiant: 'Me', sender: 'John', date: 'Oct 15, 2022', category: 'Food', amount: '35.62' },
        { paymentID: uuid(), recipiant: 'Krystal', sender: 'Me', date: 'Oct 25, 2022', category: 'Entertainment', amount: '345.66' },
        { paymentID: uuid(), recipiant: 'Big Billy',sender: 'Me', date: 'Sep 22, 2022', category: 'Entertainment', amount: '85.24' },
        { paymentID: uuid(), recipiant: 'Me', sender:'Your mom', date: 'Oct 11, 2022', category: 'Hush Hush', amount: '26.72' },
        { paymentID: uuid(), recipiant: 'Kaitlyn', sender:'Me', date: 'Oct 10, 2022', category: 'Food', amount: '10.25' },
        { paymentID: uuid(), recipiant: 'Justin', sender:'Me', date: 'Oct 7, 2022', category: 'Food', amount: '16.36' },
        { paymentID: uuid(), recipiant: 'Me', sender:'Morgan', date: 'Aug 17, 2022', category: 'Cheese', amount: '275.25' }
    ]
}

export const USER2 = { 
    userID: uuid(),
    firstName: 'Justin',
    lastName: 'Mattix',
    currency: 'USD',
    balance: '0.00',
    digitalWalletAmount: '0.00',
    cards: [
        { cardID: uuid(), cardName: 'Justin Mattix', cardNumber: 'XXXX - XXXX - XXXX - 1625', amount: '2637.23', expiration: '08/27', digitalWallet: false },
        { cardID: uuid(), cardName: 'Justin Mattix', cardNumber: 'XXXX - XXXX - XXXX - 1993', amount: '6998.10', expiration: '02/30', digitalWallet: true },
        { cardID: uuid(), cardName: 'Justin Mattix', cardNumber: 'XXXX - XXXX - XXXX - 6472', amount: '7908.63', expiration: '03/23', digitalWallet: false },
    ],
    sortState: 'Date',
    transactions: [
        { paymentID: uuid(), recipiant: 'Me', sender: 'John', date: 'Oct 15, 2022', category: 'Food', amount: '35.62' },
        { paymentID: uuid(), recipiant: 'Krystal', sender: 'Me', date: 'Oct 25, 2022', category: 'Entertainment', amount: '345.66' },
        { paymentID: uuid(), recipiant: 'Big Billy',sender: 'Me', date: 'Sep 22, 2022', category: 'Entertainment', amount: '85.24' },
        { paymentID: uuid(), recipiant: 'Me', sender:'Your mom', date: 'Oct 11, 2022', category: 'Hush Hush', amount: '26.72' },
        { paymentID: uuid(), recipiant: 'Kaitlyn', sender:'Me', date: 'Oct 10, 2022', category: 'Food', amount: '10.25' },
        { paymentID: uuid(), recipiant: 'Grant', sender:'Me', date: 'Oct 7, 2022', category: 'Food', amount: '16.36' },
        { paymentID: uuid(), recipiant: 'Me', sender:'Morgan', date: 'Aug 17, 2022', category: 'Cheese', amount: '275.25' }
    ]
}

export const USERS_LIST = [ USER1, USER2 ]