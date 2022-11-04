import { Button, Flex, FormControl, FormErrorMessage, FormHelperText, Heading, Link, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ControlledInput from '../components/feature_components/login/ControlledInput'
import { useAuth } from '../context/AuthContext'
import { useUser } from '../context/UserContext'
import { addData } from '../firebase/api'
import { useReadDocument } from '../hooks/useReadDocument'

function CreateAccount() {
    const navigate = useNavigate()

  const { updateCurrentID } = useUser()
  const { isLoading, document, getData } = useReadDocument()
  const { signup } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConf, setPasswordConf] = useState('')
  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  
  const handleEmailChange = (e) => setEmail(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)
  const handlePasswordConfChange = (e) => setPasswordConf(e.target.value)
  const handleFNameChange = (e) => setFName(e.target.value)
  const handleLNameChange = (e) => setLName(e.target.value)

  const handleSubmit = () => {
    signup(email, password)
      .then((userCredential) => {
        alert('User signed in');
        const uid = userCredential.user.uid
        addData({ 
            email: email,
            fName: fName,
            lName: lName,
            userID: uid,
        })
        updateCurrentID(uid)
        navigate('/dashboard')
      })
      .catch((error) => {
        alert(error);
        const errorCode = error.code;
        console.log(errorCode);
      });
  }
  

  const isError = () => {
    if(email === ''){
      return { message: 'Email is required', value: true }
    }
    else if(password === ''){
      return { message: 'Password is required', value: true }
    }
    else if(passwordConf === ''){
        return { message: 'Password Confirmation is required', value: true }
      }
    return { value: false, message: ''}
  }
  return (
    <Flex justify='center' align='center' height={'100vh'} width={'100vw'} bg={'primary.dark'} direction={'column'}>
          <Flex direction={'column'} width={700} height={600} justify={'flex-start'} align={'center'} bg={'primary.snow'} boxShadow={'2px 4px 10px #818181'}
            p={10}
          >
          <Heading>Create Account</Heading>
          <Flex width={'100%'} height={325} mt={10} justify={'flex-end'} align={'center'}>
          <FormControl isInvalid={isError()} onSubmit={handleSubmit}>
          <Flex direction={'row'} width={600} justify={'space-between'} align={'center'}>
            <ControlledInput
                width={310}
                value={fName}
                handleChange={handleFNameChange}
                label={'First Name'}
                type={'fname'}
            />
            <ControlledInput 
                width={310}
                value={lName}
                handleChange={handleLNameChange}
                label={'Last Name'}
                type={'lname'}
            />
          </Flex>
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
            <ControlledInput 
              value={passwordConf}
              handleChange={handlePasswordConfChange}
              label={'Confirm Password'}
              type={'passwordConfirm'}
            />
            {!isError().value ? (
              <FormHelperText>
                {`Enter your ${isError().value}`}
              </FormHelperText>
            ) : (
              <FormErrorMessage>{isError().message}</FormErrorMessage>
            )}
          </FormControl>
          </Flex>
          <Text fontSize={'1rem'}>
              Already have an account? <Link onClick={() => navigate('/login')} color={'primary.lightBlue'}>Log In</Link>
          </Text>
          <Button type={'submit'} bg={'primary.main'}
            mt={4}
            color={'primary.snow'}
            width={'100%'}
            height={45}
            _hover={{ bg: 'primary.lightBlue' }}
            onClick={handleSubmit}
          >
              Create Account
          </Button>
        </Flex>
    </Flex>
  )
}

export default CreateAccount