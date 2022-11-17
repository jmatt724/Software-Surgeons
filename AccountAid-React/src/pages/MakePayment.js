import { Button, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SideBar from '../components/feature_components/dashboard/SideBar'
import SearchBar from '../components/feature_components/make_payments/SearchBar'
import ShowPaymentDetails from '../components/feature_components/make_payments/ShowPaymentDetails'
import PageLayout from '../components/PageLayout'
import Sidebar from '../components/sidebar/Sidebar'
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
        <PageLayout>
        <Flex>
            <Grid
                    h='100vh'
                    w='100vw'
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                    gap={2}
                    p={2}
                >
                    
                    <GridItem rowSpan={4} colSpan={1}>
                        <Sidebar />
                    </GridItem>
                    <GridItem colSpan={4} rowSpan={1} ml="-75px">
                        <Flex width={500} p={8}>
                            <Heading fontSize={'2rem'}>Make Payment</Heading>
                        </Flex>
                    </GridItem>
                    <GridItem colSpan={3} rowSpan={1} ml="-75px">
                        <Flex height={600} width={800} bg={'primary.snow'} ml={6} borderRadius={'lg'} p={4} direction={'column'}
                            boxShadow={'2px 4px 10px #818181'}
                            justify='center'
                            align='center'
                        >
                            {selected === ''
                            ?   <Text fontSize={'1.25rem'}>Select a user to pay</Text>
                            :   <ShowPaymentDetails reciever={selected}/>
                            }
                        </Flex>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1} ml="-75px" >
                    <Flex height={'100%'} width={400} bg={'primary.snow'} ml={6} borderRadius={'lg'} p={4} direction={'column'}
                        boxShadow={'2px 4px 10px #818181'}
                    >
                        <SearchBar handle={handleSelected}/>
                    </Flex>
                    </GridItem>
            </Grid>
            {/*<SideBar />
            <Flex direction={'column'}>
                <Flex width={500} p={8}>
                    <Heading fontSize={'2rem'}>Make Payment</Heading>
                    <Button onClick={() => navigate('/dashboard')} bg={'primary.main'} width={100} height={25} color={'primary.snow'} ml={4} mt={2}>
                            Go Back
                    </Button>
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
            */}
        </Flex>
        </PageLayout>
    )
}

export default MakePayment