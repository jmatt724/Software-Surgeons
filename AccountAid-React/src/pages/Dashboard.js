import { Button, Flex, Heading, Text } from '@chakra-ui/react'
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
import { delUser, getUser } from '../firebase/api'
import { useIsLoading } from '../hooks/useIsLoading'
import { useAuth } from './../context/AuthContext';
import ShowLoading from './../components/ui_components/ShowLoading';

function Dashboard() {
    const { user, setCurrentUser } = useUser()
    const { currentUser, logout, deleteUserAuth } = useAuth()
    const { isLoading, setIsLoading } = useIsLoading()
    const navigate = useNavigate()
    const LOADING_TIME = 1000
    
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
    }, [])

    const handleLogout = () => { // handle logging out a user
        logout()
        navigate('/login')
    }

    const handleDelete = () => { // handle deleting a user
        delUser(currentUser.uid) // delete from database
        deleteUserAuth(currentUser.uid) // delete user auth
        navigate('/login') // navigate to login
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
                <Flex height={'20%'} mt={6}>
                    <Flex width={500} height={'100%'} direction={'column'} p={10}>
                        <Heading fontSize={'3rem'}>Dashboard</Heading>
                        <Text fontSize={'1.5rem'}>{`Welcome Back, ${user?.firstName}`}</Text>
                    </Flex>
                    <Flex pt={4}>
                        {/*<BalanceStat />*/}
                    </Flex>
                    <Flex pt={4}>
                        <Button bg={'primary.main'} onClick={handleLogout}>
                            Log Out
                        </Button>
                        <Button bg={'primary.secondary'} onClick={handleDelete}>
                            Delete Account
                        </Button>
                    </Flex>
                </Flex>
                <Flex height={'35%'} p={4}>
                    <Flex>
                        {/*<YourCards />*/}
                    </Flex>
                </Flex>
                <Flex height={'42%'} p={4} direction={'row'}>
                    {/*<MyTransactions />*/}
                    {/*<MakePaymentWidget />*/}
                </Flex>
            </Flex>
            </>
            }
        </Flex>
    )
}

export default Dashboard