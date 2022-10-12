import { Box, Flex, Heading, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import ArtifactCard from './ArtifactCard'
import ScenarioCard from './ScenarioCard'

function ScenarioCategory({ category, data }) {
    return (
        <Flex
            width={1850}
            height={'100%'}
            bg={'white'}
            borderRadius={'md'}
            boxShadow={'md'}
            pb={10}
            ml={6}
        >
            <Flex direction='column'>
                <Box width={1850} mb={2}>
                    <Heading m={6}>{category}</Heading>
                </Box>
                <VStack>
                    {data.map((item, index) =>
                        <Flex direction='row' >
                            <Flex key={index} width={225} height={285} justify='center' align='center'>
                                <Heading fontSize={'2.5rem'}>{item.persona}</Heading>
                            </Flex>
                            <HStack spacing={10} key={item.persona}>
                                {item.scenarios.map((scenario, ind) => 
                                    <ScenarioCard category={category} key={scenario.id} artifact={scenario} persona={item.persona}/>
                                )}
                            </HStack>
                        </Flex>
                    )}
                </VStack>
            </Flex>
        </Flex>
      )
}

export default ScenarioCategory