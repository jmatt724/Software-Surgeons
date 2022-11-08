import { doc, setDoc, getDoc, collection, deleteDoc, getDocs } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid"
import { db } from "./firebase"

export const getUser = async (uid) => {
    const docRef = doc(db, 'Users', uid)
    const docSnap = await getDoc(docRef)
    return docSnap.data()
}

/*

import { collection, getDocs } from "firebase/firestore";

const querySnapshot = await getDocs(collection(db, "cities"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
*/
export const getAllUserIDS = async () => {
    const querySnapshot = await getDocs(collection(db, "Users"));
    return querySnapshot
}

export const addData = async (user) => {
    // Add a new document in collection "Users" with id => user.userID
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
