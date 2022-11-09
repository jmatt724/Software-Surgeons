import { Avatar, Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import BalanceStat from '../components/feature_components/bank_balance/BalanceStat'
import CreditCard from '../components/feature_components/credit_cards/CreditCard'
import Expenses from '../components/feature_components/dashboard/Expenses'
import MakePaymentWidget from '../components/feature_components/dashboard/MakePaymentWidget'
import MyTransactions from '../components/feature_components/dashboard/MyTransactions'
import SideBar from '../components/feature_components/dashboard/SideBar'
import YourCards from '../components/feature_components/dashboard/YourCards'
import { useUser } from '../context/UserContext'
import { calcBalance, calcDigitalWallet } from '../data/calculateBalance'
import { getUser, updateField } from '../firebase/api'
import { useIsLoading } from '../hooks/useIsLoading'
import { useAuth } from './../context/AuthContext';
import ShowLoading from './../components/ui_components/ShowLoading';


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
    
    /*
    useEffect(() => {
        const getBalance = calcBalance(user.cards)
        const getDigitalAmount = calcDigitalWallet(user.cards)
        updateBalance('balance', getBalance)
        updateBalance('digitalWalletAmount', getDigitalAmount)
    }, [user.cards])
    */

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
        <Flex width={'100vw'} height={'100vh'} bg={'primary.snow'} direction={'row'}>
            { (isLoading)
            ?   <Flex justify='center' align='center' width={'100%'}>
                    <ShowLoading />
                </Flex>
            :
            <>
            <SideBar />
            <Flex direction={'column'} width={'95%'}>
                <Flex height={'23%'} mt={6} width={'80%'}>
                    <Flex direction={'row'} width={'46%'} height={'100%'}>
                    <Flex width={'65%'} direction={'column'} height={'100%'} p={10} bg={'gray.100'}>
                        <Heading fontSize={'2rem'}>Dashboard</Heading>
                        <Text fontSize={'1rem'} mt={2} ml={4} mb={4}>{`Welcome Back, ${user?.firstName}`}</Text>
                        <Box>
                        <Button bg={'primary.main'} onClick={handleLogout} width={'50%'} height={'20px'} color={'white'}
                            _hover={{ bg:'gray.400' }}
                        >
                            Log Out
                        </Button>
                        <Button bg={'primary.main'} onClick={() => navigate('/user-profile')} width={'50%'} height={'20px'} color={'white'}
                            _hover={{ bg:'gray.400' }}
                        >
                            View Profile
                        </Button>
                        </Box>
                    </Flex>
                        <Flex pt={4} bg={'gray.100'} height={'100%'} justify='center' pb={3}>
                            <Avatar bg='teal.500' mr={6} width={'125px'} height={'125px'} src={(!user.avatarImage) ? '' : 'https://bit.ly/sage-adebayo' } />
                        </Flex>
                    </Flex>
                    
                    <Flex pt={4}>
                        <BalanceStat />
                        <Button bg={'primary.main'} onClick={handleAddFunds} width={'50%'} height={25} color={'white'}
                            _hover={{ bg:'gray.400' }}
                        >
                            Add $1000
                        </Button>
                    </Flex>
                </Flex>
                <Flex height={'35%'} p={4} width={'64%'} justify={'flex-start'}>
                    <Flex>
                        <MakePaymentWidget />
                        {/*<YourCards />*/}
                    </Flex>
                </Flex>
                <Flex height={'55%'} p={4} direction={'row'} mb={2}>
                    <MyTransactions />
                </Flex>
            </Flex>
            </>
            }
        </Flex>
    )
}

export default Dashboard