import { Flex, Heading, HStack, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import ArchitectureCard from './ArchitectureCard'

function ArchCategory({ category, data }) {
    return (
        <Flex
            width={1850}
            height={800}
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
                    <ArchitectureCard key={item.id} architecture={item} />
                )}
          </SimpleGrid>
        </Flex>
      )
}

export default ArchCategory