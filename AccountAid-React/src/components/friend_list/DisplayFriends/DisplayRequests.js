import { Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FRIEND_REQUESTS } from '../friendsData'
import RequestCard from '../FriendCard/RequestCard'
import { useUser } from '../../../context/UserContext'

function DisplayRequests() {
    const { user } = useUser()
    const reqs = user.requestList
    const [requests, setRequests] = useState([])

    const getRequests = () => {
        if(!!reqs) {
            const list = Object.keys(reqs).map((request) => reqs[request])
            console.log('LIST: ',list)
            setRequests(list)
        }
    }

    useEffect(() => {
        getRequests()
    }, [user, user.requestList])

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