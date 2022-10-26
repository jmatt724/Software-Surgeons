import { Box, Flex, Heading, Icon, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsThreeDotsVertical, BsArrowReturnRight } from 'react-icons/bs';
import { useUser } from '../../../context/UserContext';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'
import RemoveCardAlert from './RemoveCardAlert';


function CreditCard({ cardID, cardName, cardNumber, amount, expiration }) {
    const { getCurrencySymbol } = useUser()
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Flex
            width={375}
            height={225}
            bg={'primary.snow'}
            borderRadius={'lg'}
            m={6}
            p={2}
            direction={'column'}
            boxShadow={'2px 4px 16px 2px #818181'}
            id={cardID}
        >
            
            <Flex width={'100%'} height={50} justify={'space-between'} align={'center'} p={2}>
                <Flex bg={'gray.200'} borderTopLeftRadius={30} borderBottomRightRadius={30} height={6} width={235} justify='center' align='center'>
                    <Text fontSize={'1rem'} fontWeight={'medium'} color={'gray.600'}>{ cardNumber }</Text>
                </Flex>
                <Flex bg={'primary.snow'} borderRadius={'50%'} height={30} width={30} justify={'center'} align={'center'} _hover={{ bg: 'gray.200', cursor: 'pointer' }}>
                    <RemoveCardAlert cardID={cardID}/>
                </Flex>
            </Flex>
            <Flex width={'100%'} height={85} justify={'flex-start'} align={'center'} p={2} direction={'row'}>
                <Text fontSize={'2rem'} fontWeight={'medium'} mt={1}>{ getCurrencySymbol() }</Text>
                <Heading fontSize={'3rem'} fontWeight={'medium'}>{amount}</Heading>
            </Flex>
            <Flex width={'100%'} height={'100%'} justify={'space-between'} align={'center'}>
                <Flex direction={'column'} p={2}>
                    <Text fontSize={'1.25rem'} fontWeight={'semibold'} color={'gray.600'}>{ cardName }</Text>
                    <Text fontSize={'1.25rem'} fontWeight={'semibold'} color={'gray.600'}>{ expiration }</Text>
                </Flex>
                <Flex width={50} height={'75%'} bg={'gray.200'} borderTopLeftRadius={45} borderBottomRightRadius={25} justify='center' align='center' mt={4}
                    _hover={{ bg: 'gray.400', cursor: 'pointer' }}
                >
                    <Box mt={2}>
                        <BsArrowReturnRight bg={'gray.600'}/>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    )
}
/*
border-top-left-radius: 55px;
    border-top-right-radius: 55px;
*/
export default CreditCard