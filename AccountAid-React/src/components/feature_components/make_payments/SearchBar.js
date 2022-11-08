import { Flex, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useUser } from '../../../context/UserContext';
import { USERS_LIST } from './../../../data/tempUsers';
import DisplaySearchResults from './DisplaySearchResults';
import { getAllUserIDS } from '../../../firebase/api'

function SearchBar({ handle }) {
    const [input, setInput] = useState('')
    const [results, setResults] = useState([])
    const [allUsers, setAllUsers] = useState([]);
    const { user } = useUser()

    useEffect(() => {
      setAllUsers([])
      const users = []
      const GET_USERS = getAllUserIDS().then((value) => {
        value.docs.forEach((doc) => {
          users.push(doc)
        })
        setAllUsers((prev) => {
          //console.log('PREV INCLUDES DOC: ',prev.includes(doc.data().uid))
          //console.log(users)`
          return users
        })
      })
      console.log('GET USERS: ',allUsers)
    }, [])

    const handleChange = (event) => setInput(event.target.value)

    const searchUsers = (input) => {
        let tempResult = []
        allUsers.forEach(
          (doc) => {
            const data = doc.data()
            const fName = data.firstName
            const lName = data.lastName
            const inputData = input.toLowerCase()
            const fullName = `${fName.toLowerCase()} ${lName.toLowerCase()}`
            if(inputData!=='' && (inputData.length<=fullName.length)){
              if(inputData===fullName.substring(0,inputData.length)){
                tempResult.push({ name: `${fName} ${lName}`, user: data })
              }
              
            }
            else if(inputData===''){
              tempResult = []
            }
          }
        )
        return tempResult
        /**
         else if(tempResult.includes({ name: `${fName} ${lName}` })){
                tempResult.push({ name: `${fName} ${lName}`, user: data })
              }
         */
    }

    useEffect(() => {
      if(input!=='') {
        const result = searchUsers(input)
        setResults(result)
      } else {
        setResults([])
      }
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