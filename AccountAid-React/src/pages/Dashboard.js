import { Box, Button, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { BALANCE } from '../components/feature_components/bank_balance/balanceData'
import BalanceDisplay from '../components/feature_components/bank_balance/BalanceDisplay'
import BalanceStat from '../components/feature_components/bank_balance/BalanceStat'
import CreditCard from '../components/feature_components/credit_cards/CreditCard'
import Expenses from '../components/feature_components/dashboard/Expenses'
import MakePaymentWidget from '../components/feature_components/dashboard/MakePaymentWidget'
import MyTransactions from '../components/feature_components/dashboard/MyTransactions'
import SideBar from '../components/feature_components/dashboard/SideBar'
import YourCards from '../components/feature_components/dashboard/YourCards'
import { useUser } from '../context/UserContext'
import { calcBalance, calcDigitalWallet } from '../data/calculateBalance'
import { deleteUser, delUser, getUser } from '../firebase/api'
import { useAuth } from './../context/AuthContext';

function Dashboard() {
    const { user, setCurrentUser } = useUser()
    const { currentUser, logout, deleteUserAuth } = useAuth()
    const navigate = useNavigate()
    /*
    useEffect(() => {
        const getBalance = calcBalance(user.cards)
        const getDigitalAmount = calcDigitalWallet(user.cards)
        updateBalance('balance', getBalance)
        updateBalance('digitalWalletAmount', getDigitalAmount)
    }, [user.cards])
    */

    useEffect(() => {
        const curr = getUser(currentUser.uid)
        curr.then((value) => {
            setCurrentUser(value)
        })
    }, [])

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    const handleDelete = () => {
        delUser(currentUser.uid)
        deleteUserAuth(currentUser.uid)
        navigate('/login')
    }

    return (
        <Flex width={'100vw'} height={'100vh'} bg={'primary.snow'} direction={'row'}>
            <SideBar />
            <Flex direction={'column'} width={'95%'}>
                <Flex height={'20%'} mt={6}>
                    <Flex width={500} height={'100%'} direction={'column'} p={10}>
                        <Heading fontSize={'3rem'}>Dashboard</Heading>
                        <Text fontSize={'1.5rem'}>{`Welcome Back, ${user.firstName}`}</Text>
                    </Flex>
                    <Flex pt={4}>
                        <BalanceStat />
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
        </Flex>
    )
}

export default Dashboard