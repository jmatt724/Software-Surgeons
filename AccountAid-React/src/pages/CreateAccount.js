import { Button, Flex, FormControl, Heading, Link, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ControlledInput from '../components/feature_components/login/ControlledInput'
import ShowLoading from '../components/ui_components/ShowLoading'
import { useAuth } from '../context/AuthContext'
import { addData } from '../firebase/api'
import { useIsLoading } from './../hooks/useIsLoading';

function CreateAccount() {
  // STATE VARIABLES
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConf, setPasswordConf] = useState('')
  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const [disabled, setDisabled] = useState(false)

  // OTHER VARIABLES
  const navigate = useNavigate() // navigation between pages
  const { signup } = useAuth()
  const { isLoading } = useIsLoading()
  
  // STATE UPDATER FUNCTIONS
  const handleEmailChange = (e) => setEmail(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)
  const handlePasswordConfChange = (e) => setPasswordConf(e.target.value)
  const handleFNameChange = (e) => setFName(e.target.value)
  const handleLNameChange = (e) => setLName(e.target.value)

  // handle create account submit
  const handleSubmit = () => {
    signup(email, password) // signup the user through auth
      .then((userCredential) => {
        // then POST to the database the new users information
        const uid = userCredential.user.uid
        addData({
            email: email,
            fName: fName,
            lName: lName,
            userID: uid,
        })
        alert('You successfully signed in!');
      }).finally(() => {
        navigate('/dashboard') // finally navigate to dashboard page
      })
      .catch((error) => { // error handling
        alert(error);
        const errorCode = error.code;
        console.log(errorCode);
        navigate('/create-account') // if there is an error, stay on create account page
      });
  }

  useEffect(() => {
    // function to disable submit button if fields are not correctly filled out
    const updateDisabled = () => {
      if(email==='' || password === '' || passwordConf === '') { return true; }
      if(passwordConf !== password) { return true; }
      if(fName==='' || lName === '') { return true; }
      if(password.length<=6) { return true; }
      return false
    }
    setDisabled(updateDisabled()) // set state with new boolean value
  }, [email, password, fName, lName, passwordConf])

  return (
    <>
    { (isLoading) // if loading, show loading UI component
      ?   <Flex justify='center' align='center' width={'100%'}>
              <ShowLoading />
          </Flex>
      : // else show dashboard UI components
      <Flex justify='center' align='center' height={'100vh'} width={'100vw'} bg={'primary.dark'} direction={'column'}>
          <Flex direction={'column'} width={700} height={600} justify={'flex-start'} align={'center'} bg={'primary.snow'} boxShadow={'2px 4px 10px #818181'}
            p={10}
          >
          <Heading>Create Account</Heading>
          <Flex width={'100%'} height={325} mt={10} justify={'flex-end'} align={'center'}>
          <FormControl onSubmit={handleSubmit}>
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
              type={'password'}
            />
          </FormControl>
          </Flex>
          <Text fontSize={'1rem'} mt={6}>
              Already have an account? <Link onClick={() => navigate('/login')} color={'primary.lightBlue'}>Log In</Link>
          </Text>
          <Button type={'submit'} bg={'primary.main'}
            mt={4}
            color={'primary.snow'}
            width={'100%'}
            height={45}
            _hover={{ bg: 'primary.lightBlue' }}
            onClick={handleSubmit}
            isDisabled={disabled}
          >
              Create Account
          </Button>
        </Flex>
      </Flex>
    }</>
  )
}

export default CreateAccount