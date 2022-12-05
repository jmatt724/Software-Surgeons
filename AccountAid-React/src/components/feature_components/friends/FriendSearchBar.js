import { FieldValue } from "firebase/firestore";
import { useEffect } from "react";
import { getAllUserIDS } from "../../../firebase/api";

function FriendSearchBar({ handle }) {

    const [allUsers, setAllUsers] = useState([])
    const [input, setInput] = useState('')
    const [ result, setResult ] = useState([])

    useEffect(() => {
        setAllUsers([])
        
        const users = []
        getAllUserIDS().then((value) => {
            value.docs.forEach((doc) => {
                users.push(doc)
            })
            setAllUsers(users)
        })
    }, [])

    const handleChange = (event) => setInput(event.target.value)

    const searchUsers = (input) => {
        let tempResult = []
        const inputData = input.toLowerCase()
        allUsers.forEach(
            (doc) => {
                const data = doc.data()
                if(inputData!== ''){
                    if(inputData === data.username.toLowerCase().substring(0, inputData.length)){
                        tempResult.push({ name: `${data.firstName} ${data.lastName}`, username: data.username})
                    }
                }
                else if(inputData.length === 0){
                    tempResult = []
                }
            }
        )
        return tempResult
    }

    useEffect(() => {
        if(input !== ''){
            setResult(searchUsers(input))
        }else{
            setResult([])
        }
    }, [input])

    return (
        <>
            <Text mb='8px' fontSize={'1rem'}>Search: {input}</Text>
            <Input
                value={input}
                onChange={handleChange}
                placeholder='Search people'
                size='sm'
            />
        </>
    )
}

export default FriendSearchBar