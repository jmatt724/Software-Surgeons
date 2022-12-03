import { Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FRIENDS_LIST } from '../friendsData'
import FriendCard from '../FriendCard/FriendCard'
import { getUser } from '../../../firebase/api'
import { useUser } from '../../../context/UserContext'

function DisplayFriends({ friends }) {
    const [friendList, setFriendList] = useState([])
    const { user } = useUser()

    const getFriends = () => {
        if(!!user.friendsList) {
            const list = Object.keys(user.friendsList).map((friend) => user.friendsList[friend])
            setFriendList(list)
        }
    }

    useEffect(() => {
        getFriends()
    }, [user.friendsList, user])

    
    // { userID: 8aq3l3Aj15OHXszy1NRTtE41tFI2, firstName: 'John', lastName: 'church fathers' }
    return (
        <Flex direction='column' gap={1}>
            {friendList.map((friend, index) => 
                    <FriendCard
                        key={Object.keys(user.friendsList)[index]}
                        userID={Object.keys(user.friendsList)[index]}
                        firstName={friend.ffirst}
                        lastName={friend.flast}
                        username={friend.friendUsername}
                    />
            )}
        </Flex>
    )
}

export default DisplayFriends