import { Flex } from '@chakra-ui/react'
import React from 'react'

function CardBase({ children }, props) {
  return (
    <Flex
      h={75}
      w='100%'
      boxShadow="0 4px 12px 0 rgba(0,0,0,0.05)"
      borderRadius={5}
      bg={'primary.snow'}
      { ...props }
    >
        {children}
    </Flex>
  )
}

export default CardBase