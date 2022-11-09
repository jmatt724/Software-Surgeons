import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import EditCard from '../components/feature_components/credit_cards/EditCard'
import SideBar from '../components/feature_components/dashboard/SideBar'

function UserSettings() {
  return (
    <Flex width={'100vw'} height={'100vh'} bg={'primary.snow'} direction={'row'}>
        <SideBar />
        <Flex width={'90vw'} height={'100%'} direction={'column'} p={10}>
            <Heading fontSize={'3rem'}>User Settings</Heading>
        </Flex>
    </Flex>
  )
}

export default UserSettings