import { Avatar, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { useUser } from '../../../context/UserContext'
import { getUserByUsername, updateField, getDocRef, getUser } from '../../../firebase/api'
import { db } from '../../../firebase/firebase'
import CardBase from './CardBase'
import { runTransaction } from "firebase/firestore"
import { useDb } from '../../../context/DbContext'

function PendingCard({ username, data }, props) {
    const { user } = useUser()
    const { setUserContext } = useDb()
    
    const handleAddFriend = async () => {
        await getUser(data.uid).then((value) => {
            const friendID = user.userID
            let oldList = value.requestList
            const friendUsername = user.username
            const ffirst = user.firstName
            const flast = user.lastName
            const newList = {...oldList, [friendID] : {ffirst,flast,friendUsername}}
            updateField(value, "requestList", newList)
            setUserContext()
        })
       
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