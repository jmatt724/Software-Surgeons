import { Button, Flex, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import Calendar from '../components/feature_components/calendar/Calendar'
import SimButton from '../components/feature_components/calendar/SimButton'
import { USER1, USER2 } from './../data/tempUsers';
import { useNavigate } from 'react-router-dom';
import { useUser } from './../context/UserContext';

function Login() {
  const navigate = useNavigate()
  const { setCurrentUser } = useUser()

  const handleChange = (user) => {
    setCurrentUser(user)
    navigate('/dashboard')
  }

  return (
      <Flex justify='center' align='center' height={1000} width={'100vw'} bg={'primary.dark'} direction={'column'}>
          {/*<Calendar />*/}
          <Heading>TEMP USERS</Heading>
          <Flex direction={'row'} justify={'center'} align={'center'}>
          <Flex width={175}>
            <Button width={125} height={50}
              id={USER1.firstName}
              onClick={() => handleChange(USER1)}
            >
              User 1 - {USER1.firstName}
            </Button>
          </Flex>
          <Flex width={175}>
            <Button width={125} height={50}
              id={USER2.firstName}
              onClick={() => handleChange(USER2)}
            >
              User 2 - {USER2.firstName}
            </Button>
          </Flex>
          </Flex>
      </Flex>
  )
}

export default Login