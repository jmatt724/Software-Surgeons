import { Box, Button, Flex, Heading, Input, Link, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Calendar from '../components/feature_components/calendar/Calendar'
import SimButton from '../components/feature_components/calendar/SimButton'
import { USER1, USER2 } from './../data/tempUsers';
import { useNavigate } from 'react-router-dom';
import { useUser } from './../context/UserContext';
import { useReadDocument } from '../hooks/useReadDocument';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import ControlledInput from '../components/feature_components/login/ControlledInput';

/*
THIS IS FOR CREATE ACCOUNT
const [fName, setFName] = useState('')
const [lName, setLName] = useState('')
const handleFNameChange = (e) => setFName(e.target.value)
const handleLNameChange = (e) => setLName(e.target.value)
<EmailInput 
              value={fName}
              handleChange={handleFNameChange}
              label={'First Name'}
              type={'fname'}
            />
<EmailInput 
  value={lName}
              handleChange={handleLNameChange}
              label={'Last Name'}
              type={'lname'}
            />

*/

function Login() {
  const navigate = useNavigate()
  const { setCurrentUser } = useUser()
  const { isLoading, document, getData } = useReadDocument()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  

  const handleEmailChange = (e) => setEmail(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)
  

  const isError = () => {
    if(email === ''){
      return { message: 'Email is required', value: true }
    }
    else if(password === ''){
      return { message: 'Password is required', value: true }
    }
    return { value: false, message: ''}
  }

  const handleChange = (user) => {
    //getData()
    setCurrentUser(user)
    navigate('/dashboard')
  }

  const handleSubmit = () => {
    // handle submitting login form
    // after getting auth set up we can use auth functions
    
    // make a get request to read the user data then set current user
    
    //setCurrentUser(user)
    navigate('/dashboard')
  }

  useEffect(() => {
    const newUser = document
    console.log('NEW USER: ',newUser)
  }, [document])

  return (
      <Flex justify='center' align='center' height={'100vh'} width={'100vw'} bg={'primary.dark'} direction={'column'}>
          {/*<Calendar />*/}
          <Flex direction={'column'} width={700} height={500} justify={'flex-start'} align={'center'} bg={'primary.snow'} boxShadow={'2px 4px 10px #818181'}
            p={10}
          >
          <Heading>LOG IN</Heading>
          <Flex width={'100%'} height={225} mt={10} justify={'flex-end'} align={'center'}>
          <FormControl isInvalid={isError()} onSubmit={handleSubmit}>
            
            <ControlledInput 
              value={email}
              handleChange={handleEmailChange}
              label={'Email'}
              type={'email'}
            />
            <ControlledInput 
              value={password}
              handleChange={handlePasswordChange}
              label={'Password'}
              type={'password'}
            />
            {!isError().value ? (
              <FormHelperText>
                Enter your email
              </FormHelperText>
            ) : (
              <FormErrorMessage>{isError().message}</FormErrorMessage>
            )}
          </FormControl>
          </Flex>
          <Text fontSize={'1rem'}>
              Need an account? <Link onClick={() => navigate('/create-account')} color={'primary.lightBlue'}>Create Account</Link>
          </Text>
          <Button type={'submit'} bg={'primary.main'}
            mt={4}
            color={'primary.snow'}
            width={'100%'}
            height={45}
            _hover={{ bg: 'primary.lightBlue' }}
          >
              Log In
          </Button>
            {/*
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
  </Flex>*/}
          </Flex>
      </Flex>
  )
}

export default Login