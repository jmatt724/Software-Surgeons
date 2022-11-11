import { Flex } from '@chakra-ui/react'
import React from 'react'
import Sidebar from './sidebar/Sidebar'

function PageLayout({ children }) {
  return (
    <Flex width={'100vw'} height={'100vh'} bg={'primary.snow'}>
        { children }
    </Flex>
  )
}

export default PageLayout