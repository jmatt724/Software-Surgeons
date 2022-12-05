import { Flex, Input } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'


function SearchBar({ input, handleChange }) {

    return (
      <>
        <Flex 
          w={'100%'}
          direction='row'
          bg={'primary.snow'}
        >
        <Flex
          w={'40px'}
          justify='center'
          align='center'
        >
          <AiOutlineSearch />
        </Flex>
        <Input
          value={input}
          onChange={handleChange}
          placeholder='Search friends'
          size='sm'
          bg={'primary.snow'}
        />
        </Flex>
      </>
    )
}

export default SearchBar