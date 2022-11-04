import { Flex, FormHelperText, FormLabel, Input } from '@chakra-ui/react'
import React, { useState } from 'react'

function ControlledInput({ label, type, value, handleChange }) {
    return (
        <Flex direction={'column'} mb={6}>
            <FormLabel>{label}</FormLabel>
            <Input type={type} value={value} onChange={handleChange}/>
        </Flex>
    )
  
}

export default ControlledInput