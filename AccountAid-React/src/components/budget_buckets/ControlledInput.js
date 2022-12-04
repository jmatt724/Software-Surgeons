import { Flex, FormLabel, Input } from '@chakra-ui/react'
import React, { useState } from 'react'

function ControlledInput({ type, value, handleChange}, props) {
    return (
        <Flex direction={'column'} mb={6}>
            <FormLabel>{props.label}</FormLabel>
            <Input type={type} value={value} onChange={handleChange} width={props.width || '100%'} 
                { ...props } 
            />
        </Flex>
    )
  
}

export default ControlledInput