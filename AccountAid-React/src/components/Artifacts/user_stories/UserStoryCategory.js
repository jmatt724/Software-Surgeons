import { Flex, Heading, HStack } from '@chakra-ui/react'
import React from 'react'
import UserStoryCard from './UserStoryCard'

function UserStoryCategory({ category, data }) {
    return (
        <Flex
            width={1850}
            height={500}
            bg={'white'}
            borderRadius={'md'}
            boxShadow={'md'}
            ml={6}
        >
            <Flex>
                <Heading m={6}>{category}</Heading>
            </Flex>
            <HStack spacing={10}>
                {data.map((item) =>
                    <UserStoryCard key={item.id} artifact={item} />
                )}
          </HStack>
        </Flex>
      )
}

export default UserStoryCategory