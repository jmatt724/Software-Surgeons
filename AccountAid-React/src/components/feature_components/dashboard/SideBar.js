import { Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'
import { useUser } from '../../../context/UserContext'
import { delUser } from '../../../firebase/api'
import { useIsLoading } from '../../../hooks/useIsLoading'

const SidebarItem = ({ children }) => {
  return (
    <>
      <Flex width={'100%'} height={100} justify={'center'} align={'center'}>
        { children }
      </Flex>
    </>
  ) 
}

function SideBar({ label }) {
  const { currentUser, deleteUserAuth } = useAuth()
  const navigate = useNavigate()

  const handleDelete = () => { // handle deleting a user
    delUser(currentUser.uid) // delete from database
    deleteUserAuth(currentUser.uid) // delete user auth
    navigate('/login') // navigate to login
  }

  return (
    <Flex height={'100%'} width={300} bg={'primary.main'} mr={10} 
      border={'solid'} borderColor={'gray.600'} 
      borderLeftStyle={'hidden'}
      borderTopStyle={'hidden'}
      borderBottomStyle={'hidden'}
    >
      <SidebarItem>
        <Flex pt={4}>
          <Button bg={'primary.secondary'} onClick={handleDelete}>
            Delete Account
          </Button>
        </Flex>
      </SidebarItem>
    </Flex>
  )
}

export default SideBar