import { Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { PENDING_FRIENDS } from '../friendsData'
import PendingCard from '../FriendCard/PendingCard'

function DisplayPending({ pending }) {
    const [users, setUsers] = useState([])
    
    const getPending = () => {
        const pendingList = []
        for ( const pendingFriend of pending ) {
            pendingList.push(pendingFriend)
        }
        return pendingList
    }

    useEffect(() => {
        setUsers(getPending())
    }, [pending])
    
    return (
        <Flex direction='column' gap={1}>
            {users.map((pendingReq) => 
                    <PendingCard
                        key={pendingReq.userID}
                        firstName={pendingReq.firstName}
                        lastName={pendingReq.lastName}
                        username={pendingReq.username}
                        data={pendingReq}
                    />
            )}
        </Flex>
    )
}

export default DisplayPending