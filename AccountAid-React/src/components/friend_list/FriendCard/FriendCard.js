import { Avatar, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import CardBase from './CardBase'
import { useNavigate } from 'react-router-dom';
import { useDb } from '../../../context/DbContext';

function FriendCard({ firstName, lastName, username, userID }, props) {
    const { removeFriend } = useDb()
    const navigate = useNavigate()
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
                <Text fontSize={'0.75rem'} fontWeight={'thin'}>{(`${firstName} ${lastName}`) || 'John'}</Text>

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
                    h={25}
                    w={75}
                    onClick={() => navigate('/make-payment', { state: { uname: username, id: userID }})}
                >
                    <Text fontSize='2xs' color={'primary.dark'}>{`Pay`}</Text>
                </Button>
                <Button
                    h={25}
                    w={75}
                    onClick={() => removeFriend(userID)}
                >
                    <Text fontSize='2xs' color={'primary.dark'}>{`Remove`}</Text>
                </Button>
            </Flex>
        </CardBase>
    </>
  )
}

export default FriendCard