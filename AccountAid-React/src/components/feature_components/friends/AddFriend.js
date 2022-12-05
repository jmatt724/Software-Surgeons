import { useEffect } from "react"
import { updateData } from "../../../firebase/api"

function addFriend(){
    const handleAddFriend = () =>{

        const friendsList = user.friendsList
        friendsList.set(selectedUser.uid, "pending")
        updateData(user, 'friendsList', friendsList)
    }

    useEffect(() => {
        const updateDisabled = () => {

        }
    },[])
}