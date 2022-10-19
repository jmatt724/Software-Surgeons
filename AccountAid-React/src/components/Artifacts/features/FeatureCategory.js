import { Box, Flex, Heading, HStack } from '@chakra-ui/react'
import React from 'react'
import FeatureCard from './FeatureCard'

function FeatureCategory({ category, data }) {
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
                {data.map((item, index) =>
                    <Box key={item.id}>
                        <FeatureCard artifact={item} />
                    </Box>
                )}
          </HStack>
        </Flex>
      )
}

export default FeatureCategory