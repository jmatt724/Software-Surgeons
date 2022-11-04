import { Box, Button, Flex, Heading, HStack, Show, StackDivider } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { NAVBAR_DATA } from '../data/landingPageData'
import { Divider } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useReadDocument } from '../hooks/useReadDocument';

function NavBar({ update }) {
    const navigate = useNavigate()

    const { isLoading, document, getData } = useReadDocument() // This could be used for logging someone in who already has an account
    
    const NavItem = ({ label, onClick }) => {
        return (
            <Flex width={160} justify='center' align={'center'} _hover={{ color: 'primary.orangeYellow', cursor: 'pointer', fontStyle: 'oblique' }}
                onClick={onClick}
            >
                <Heading fontSize={'1.75rem'} fontWeight={'semibold'}>
                    {label}
                </Heading>
            </Flex>
        )
    }

    const handleSignIn = () => {
        navigate('/login')
    }

    const handleCreateAccount = () => {

    }

    return (
        <Flex
            width={'100%'}
            height={175}
            bg={'white'}
            justify={'space-between'}
        >
            
            <Flex height={185} width={400} p={0} m={0} justify='center' align='center' direction={'row'} _hover={{ cursor: 'pointer' }} onClick={() => navigate('/')} >
                <Heading mb={2} ml={4} fontSize={'3rem'} fontWeight={'semibold'}>AccountAid</Heading>
                <Box 
                    bgImage={process.env.PUBLIC_URL+"/images/AccountAid-Logo-Solo.png"}
                    height={75}
                    width={75}
                    bgSize={"75px 75px"}
                    mb={2}
                />
            </Flex>
            <Flex height={185} width={600} p={0} ml={20} justify={'space-evenly'} align='center'></Flex>
            <Flex height={185} width={300} p={2} justify='center' align='center' mr={6}>
                <HStack spacing={4}>
                    <Button height={50} onClick={() => navigate('/login')}>
                        Sign In
                    </Button>
                    <StackDivider bg={'primary.secondary'} width={1}/>
                    <Button height={50} onClick={() => navigate('/create-account')}>
                        Create Account
                    </Button>
                </HStack>
            </Flex>
        </Flex>
    )
}

export default NavBar