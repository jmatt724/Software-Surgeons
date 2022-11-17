import { Avatar, Box, Button, Flex, Grid, GridItem, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import BalanceStat from '../components/feature_components/bank_balance/BalanceStat'
import CreditCard from '../components/feature_components/credit_cards/CreditCard'
import Expenses from '../components/feature_components/dashboard/Expenses'
import MakePaymentWidget from '../components/feature_components/dashboard/MakePaymentWidget'
import MyTransactions from '../components/feature_components/dashboard/MyTransactions'
import YourCards from '../components/feature_components/dashboard/YourCards'
import { useUser } from '../context/UserContext'
import { calcBalance, calcDigitalWallet } from '../data/calculateBalance'
import { getUser, updateField } from '../firebase/api'
import { useIsLoading } from '../hooks/useIsLoading'
import { useAuth } from './../context/AuthContext';
import ShowLoading from './../components/ui_components/ShowLoading';
import Sidebar from '../components/sidebar/Sidebar'
import PageLayout from '../components/PageLayout'
import SearchBarWindow from './../components/friend_list/SearchBar/SearchBarWindow';
import FriendList from '../components/friend_list/FriendList'


function Dashboard() {
    const { user, setCurrentUser } = useUser()
    const { currentUser, logout } = useAuth()
    const { isLoading, setIsLoading } = useIsLoading()
    const navigate = useNavigate()
    const LOADING_TIME = 200

    const handleAddFunds = () => {
        const newBalance = (parseFloat(user.balance)+ 1000.00).toFixed(2).toString()
        updateField(user, 'balance', newBalance).then(() => {
            const curr = getUser(user.userID)
            curr.then((value) => {
                setCurrentUser(value) // after promise resolves, we setCurrentUser to be the updated user
            })
        })
    }

    useEffect(() => {
        // on page refresh GET the current user from database
        const curr = getUser(currentUser.uid)
        setIsLoading(true) // set loading true while awaiting getUser
        curr.then((value) => {
            setCurrentUser(value) // after promise resolves, we setCurrentUser to be the authenticated user
        }).then(() => {
            setTimeout(() => { // then give loading a little time so it doesn't flash on the screen
                setIsLoading(false)
            }, LOADING_TIME)
        })
    }, [currentUser.uid, currentUser])

    const handleLogout = () => { // handle logging out a user
        logout()
        navigate('/login')
    }

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
                        {/*<MakePaymentWidget />*/}
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