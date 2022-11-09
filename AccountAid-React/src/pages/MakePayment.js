import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SideBar from '../components/feature_components/dashboard/SideBar'
import SearchBar from '../components/feature_components/make_payments/SearchBar'
import ShowPaymentDetails from '../components/feature_components/make_payments/ShowPaymentDetails'
import { USERS_LIST } from './../data/tempUsers';

function MakePayment() {
    const [selected, setSelected] = useState('')
    const navigate = useNavigate()

    const handleSelected = (user) => {
        const fName = user.firstName
        const lName = user.lastName
        setSelected({ id: user.userID, name: `${fName} ${lName}`, data: user})
    }

    return (
        <Flex width={'100vw'} height={'100vh'} bg={'primary.snow'} direction={'row'}>
            {/*<SideBar />*/}
            <Flex direction={'column'}>
                <Flex width={500} p={8}>
                    <Heading fontSize={'2rem'}>Make Payment</Heading>
                    <Button onClick={() => navigate('/dashboard')} bg={'primary.main'} width={100} height={25} color={'primary.snow'} ml={4} mt={2}>
                            Go Back
                    </Button>
                </Flex>
                <Flex width={500} pl={8} height={30}>
                    
                </Flex>
                <Flex direction={'row'}>
                    <Flex height={600} width={700} bg={'primary.snow'} ml={6} borderRadius={'lg'} p={4} direction={'column'}
                        boxShadow={'2px 4px 10px #818181'}
                        justify='center'
                        align='center'
                    >
                        {selected === ''
                        ?   <Text fontSize={'1.25rem'}>Select a user to pay</Text>
                        :   <ShowPaymentDetails reciever={selected}/>
                        }
                    </Flex>
                    <Flex height={600} width={700} bg={'primary.snow'} ml={6} borderRadius={'lg'} p={4} direction={'column'}
                        boxShadow={'2px 4px 10px #818181'}
                    >
                        <SearchBar handle={handleSelected}/>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default MakePayment