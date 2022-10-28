import { Flex, Heading, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import SideBar from '../components/feature_components/dashboard/SideBar'
import SearchBar from '../components/feature_components/make_payments/SearchBar'
import ShowPaymentDetails from '../components/feature_components/make_payments/ShowPaymentDetails'
import { USERS_LIST } from './../data/tempUsers';

function MakePayment() {
    const [selected, setSelected] = useState('')

    const handleSelected = (user) => {
        const fName = user.substring(0, user.indexOf(' '))
        const lName = user.substring(user.indexOf(' ')+1)
        USERS_LIST.map((u) => {
            if(u.firstName===fName && u.lastName===lName){
                setSelected({ id: u.userID, name: user })
            }
        })
    }

    return (
        <Flex width={'100vw'} height={'100vh'} bg={'primary.snow'} direction={'row'}>
            <SideBar />
            <Flex direction={'column'}>
                <Flex width={500} p={10}>
                    <Heading fontSize={'3rem'}>Make Payment</Heading>
                </Flex>
                <Flex direction={'row'}>
                    <Flex height={800} width={1000} bg={'primary.snow'} ml={6} borderRadius={'lg'} p={4} direction={'column'}
                        boxShadow={'2px 4px 10px #818181'}
                        justify='center'
                        align='center'
                    >
                        {selected === ''
                        ?   <Text fontSize={'2rem'}>Select a user to pay</Text>
                        :   <ShowPaymentDetails reciever={selected}/>
                        }
                    </Flex>
                    <Flex height={800} width={800} bg={'primary.snow'} ml={6} borderRadius={'lg'} p={4} direction={'column'}
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