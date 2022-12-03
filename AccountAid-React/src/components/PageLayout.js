import { Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useDb } from '../context/DbContext'
import { useUser } from '../context/UserContext'
import { getUser } from '../firebase/api'
import { useIsLoading } from '../hooks/useIsLoading'
import Sidebar from './sidebar/Sidebar'
import ShowLoading from './ui_components/ShowLoading'

function PageLayout({ children }) {
  const { currentUser } = useAuth()
  const { setUserContext } = useDb()
  const { setCurrentUser, user } = useUser()
  const [isLoading, setIsLoading] = useIsLoading()

  const location = useLocation()

  useEffect(() => {
    if(Object.keys(user).length===0) {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }
  }, [location])

  return (
    <Flex width={'100vw'} height={'100vh'} bg={'primary.snow'}>
      { (isLoading)
            ?   <Flex justify='center' align='center' width={'100%'}>
                    <ShowLoading />
                </Flex>
            :
        children 
      }
    </Flex>
  )
}

export default PageLayout