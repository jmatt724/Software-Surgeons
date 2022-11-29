import React, { useEffect, useRef, useState } from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    Portal,
    Flex,
    Text,
    Grid,
    GridItem,
    FormControl,
    Button,
    Stack,
    Checkbox,
  } from '@chakra-ui/react'
import ControlledInput from './ControlledInput'
import { v4 as uuid } from 'uuid';
import { useUser } from '../../context/UserContext';

function CreateBucketPopover({ children, isExpanded, setIsExpanded, category, currentYear, handleChange }) {
  const [cat, setCat] = useState('New Bucket')
  const [maximum, setMaximum] = useState('0.00')
  const [percent, setPercent] = useState('2.5')
  const [isPercentage, setIsPercentage] = useState(false)
  const { user } = useUser()

  const handleSubmit = () => {
    // submit
    const newBucket = {
      id: `bucket-${uuid()}`,
      category: cat,
      amount: '0.00',
      maximum: maximum,
    }
    handleChange(newBucket)
    setIsExpanded(false)
  }

  const formatInput = (input) => {
    console.log(input)
    //setAmount(`$${input}`)
  }

  const handlePercentage = () => {
    if(percent){
      const total = parseFloat(user.balance)*(parseFloat(percent)/100)
      setMaximum(`${parseFloat(total).toFixed(2)}`)
    }
  }

  useEffect(() => {
    if(percent===''){
      setPercent('')
    } else {
      handlePercentage()
    }
  },[percent])

  useEffect(() => {
    if(isPercentage){
      handlePercentage()
    } else {
      setMaximum('0.00')
    }
  }, [isPercentage])
    
  return (
    <>
    <Popover isOpen={isExpanded} placement='bottom-start'>
        <PopoverTrigger>
            {children}
        </PopoverTrigger>
        <Portal>
            <PopoverContent width={400}>
                <Grid
                    h={425}
                    w={400}
                    templateRows='repeat(5, 1fr)'
                    templateColumns='repeat(3, 1fr)'
                    gap={1}
                    p={2}
                    mt={4}
                    overflowX={'auto'}
                >
                  <GridItem colSpan={3}>
                    <ControlledInput
                      value={cat}
                      handleChange={(e) => setCat(e.target.value)}
                      label={'Category'}
                      type={'category'}
                    />
                  </GridItem>
                  <GridItem colSpan={3} rowSpan={1}>
                    <Flex direction='column'>
                      <Flex>
                        <Checkbox value={isPercentage} isChecked={isPercentage} onChange={() => setIsPercentage(!isPercentage)}>Percentage</Checkbox>
                      </Flex>
                      <ControlledInput
                        isDisabled={(user.balance === "0.00") && !isPercentage}
                        onBlur={() => { (percent==='') && setPercent('2.5') }}
                        width={'100%'}
                        value={percent}
                        handleChange={(e) => setPercent(e.target.value)}
                        type={'percent'}
                      />
                    </Flex>
                  </GridItem>
                  <GridItem rowSpan={1} colSpan={3}>
                    <ControlledInput
                        isDisabled={isPercentage}
                        value={maximum}
                        handleChange={(e) => setMaximum(e.target.value)}
                        onBlur={() => (maximum==='') && setMaximum('0.00')}
                        label={'Maximum'}
                        type={'maximum'}
                      />
                  </GridItem>
                  <GridItem rowSpan={1}>
                    <Button onClick={handleSubmit} isDisabled={(maximum==='0.00')}>
                      Create
                    </Button>
                  </GridItem>
                </Grid>
                
            </PopoverContent>
        </Portal>
    </Popover>
    </>
  )
}

export default CreateBucketPopover