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
        <Flex width={350} height={75} bg={'primary.snow'} borderRadius={'lg'} p={4} direction={'column'}
          boxShadow={'2px 4px 10px #818181'} justify={'flex-end'}
        >
          <Flex width={'100%'} height={65}>
            <Button width={'100%'} height={'100%'} bg={'primary.lightBlue'} _hover={{ bg: 'primary.main' }} color={'primary.snow'}
              onClick={() => navigate('/make-payment')}
            >Make Payment</Button>
          </Flex>
        </Flex>
    </Flex>
  )
}

export default MakePaymentWidget