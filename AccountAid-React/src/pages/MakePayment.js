import { Flex, Grid, GridItem, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SearchBar from '../components/MakePayments/SearchBar'
import ShowPaymentDetails from '../components/MakePayments/ShowPaymentDetails'
import PageLayout from '../components/PageLayout'
import Sidebar from '../components/sidebar/Sidebar'
import { useDb } from '../context/DbContext'
import { getUser } from '../firebase/api'

function MakePayment() {
    const [selected, setSelected] = useState('')
    
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
        </Flex>
        </PageLayout>
    )
}

export default MakePayment