import { Button, Flex, Heading, Link, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ControlledInput from '../components/feature_components/login/ControlledInput';
import { useAuth } from '../context/AuthContext';
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [disabled, setDisabled] = useState(false)


  const { login } = useAuth()
  

  const handleEmailChange = (e) => setEmail(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)

  const handleSubmit = () => {
    login(email, password)
      .then(() => {
        //alert('User signed in');
        navigate('/dashboard');
      })
      .catch((error) => {
        alert(error);
        const errorCode = error.code;
        console.log(errorCode);
        navigate('/login')
      });
  }

  const updateDisabled = () => {
    if(email==='' || password === '') { return true; }
    if(password.length<=6) { return true; }
    return false
  }

  useEffect(() => {
    setDisabled(updateDisabled())
  }, [email, password])

  return (
      <Flex justify='center' align='center' height={'100vh'} width={'100vw'} bg={'primary.dark'} direction={'column'}>
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