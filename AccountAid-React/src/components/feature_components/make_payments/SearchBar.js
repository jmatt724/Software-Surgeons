import { Flex, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useUser } from '../../../context/UserContext';
import { USERS_LIST } from './../../../data/tempUsers';
import DisplaySearchResults from './DisplaySearchResults';

function SearchBar({ handle }) {
    const [input, setInput] = useState('')
    const [results, setResults] = useState([])
    const users = USERS_LIST
    const { user } = useUser()

    const handleChange = (event) => setInput(event.target.value)

    const searchUsers = (input) => {
        let tempResult = []
        users.map((users) => {
            const fName = users.firstName
            const lName = users.lastName
            if(user.firstName!==fName && user.lastName!==lName){
            const name = `${fName.toLowerCase()} ${lName.toLowerCase()}`
            if(input!=='' && name.includes(input.toLowerCase())){
                if(!tempResult.includes(`${fName} ${lName}`)){
                    tempResult.push(`${fName} ${lName}`)
                }
            }}
        })
        return tempResult
    }

    useEffect(() => {
        const result = searchUsers(input)
        setResults(result)
    }, [input])
  
    return (
      <>
        <Text mb='8px' fontSize={'1.25rem'}>Search: {input}</Text>
        <Input
          value={input}
          onChange={handleChange}
          placeholder='Search people'
          size='md'
        />
        <DisplaySearchResults results={results} handle={handle}/>
      </>
    )
}

export default SearchBar