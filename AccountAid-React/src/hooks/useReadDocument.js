
import { useEffect, useState } from 'react';
import { getUser } from '../firebase/api';
import { useUser } from './../context/UserContext';
export const users = {
    user: ''
}

export const useReadDocument = () => {
    const [document, setDocument] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const { setCurrentUser } = useUser()

    const getData = () => {
        setIsLoading(true)
        //const user = getUser().then(data => setDocument(data))
        //console.log('USER USE: ',user)
        //setDocument(user)
        //console.log(document)
        //setDocument(data)
            
            //.then(setDocument)
            //.then(() => setIsLoading(false))
            //.then(() => console.log(document))
    }


    return { isLoading, document, getData }
}