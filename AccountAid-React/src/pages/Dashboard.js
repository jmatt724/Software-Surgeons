import { Box, Button, Flex, Grid, GridItem, Heading, HStack, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { updateField } from '../firebase/api'
import BalanceStat from '../components/Dashboard/BalanceStat'
import MyTransactions from '../components/Dashboard/MyTransactions'
import { useUser } from '../context/UserContext'
import { useIsLoading } from '../hooks/useIsLoading'
import { useAuth } from './../context/AuthContext';
import ShowLoading from './../components/ui_components/ShowLoading';
import Sidebar from '../components/sidebar/Sidebar'
import PageLayout from '../components/PageLayout'
import FriendList from '../components/FriendList/FriendList'
import { useDb } from '../context/DbContext'


function Dashboard() {
    const { user } = useUser()
    const { logout } = useAuth()
    const { setUserContext } = useDb()
    const { isLoading } = useIsLoading()
    const navigate = useNavigate()

    const handleAddFunds = () => {
        const newBalance = (parseFloat(user.balance)+ 1000.00).toFixed(2).toString()
        updateField(user, 'balance', newBalance).then(() => {
            setUserContext()
        })
    }

    const handleLogout = () => { // handle logging out a user
        logout()
        navigate('/login')
    }

    useEffect(() => {
        setUserContext()
    }, [])

    return (
        <PageLayout>
        <Flex>
            { (isLoading)
            ?   <Flex justify='center' align='center' width={'100%'}>
                    <ShowLoading />
                </Flex>
            :
            <>
                <Grid
                    h='100vh'
                    w='100vw'
                    templateRows='repeat(3, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                    gap={2}
                    p={2}
                >
                    
                    <GridItem rowSpan={4} colSpan={1}>
                        <Sidebar />
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1} ml="-75px">
                        <Flex direction={'column'} height={'100%'} p={10}>
                            <Heading fontSize={'2rem'}>Dashboard</Heading>
                            <Text fontSize={'1rem'} mt={2} ml={4} mb={4}>{`Welcome Back, ${user?.firstName}`}</Text>
                            <HStack spacing={2}>
                            <Button bg={'primary.main'} onClick={handleLogout} width={'50%'} height={'25px'} color={'white'}
                                    _hover={{ bg:'gray.400' }} fontSize={'0.75rem'}
                                >
                                    Log Out
                            </Button>
                            <Button bg={'primary.main'} onClick={() => navigate('/user-profile')} width={'50%'} height={'25px'} color={'white'}
                                _hover={{ bg:'gray.400' }} fontSize={'0.75rem'}
                            >
                                View Profile
                            </Button>
                            </HStack>
                        </Flex>
                    </GridItem>
                    <GridItem colSpan={1}  rowSpan={1}>
                        <Flex pt={4} direction='column' align='center' mt={6}>
                            <BalanceStat />
                            <Button bg={'primary.main'} onClick={handleAddFunds} width={'35%'} height={25} color={'white'}
                                _hover={{ bg:'gray.400' }} ml={4} fontSize={'0.85rem'} mt={2}
                            >
                                Add $1000
                            </Button>
                        </Flex>
                    </GridItem>
                    <GridItem colSpan={2} rowSpan={1}>
                        <FriendList />
                    </GridItem>
                    <GridItem colSpan={4} rowSpan={2} ml="-75px">
                        <Box height={75}></Box>
                        <MyTransactions />
                    </GridItem>
                </Grid> 
            </>
            }
        </Flex>
        </PageLayout>
    )
}

export default Dashboard