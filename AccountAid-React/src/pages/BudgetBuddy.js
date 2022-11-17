import { Box, Flex, Grid, GridItem, Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import BucketsLayout from '../components/budget_buckets/BucketsLayout';
import PageLayout from '../components/PageLayout';
import Sidebar from '../components/sidebar/Sidebar';

function BudgetBuddy() {
    
    return (
        <PageLayout>
        <Flex overflow={'hidden'}>
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
                    <BucketsLayout />
                </GridItem>
        </Grid>
        </Flex>
        </PageLayout>
    )
}

export default BudgetBuddy