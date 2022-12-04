import { Button, Flex, Heading, Link, Text, FormControl } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ControlledInput from '../components/feature_components/login/ControlledInput';
import { useAuth } from '../context/AuthContext';

function Login() {
  // STATE VARIABLES
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [disabled, setDisabled] = useState(false)

  // OTHER VARIABLES
  const navigate = useNavigate() // navigation between pages
  const { login } = useAuth() // login function from AuthContext
  
  // STATE UPDATER FUNCTIONS
  const handleEmailChange = (e) => setEmail(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)

  // handle login submit
  const handleSubmit = () => {
    login(email, password) // login the user through auth
      .then(() => {
        navigate('/dashboard');
      })
      .catch((error) => {
        // error handling
        alert(error);
        const errorCode = error.code;
        console.log(errorCode);
        navigate('/login') // if there is an error, stay on login page
      });
  }

  useEffect(() => {
    // function to disable submit button if fields are not correctly filled out
    const updateDisabled = () => {
      if(email==='' || password === '') { return true; }
      return false
    }
    setDisabled(updateDisabled()) // set state with new boolean value
  }, [email, password])

  return (
      <Flex justify='center' align='center' height={'100vh'} width={'100vw'} bg={'primary.orangeYellow'} direction={'column'}>
          <Flex direction={'column'} width={700} height={500} justify={'flex-start'} align={'center'} bg={'primary.snow'} boxShadow={'2px 4px 10px #818181'}
            p={10}
          >
          <Heading>LOG IN</Heading>
          <Flex width={'100%'} height={225} mt={10} justify={'flex-end'} align={'center'}>
          <FormControl onSubmit={handleSubmit}>
            
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
            onClick={handleSubmit}
            isDisabled={disabled}
          >
              Log In
          </Button>
          </Flex>
      </Flex>
  )
}

export default Login