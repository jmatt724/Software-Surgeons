import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import CalendarWindow from '../components/Calendar/CalendarWindow'
import PageLayout from '../components/PageLayout'
import Sidebar from '../components/Sidebar/Sidebar'

function Schedule() {
  return (
    <PageLayout>
        <Grid
            h='100vh'
            w='100vw'
            templateRows='repeat(4, 1fr)'
            templateColumns='repeat(6, 1fr)'
            gap={2}
            p={2}
        >
                <GridItem rowSpan={4} colSpan={1}>
                    <Sidebar />
                </GridItem>
                <GridItem rowSpan={4} colSpan={5}>
                    <CalendarWindow />
                </GridItem>
        </Grid>
        </PageLayout>
  )
}

export default Schedule