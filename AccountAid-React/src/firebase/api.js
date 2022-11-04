import { doc, setDoc, getDoc, collection, deleteDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid"
import { db } from "./firebase"

export const getUser = async (uid) => {
    const docRef = doc(db, 'Users', uid)
    const docSnap = await getDoc(docRef)
    return docSnap.data()
}

export const addData = async (user) => {
    console.log('USER: ',user)
    // Add a new document in collection "cities"
    await setDoc(doc(db, "Users", user.userID), {
        balance: '0.00',
        currency: 'USD',
        email: user.email,
        firstName: user.fName,
        friendsList: [],
        lastName: user.lName,
        transactions: [],
        userID: user.userID
    });
}

export const delUser = async (uid) => {
  await deleteDoc(doc(db, 'Users', uid))
}
