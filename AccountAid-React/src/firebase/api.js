import { doc, where, query, setDoc, getDoc, collection, deleteDoc, getDocs, updateDoc, arrayUnion } from "firebase/firestore";
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
  /*
  if(!docRef.buckets){
    const value = {
      [field]: [ data ],
    }
    console.log('it does not exist')
    await setDoc(doc(db, "Users", user.userID), {
      ...docRef,
      value
    }).then(() => console.log('Field updated!'))
    .catch((error) => console.log(error));
  } else {
  */
    const value = {
      [field]: data,
    }

      // To update
      await updateDoc(docRef, value)
      .then(() => console.log('Field updated!'))
      .catch((error) => console.log(error))
}

export const updateBucket = async (user, field, data) => {
  // Create an initial document to update.
  const docRef = doc(db, "Users", user.userID);
  /*
  if(!docRef.buckets){
    const value = {
      [field]: [ data ],
    }
    console.log('it does not exist')
    await setDoc(doc(db, "Users", user.userID), {
      ...docRef,
      value
    }).then(() => console.log('Field updated!'))
    .catch((error) => console.log(error));
  } else {
  */
    const value = {
      [field]: [ data, ...user.buckets ]
    }

      // To update
      await updateDoc(docRef, value)
      .then(() => console.log('Field updated!'))
      .catch((error) => console.log(error))
}

export const deleteBucket = async (user, field, data) => {
  // Create an initial document to update.
  const docRef = doc(db, "Users", user.userID);
  /*
  if(!docRef.buckets){
    const value = {
      [field]: [ data ],
    }
    console.log('it does not exist')
    await setDoc(doc(db, "Users", user.userID), {
      ...docRef,
      value
    }).then(() => console.log('Field updated!'))
    .catch((error) => console.log(error));
  } else {
  */
    const value = {
      [field]: data
    }

      // To update
      await updateDoc(docRef, value)
      .then(() => console.log('Field updated!'))
      .catch((error) => console.log(error))
}

export const getAllUserIDS = async () => {
    const users = []
    const q = query(collection(db, "Users"), where("userID", "!=", " "))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      users.push(doc.id)
    });
    return users
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
        transactions: {},
        buckets: [],
        userID: user.userID
    })
}

export const addUsername = async (user) => {
  await setDoc(doc(db, "Usernames", user.username))
}

export const getUsernames = async () => {
  const usernames = []
  //const q = query(collection(db, "Users"))
  const querySnapshot = await getDocs(collection(db, "Users"))
  querySnapshot.forEach((doc) => {
    usernames.push({ username: doc.data().username, uid: doc.data().userID })
  });
  return usernames
}

export const delUser = async (uid) => {
  await deleteDoc(doc(db, 'Users', uid))
}

