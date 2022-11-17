import { Button, Divider, Flex, Grid, GridItem } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import BucketCard from './BucketCard'
import { v4 as uuid } from 'uuid';
import Card from './Card';
import CreateBucketPopover from './CreateBucketPopover';
import { useUser } from '../../context/UserContext';

function BucketsLayout() {
  // maybe start with an initial bucket containing all of our budget balance
  // then we can distribute the balance between our buckets
  const [buckets, setBuckets] = useState([
    {id: `bucket-${uuid()}`, category: 'Balance', amount: '265.00', maximum: '1200.00'},
    {id: `bucket-${uuid()}`, category: 'Bills', amount: '3000.00', maximum: '5500.00'},
    {id: `bucket-${uuid()}`, category: 'Groceries', amount: '645.00', maximum: '1000.00'},
    {id: `bucket-${uuid()}`, category: 'Entertainment', amount: '232.00', maximum: '600.00'},
    {id: `bucket-${uuid()}`, category: 'Rent', amount: '527.00', maximum: '1100.00'},
    {id: `bucket-${uuid()}`, category: 'Car Payment', amount: '0.00', maximum: '236.00'},
  ])

  const [expanded, setExpanded] = useState(false)
  

  const handleTitleChange = (index, newTitle) => {
    setBuckets((prev) => {
      prev[index].category=newTitle
      return prev
    })
  }

  const handleRemoveBucket = (id) => {
    setBuckets((prev) => 
      prev.filter((bucket) => bucket.id!==id)
    )
  }

  const handleNewBucket = (newBucket) => {
    // handle adding a bucket
    // fields: category, amount, maximum | enter percentage from balance (and show the amount that would account to): default value => 2.5%
    setBuckets((prev) => {
      return [ newBucket, ...prev ]
    })
  }

  return (
    <Card h='95%' w='95%' mt={6}>
      <Grid
        h='100%'
        width={'100%'}
        templateRows='repeat(4, 1fr)'
        templateColumns='repeat(2, 1fr)'
        gap={2}
        pl={20}
        pb={10}
        pt={6}
        bg={'primary.lightBlue'}
        borderLeftRadius={'inherit'}
        overflowX={'auto'}
    >
      {buckets.map((bucket, index) => 
        <GridItem key={bucket.id} mt={10}>
          <BucketCard id={bucket.id} index={index} title={bucket.category} amount={bucket.amount} maximum={bucket.maximum} handleChange={handleTitleChange} handleDelete={handleRemoveBucket}/>
        </GridItem>
      )}
    </Grid>
    <Divider orientation='vertical'/>
    <Flex width={225} height={'100%'} justify='center' align={'flex-start'}>
        <CreateBucketPopover handleChange={handleNewBucket} isExpanded={expanded} setIsExpanded={setExpanded}>
          <Button mt={10} onClick={() => setExpanded(!expanded)}>
            New Bucket
          </Button>
        </CreateBucketPopover>
      </Flex>
    </Card>
  )
}

export default BucketsLayout