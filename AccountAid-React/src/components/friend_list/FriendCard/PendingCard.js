import { Avatar, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { useUser } from '../../../context/UserContext'
import { getUserByUsername, updateField, getDocRef, getUser } from '../../../firebase/api'
import { db } from '../../../firebase/firebase'
import CardBase from './CardBase'
import { runTransaction } from "firebase/firestore"

function PendingCard({ username, data }, props) {
    const { user } = useUser()
    console.log("USERNAME: ", data.uid)
    
    const handleAddFriend = async () => {
        const friendUser = await getUser(data.uid)
        const friendID = friendUser.userID
        let oldList = friendUser.friendsList
        const friendUsername = username
        const ffirst = friendUser.firstName
        const flast = friendUser.lastName
        const newList = {...oldList, [friendID] : {ffirst,flast,friendUsername}}

        updateField(user, "friendsList", newList)
    }

  return (
    <>
        <CardBase key={props.key}>
            <Flex
                height={'100%'}
                width={100}
                borderLeftRadius={'inherit'}
                justify='center'
                align='center'
            >
                <Avatar width={50} height={50} />
            </Flex>
            <Flex
                height={'100%'}
                width={200}
                justify='center'
                direction='column'
                p={2}
            >
                <Heading fontSize={'1.45rem'} fontWeight={'normal'}>{( username )}</Heading>
            </Flex>
            <Flex
                height={'100%'}
                width={100}
                justify='center'
                align='center'
                direction='column'
                gap={1}
            >
                <Button
                    h={30}
                    w={85}
                    bg={'purple.iceCold'}
                    onClick={() => handleAddFriend()}
                >
                    <Text fontSize='xs' color={'primary.dark'}>Add Friend</Text>
                </Button>
            </Flex>
        </CardBase>
    </>
  )
}

export default PendingCard