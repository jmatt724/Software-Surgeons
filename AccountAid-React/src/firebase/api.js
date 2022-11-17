import { doc, setDoc, getDoc, collection, deleteDoc, getDocs, updateDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid"
import { db } from "./firebase"

export const getUser = async (uid) => {
    const docRef = doc(db, 'Users', uid)
    const docSnap = await getDoc(docRef)
    return docSnap.data()
}

export const updateField = async (user, field, data) => {
  // Create an initial document to update.
  const docRef = doc(db, "Users", user.userID);
  const value = {
    [field]: data,
  }
  // To update age and favorite color:
  await updateDoc(docRef, value)
  .then(() => console.log('Field updated!'))
  .catch((error) => console.log(error))
}

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
        username: user.username,
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
