import { doc, setDoc, getDocs, collection } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid"
import {db} from "./firebase"

export const readData = async() => {
    const querySnapshot = await getDocs(collection(db, "Users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${Object.values(doc.data())}`);
    });
}

export const addData = async() => {
    const userID = uuidv4()
    // Add a new document in collection "cities"
    await setDoc(doc(db, "Users", userID), {
        balance: "1000",
        currency: "USD",
        email: "jimBuddy@hotmail.com",
        firstName: "Jim",
        friendsList: [],
        lastName: "Buddy",
        transactions: [],
        userID: userID
});
}
