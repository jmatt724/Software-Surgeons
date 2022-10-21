import { Flex, Heading, HStack, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import InterviewCard from './InterviewCard'

function InterviewCategory({ category, data }) {
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
            <SimpleGrid columns={3} spacingX='40px' spacingY='20px' mt={10}>
                {data.map((item, index) =>
                    <InterviewCard key={item.id} artifact={item} />
                )}
          </SimpleGrid>
        </Flex>
      )
}

export default InterviewCategory