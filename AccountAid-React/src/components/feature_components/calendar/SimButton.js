import { Button, Flex } from '@chakra-ui/react'
import React from 'react'

function SimButton({ label, onClick }) {
  return (
    <Flex ml={10} justify='center' align='center' width={100}>
        <Button onClick={onClick} width={100}>
            {label}
        </Button>
    </Flex>
  )
}

export default SimButton