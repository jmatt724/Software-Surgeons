import { Flex, FormLabel, Input } from '@chakra-ui/react'
import React, { useState } from 'react'

function ControlledInput(props) {
    return (
        <Flex direction={'column'} mb={6}>
            <FormLabel>{props.label}</FormLabel>
            <Input type={props.type} value={props.value} onChange={props.handleChange} width={props.width || '100%'} 
                { ...props } 
            />
        </Flex>
    )
  
}

export default ControlledInput