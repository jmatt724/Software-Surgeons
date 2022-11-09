import { Flex, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

function DisplayRecentFriends() {
    const avatarSize = 'lg'
    return (
        <Flex width={'100%'} height={100} justify={'center'} align={'center'}>
            <Wrap spacingX={4}>
                <WrapItem>
                    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' size={avatarSize}/>
                </WrapItem>
                <WrapItem>
                    <Avatar name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' size={avatarSize}/>
                </WrapItem>
                <WrapItem>
                    <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' size={avatarSize}/>
                </WrapItem>
                <WrapItem>
                    <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' size={avatarSize}/>
                </WrapItem>
            </Wrap>
        </Flex>
    )
}

export default DisplayRecentFriends