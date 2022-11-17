import { Flex } from '@chakra-ui/react'
import React from 'react'
import { FRIEND_REQUESTS } from '../friendsData'
import RequestCard from '../FriendCard/RequestCard'

function DisplayRequests({ requests }) {

    const getRequests = () => {
        const requestList = []
        for ( const request of requests ) {
            requestList.push(request[1])
        }
        return requestList
    }

    return (
        <Flex direction='column' gap={1}>
            {getRequests().map((friendReq) => 
                    <RequestCard
                        key={friendReq.username}
                        firstName={friendReq.firstName}
                        lastName={friendReq.lastName}
                        username={friendReq.username}
                    />
            )}
        </Flex>
    )
}

export default DisplayRequests