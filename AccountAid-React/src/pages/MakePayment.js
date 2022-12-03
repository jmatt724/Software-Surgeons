import { Button, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import SideBar from '../components/feature_components/dashboard/SideBar'
import SearchBar from '../components/feature_components/make_payments/SearchBar'
import ShowPaymentDetails from '../components/feature_components/make_payments/ShowPaymentDetails'
import PageLayout from '../components/PageLayout'
import Sidebar from '../components/sidebar/Sidebar'
import { useDb } from '../context/DbContext'
import { getUser, getUsernames } from '../firebase/api'
import { USERS_LIST } from './../data/tempUsers';

function MakePayment() {
    const [selected, setSelected] = useState('')

    const navigate = useNavigate()
    
    const { setUserContext } = useDb()
    const state = useLocation()

    const handleSelected = (user) => {
        getUser(user).then((value) => {
            setSelected({ username: value.username, data: value })
        })
        
    }

    useEffect(() => {
        setSelected('')
        setUserContext()
        if(state.state){
            const { uname, id } = state.state;
            if(uname!==undefined && id !== undefined){
                handleSelected(id)
            }
        }
        
    }, [])

    return (
        <PageLayout>
        <Flex>
                <Grid
                    h='100vh'
                    w='100vw'
                    templateRows='repeat(5, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                    gap={2}
                    p={2}
                >
                    
                    <GridItem rowSpan={4} colSpan={1}>
                        <Sidebar />
                    </GridItem>
                    <GridItem colSpan={4} rowSpan={1}>
                        <Flex width={500} p={8}>
                            <Heading fontSize={'2rem'}>Make Payment</Heading>
                        </Flex>
                        
                    </GridItem>
                    <GridItem colSpan={4} rowSpan={1}>
                        <Flex direction='column' justify='flex-start'>
                            <SearchBar handle={handleSelected} />
                        </Flex>
                    </GridItem>
                    <GridItem colSpan={3} rowSpan={1}>
                    <Flex bg={'primary.snow'} borderRadius={'lg'} p={4} direction={'column'}>
                            {selected !== '' &&
                                <ShowPaymentDetails reciever={selected}/>
                            }
                    </Flex>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1} ml="-75px" >

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

/*
<GridItem colSpan={1} rowSpan={1} ml="-75px">
                        <Flex bg={'primary.snow'} ml={6} borderRadius={'lg'} p={4} direction={'column'}
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

*/