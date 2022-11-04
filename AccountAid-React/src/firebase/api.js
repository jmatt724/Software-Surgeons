import { doc, setDoc, getDocs, collection } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid"
import {db} from "./firebase"

export const getUser = async () => {
  /*
  const userID = "45ef7643-e760-4a9f-a394-f1fcd7c59b22"
    let response = await fetch(`https://firestore.googleapis.com/v1/projects/${process.env.REACT_APP_FIREBASE_PROJECT_ID}/databases/(default)/documents/Users/${userID}`)
    let data = await response.json();
    return data
    
    //const querySnapshot = await getDocs(collection(db, "Users"));
    const resp = fetch(`https://firestore.googleapis.com/v1/projects/${process.env.REACT_APP_FIREBASE_PROJECT_ID}/databases/(default)/documents/Users/${userID}`)
      .then(response => response.json())
      .then(function(data) {
        return data.fields
      })
    console.log("RESP: ",resp)
      //console.log('userData: ',userData)

    
      // Storing data in form of JSON
    */
    const querySnapshot = await getDocs(collection(db, "Users"));
    querySnapshot.forEach((doc) => {
      console.log(`${Object.keys(doc.data())}`);
      //${doc.id} => 

      return doc.data();
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
