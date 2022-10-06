import { Avatar, Box, Flex, Heading, Text, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'

function DeveloperCard({ name, title, description, img }) {
  return (
    <Flex maxW='1000' bg={'white'} borderWidth='1px' borderRadius='lg' overflow='hidden' width={585} height={290} shadow='md'>
        <Wrap >
            <WrapItem>
                <Flex direction={'column'} mt={6}>
                    <Avatar width={'200px'} height={'200px'} name='Segun Adebayo' src={img} m={4} />
                </Flex>
            </WrapItem>
        </Wrap>
        <Flex direction='column' mt={8} width={375}>
            <Flex width={'100%'} height={50} align={'center'} justify={'center'}>
                <Heading>{name}</Heading>
            </Flex>
            <Flex width={'100%'} height={50} align={'center'} justify={'center'}>
                <Heading fontSize={'1.25rem'} fontWeight={'semibold'} ><i>{title}</i></Heading>
            </Flex>
            <Flex p={2} ml={6} mt={4} align={'center'} justify={'center'} textAlign={'left'}>
                <Text fontSize={'1rem'} fontWeight={'medium'}>{description}</Text>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default DeveloperCard