import { Avatar, Box, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { useUser } from '../context/UserContext'

function Profile() {
    const { user } = useUser()

    return (
        <>
        <Box bg={'primary.main'} height={50}>

        </Box>
        <Box height={600}>
            <Image src={process.env.PUBLIC_URL+"images/painted-bg-image.webp" } fallback={'background-img'} height={250} width={'100vw'}/>
            
            <Box height={150} bg={'primary.snow'}>
                <Avatar bg='teal.500' height={200} width={200} src={(!user.avatarImage) ? '' : 'https://bit.ly/sage-adebayo' } 
                    position={'relative'} bottom={'75px'} left={'150px'}
                />
                <Box position={'relative'} bottom={'175px'} left={'400px'}>
                    <Heading fontSize={'1.75rem'} fontWeight={'semibold'}>{`${user.firstName} ${user.lastName}`}</Heading>
                </Box>
            </Box>
        </Box>
        </>
    )
}

export default Profile