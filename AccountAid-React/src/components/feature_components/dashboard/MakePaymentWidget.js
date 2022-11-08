import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import DisplayRecentFriends from './DisplayRecentFriends'
import { useUser } from './../../../context/UserContext';
import { useNavigate } from 'react-router-dom';

function MakePaymentWidget() {
  const [isExpanded, setIsExpanded] = useState(false)
  const { user, getCurrencySymbol } = useUser()
  const navigate = useNavigate()

  const handleExpand = () => {
    // handle expand component
    setIsExpanded(!isExpanded)
  }

  return (
    <Flex direction={'column'} ml={'-12px'} mt={2}>
      {/*<Flex justify={'flex-start'} align={'center'} p={2} height={79} mt={1}>
                  <Heading fontSize={'2rem'} ml={4}>{'Digital Wallet'}</Heading>
      </Flex>*/}
      
        {!isExpanded
        ?
        <Flex height={'30%'} width={400} bg={'primary.snow'} borderRadius={'lg'} p={4} direction={'column'}
          boxShadow={'2px 4px 10px #818181'} justify={'flex-end'}
        >
          <Flex width={'100%'} height={65}>
            <Button width={'100%'} height={50} bg={'primary.lightBlue'} _hover={{ bg: 'primary.main' }} color={'primary.snow'}
              onClick={() => navigate('/make-payment')}
            >Make Payment</Button>
          </Flex>
          <Flex justify='flex-end' height={'30%'}>
            <Text fontSize={'1rem'} color={'gray.500'}
              _hover={{ color: 'gray.700', cursor: 'pointer' }}
              mt={1}
              onClick={handleExpand}
              userSelect={`none;`}
            >Expand</Text>
          </Flex>
        </Flex>
        :
        <>
        <Flex height={'100%'} width={400} bg={'primary.snow'} borderRadius={'lg'} p={4} direction={'column'}
          boxShadow={'2px 4px 10px #818181'} justify={'flex-end'}
        >
          <Flex width={'100%'} height={65}>
            <Button width={'100%'} height={50} bg={'primary.lightBlue'} _hover={{ bg: 'primary.main' }} color={'primary.snow'}
              onClick={() => navigate('/make-payment')}
            >Make Payment</Button>
          </Flex>
          <Flex justify='flex-end'>
            <Text fontSize={'1rem'} color={'gray.500'}
              mb={1}
              _hover={{ color: 'gray.700', cursor: 'pointer' }}
              onClick={handleExpand}
              userSelect={`none;`}
            >Hide</Text>
          </Flex>
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
        </Flex>
        </>
        }
    </Flex>
  )
}

export default MakePaymentWidget