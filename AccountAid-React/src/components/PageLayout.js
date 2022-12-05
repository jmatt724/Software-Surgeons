import { Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useDb } from '../context/DbContext'
import { useUser } from '../context/UserContext'
import { useIsLoading } from '../hooks/useIsLoading'
import ShowLoading from './ui_components/ShowLoading'

function PageLayout({ children }) {
  const { user } = useUser()
  const { isLoading, handleLoading } = useIsLoading()

  const location = useLocation()

  useEffect(() => {
    if(Object.keys(user).length===0) {
      handleLoading(true)
      setTimeout(() => {
        handleLoading(false)
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