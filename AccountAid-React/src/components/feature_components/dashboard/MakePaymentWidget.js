import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import DisplayRecentFriends from './DisplayRecentFriends'
import { useUser } from './../../../context/UserContext';
import { useNavigate } from 'react-router-dom';

function MakePaymentWidget() {
  const { user, getCurrencySymbol } = useUser()
  const navigate = useNavigate()
  return (
    <Flex direction={'column'} ml={6}>
      <Flex justify={'flex-start'} align={'center'} p={2} height={79} mt={1}>
                  <Heading fontSize={'2rem'} ml={4}>{'Digital Wallet'}</Heading>
      </Flex>
      <Flex height={'100%'} width={400} bg={'primary.snow'} ml={6} borderRadius={'lg'} p={4} direction={'column'}
        boxShadow={'2px 4px 10px #818181'}
      >
        <Flex height={50} justify='center' align='center'>
          <Heading fontSize={'1.75rem'}>Make a Payment</Heading>
        </Flex>
        <Flex>
          <DisplayRecentFriends />
        </Flex>
        <Flex width={'100%'} height={85} justify={'flex-start'} p={2} direction={'column'}>
          <Text fontSize={'1rem'} fontWeight={'medium'} color={'gray.600'}>Amount</Text>
          <Flex justify={'space-between'} align={'center'}>
            <Text fontSize={'2rem'} fontWeight={'semibold'} color={'gray.700'}>{`${getCurrencySymbol(user.currency)} ${user.digitalWalletAmount}`}</Text>
            <Text fontSize={'1.5rem'} fontWeight={'medium'} color={'gray.900'}>{user.currency}</Text>
          </Flex>
        </Flex>
        <Flex width={'100%'} mt={4}>
          <Button width={'100%'} height={50} bg={'primary.lightBlue'} _hover={{ bg: 'primary.main' }} color={'primary.snow'}
            onClick={() => navigate('/make-payment')}
          >Make Payment</Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default MakePaymentWidget