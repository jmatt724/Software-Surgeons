import { Avatar, Button, Flex, Heading, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import CardBase from './CardBase'
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import { useDb } from '../../../context/DbContext'
import { useUser } from '../../../context/UserContext'

function RequestCard({ firstName, lastName, username, userID }, props) {
    const { deleteFriendRequest, acceptFriendRequest } = useDb()
    const { user } = useUser()

    const handleDelete = () => {
        deleteFriendRequest(user.userID, userID)
    }

    const handleAccept = () => {
        acceptFriendRequest(user.userID, userID)
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
                <Heading fontSize={'1.45rem'} fontWeight={'normal'}>{username || 'John-doe26'}</Heading>
                <Text fontSize={'0.75rem'} fontWeight={'thin'}>{(`${firstName} ${lastName}`)}</Text>

            </Flex>
            <Flex
                height={'100%'}
                width={100}
                justify='center'
                align='center'
                direction='row'
            >
                <IconButton
                    bg="none"
                    color='purple.iceCold'
                    _hover={{ bg: 'none' }}
                    icon={<AiOutlineCheck />}
                    onClick={handleAccept}
                >
                </IconButton>
                <IconButton
                    bg="none"
                    color='primary.error'
                    _hover={{ bg: 'none' }}
                    icon={<AiOutlineClose />}
                    onClick={handleDelete}
                >
                </IconButton>
            </Flex>
        </CardBase>
    </>
  )
}

export default RequestCard