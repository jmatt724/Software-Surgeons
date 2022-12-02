import { Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useUser } from '../context/UserContext'
import { getUser } from '../firebase/api'
import Sidebar from './sidebar/Sidebar'

function PageLayout({ children }) {
  const { currentUser } = useAuth()
  const { setCurrentUser } = useUser()
  useEffect(() => {
    getUser(currentUser.uid).then((value) => {
      console.log('User retrieved')
      setCurrentUser(value)
  })
  }, [])

  return (
    <Flex width={'100vw'} height={'100vh'} bg={'primary.snow'}>
        { children }
    </Flex>
  )
}

export default PageLayout