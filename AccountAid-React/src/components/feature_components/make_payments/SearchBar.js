import { Flex, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useUser } from '../../../context/UserContext';
import { USERS_LIST } from './../../../data/tempUsers';
import DisplaySearchResults from './DisplaySearchResults';
import { getAllUserIDS, getUsernames } from '../../../firebase/api'

function SearchBar({ handle }) {
    const [input, setInput] = useState('')
    const [results, setResults] = useState([])
    const [allUsers, setAllUsers] = useState([]);
    const [usernames, setUsernames] = useState('')
    const { user } = useUser()

    useEffect(() => {
      getUsernames().then((value) => {
          setUsernames(value)
      })
    }, [])

    const handleChange = (event) => setInput(event.target.value)

    const searchUsers = () => {
      //console.log(usernames)
      const searchResults = []
      usernames.forEach((username, index) => {
        if(username.username !== user.username){
          if(username.username.toLowerCase().includes(input.toLowerCase())){
            searchResults.push(username)
          }
        }
      })
      return searchResults
    }

    useEffect(() => {
      if(input!=='') {
        const result = searchUsers()
        setResults(result)
      } else {
        setResults([])
      }
    }, [input])
  
    return (
      <>
        <Input
          value={input}
          type='outlined'
          onChange={handleChange}
          placeholder='Search people'
          size='sm'
          width={600}
        />
        <DisplaySearchResults results={results} handle={handle}/>
      </>
    )
}

export default SearchBar