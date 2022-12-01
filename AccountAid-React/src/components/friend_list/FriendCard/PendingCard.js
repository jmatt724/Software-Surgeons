import { Avatar, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { useUser } from '../../../context/UserContext'
import { updateField } from '../../../firebase/api'
import CardBase from './CardBase'

function PendingCard({ username }, props) {
    const { user } = useUser()
    
    
    const handleAddFriend = () => {
        updateField(user, 'friendsList', [ ...user.friendsList ])
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
                    onClick={handleAddFriend}
                >
                    <Text fontSize='xs' color={'primary.dark'}>Add Friend</Text>
                </Button>
            </Flex>
        </CardBase>
    </>
  )
}

export default PendingCard