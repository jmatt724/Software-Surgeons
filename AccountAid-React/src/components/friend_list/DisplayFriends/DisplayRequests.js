import { Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FRIEND_REQUESTS } from '../friendsData'
import RequestCard from '../FriendCard/RequestCard'
import { useUser } from '../../../context/UserContext'

function DisplayRequests() {
    const { user } = useUser()
    const reqs = user.requestList
    const [requests, setReqesusts] = useState([])

    const getRequests = () => {
        if(!!reqs) {
            const list = Object.keys(reqs).map((request) => reqs[request])
            console.log('LIST: ',list)
            setReqesusts(list)
        }
    }

    //const {[reqs]: _, ...rest} = user.requestList;

    useEffect(() => {
        getRequests()
    }, [])

    return (
        <Flex direction='column' gap={1}>
            {requests.map((friendReq, index) => 
                    <RequestCard
                        key={Object.keys(reqs)[index]}
                        userID={Object.keys(reqs)[index]}
                        firstName={friendReq.ffirst}
                        lastName={friendReq.flast}
                        username={friendReq.friendUsername}
                    />
            )}
        </Flex>
    )
}

export default DisplayRequests