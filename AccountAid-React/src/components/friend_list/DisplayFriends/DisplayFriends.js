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
        //console.log(Object.keys(user.friendsList))
        //const keys = Object.keys(user.friendsList)
        if(!!user.friendsList) {
            //const FUCKYOU = [ user.friendsList ]
            setFriendList(user.friendsList)
        }

        //const friendslist = []
        //for ( const friend of userList ) {
        //    friendslist.push(friend)
        //}
        //setFriendList(friendslist)
        //getUser('8aq3l3Aj15OHXszy1NRTtE41tFI2').then((value) => {
        //    setFriendList((prev) => [ value ])
            //setCurrentUser(value) // after promise resolves, we setCurrentUser to be the authenticated user
        //})
    }

    useEffect(() => {
        getFriends()
    }, [])

    
    // { userID: 8aq3l3Aj15OHXszy1NRTtE41tFI2, firstName: 'John', lastName: 'church fathers' }
    return (
        <Flex direction='column' gap={1}>
            {friendList.map((friend) => 
                    <FriendCard
                        key={friend.id}
                        firstName={friend.firstName}
                        lastName={friend.lastName}
                        username={friend.username}
                    />
            )}
        </Flex>
    )
}

export default DisplayFriends