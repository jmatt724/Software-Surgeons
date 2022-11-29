import { Button, Divider, Flex, Grid, GridItem } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import BucketCard from './BucketCard'
import { v4 as uuid } from 'uuid';
import Card from './Card';
import CreateBucketPopover from './CreateBucketPopover';
import { useUser } from '../../context/UserContext';
import { getUser, updateField } from '../../firebase/api';
import { useAuth } from '../../context/AuthContext';

function BucketsLayout() {
  // maybe start with an initial bucket containing all of our budget balance
  // then we can distribute the balance between our buckets
  const { user, setCurrentUser } = useUser()
  const [buckets, setBuckets] = useState([])
  const { currentUser } = useAuth()
  const [expanded, setExpanded] = useState(false)
  
  const fuckyou = []

  useEffect(() => {
    // on page refresh GET the current user from database
    const curr = getUser(currentUser.uid)
    curr.then((value) => {
        setCurrentUser(value) // after promise resolves, we setCurrentUser to be the authenticated user
    })
  }, [])

  const handleTitleChange = (index, newTitle) => {
    setBuckets((prev) => {
      prev[index].category=newTitle
      return prev
    })
  }
  useEffect(() =>{
    setBuckets(user.buckets)
  }, [user.buckets])

  const handleRemoveBucket = (id) => {
    updateField(user, "buckets", user.buckets.filter((bucket) => bucket.id!==id)).then(() =>{
      const curr = getUser(user.userID)
      curr.then((value) => {
        setCurrentUser(value)
      })
    })
  }

  const handleNewBucket = (newBucket) => {
    // handle adding a bucket
    // fields: category, amount, maximum | enter percentage from balance (and show the amount that would account to): default value => 2.5%
    /*setBuckets((prev) => {
      return [ newBucket, ...prev ]
    })*/
    updateField(user, "buckets", [...user?.buckets, newBucket]).then(() => {
        const curr = getUser(user.userID)
        curr.then((value) => {
          setCurrentUser(value)
        })
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