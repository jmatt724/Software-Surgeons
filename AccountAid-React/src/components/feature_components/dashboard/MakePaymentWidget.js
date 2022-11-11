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
    <Flex direction={'column'} mt={2} ml={2}>
        <Flex width={325} height={65} bg={'primary.snow'} borderRadius={'lg'} p={4} direction={'column'}
          boxShadow={'2px 4px 10px #818181'} justify={'flex-end'} align='center'
        >
            <Button width={300} height={65} bg={'primary.lightBlue'} _hover={{ bg: 'primary.main' }} color={'primary.snow'}
              onClick={() => navigate('/make-payment')}
            >Make Payment</Button>
        </Flex>
    </Flex>
  )
}

export default MakePaymentWidget