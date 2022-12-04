import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { useUser } from '../../../context/UserContext'

function TransactionCard({ category, date, amount, recipiant, sender, isAll }, props) {
    const { user, getCurrencySymbol } = useUser()
    const isSender = (recipiant===user.username) ? true : false
    const fontSize='1rem'
    return (
        <Flex key={props.key} width={'100%'} height={65} borderRadius={'md'} direction={'row'} justify={'space-between'} align='center' p={4} bg={'gray.100'} mb={1}>
            <Flex height={'100%'} width={250} justify='flex-start' align='center'>
                <Heading fontSize={fontSize} fontWeight={'medium'}>{ category }</Heading>
            </Flex>
            
            {(isAll) ? 
            <>
                <Flex height={'100%'} width={250} justify='center' align='center'>
                    <Heading fontSize={fontSize} fontWeight={'medium'}>{`To: ${recipiant} `}</Heading>
                </Flex>
                <Flex height={'100%'} width={250} justify='center' align='center'>
                    <Heading fontSize={fontSize} fontWeight={'medium'}>{`From: ${sender}`}</Heading>
                </Flex>
            </>
            :
                <Flex height={'100%'} width={250} justify='center' align='center'>
                    <Heading fontSize={fontSize} fontWeight={'medium'}>{isSender ? `Fr: ${sender}` : `To: ${recipiant} `}</Heading>
                </Flex>
            }
            <Flex height={'100%'} width={250} justify='center' align='center'>
                <Heading fontSize={fontSize} fontWeight={'medium'}>{ date }</Heading>
            </Flex>
            <Flex height={'100%'} width={250} justify='flex-end' align='center'>
                <Heading fontSize={fontSize} fontWeight={'medium'} color={isSender ? 'green.500' : 'red.500'}>
                    {isSender ? `+ ${getCurrencySymbol()}${amount}` : `- ${getCurrencySymbol()}${amount}`}
                </Heading>
            </Flex>
        </Flex>
    )
}

export default TransactionCard