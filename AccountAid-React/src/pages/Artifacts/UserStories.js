import { Heading } from '@chakra-ui/react'
import React from 'react'
import NavBar from '../../components/NavBar'

function UserStories() {
  return (
    <div>
        <NavBar />
        <Heading fontSize={'1.5rem'}>User Stories</Heading>
    </div>
  )
}

export default UserStories