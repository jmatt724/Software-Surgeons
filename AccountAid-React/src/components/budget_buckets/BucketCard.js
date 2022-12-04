import { Box, Button, ButtonGroup, Divider, Flex, FormControl, FormLabel, Grid, GridItem, Heading, IconButton, Input, Popover, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverTrigger, Progress, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import {FaRegEdit} from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai'

function BucketCard({ id, index, title, amount, maximum, handleTitle, handleDelete, payments }) {
    const { onOpen, onClose, isOpen } = useDisclosure()
    const firstFieldRef = React.useRef(null)
    const [titleState, setTitleState] = useState('')

    useEffect(() => {
        setTitleState(title)
    }, [title])

    const handleInputChange = (e) => {
        //console.log('ref: ',firstFieldRef.current.value)
        //if(firstFieldRef.current.value)
        //setCategory(firstFieldRef.current.value)
    }

    const handleSave = () => {
        handleTitle(index, firstFieldRef.current.value)
        setTitleState(firstFieldRef.current.value)
        onClose()
    }

    const TextInput = React.forwardRef((props, ref) => {
        return (
          <FormControl>
            <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
            <Input ref={ref} id={props.id} {...props} />
          </FormControl>
        )
    })
    const Form = ({ firstFieldRef, onCancel }) => {
        return (
          <Stack spacing={4}>
            <TextInput
              label='Rename Bucket'
              id='bucket-category'
              ref={firstFieldRef}
              defaultValue={titleState}
            />
            <ButtonGroup display='flex' justifyContent='flex-end'>
              <Button variant='outline' onClick={onCancel}>
                Cancel
              </Button>
              <Button isDisabled={(!firstFieldRef.current || firstFieldRef.current.value==='')} colorScheme='teal' onClick={() => handleSave() }>
                Save
              </Button>
            </ButtonGroup>
          </Stack>
        )
    }

    const getPercentSpent = () => {
        const percentage = (parseFloat(amount)/parseFloat(maximum))*100
        return percentage.toFixed(2)
    }

    const getProgressColor = (percent) => {
        if(percent>60 && percent < 80){
            return 'orange'
        } else if(percent >=80){
            return 'red'
        } else {
            return 'blue'
        }
    }

    const percentSpent = getPercentSpent()

    return (
        <Card
            width={350}
            height={150}
        >
            <Grid
                h='100%'
                w='100%'
                templateRows='repeat(3, 1fr)'
                templateColumns='repeat(3, 1fr)'
                gap={2}
                p={2}
            >
            <GridItem colSpan={3} rowSpan={1}>
                <Flex justify={'space-between'}>
                    <Flex>
                        <Box display='inline-block' mr={3}>
                            <Text fontSize={'1.25rem'} mb={1}>
                                {titleState}
                            </Text>
                        </Box>
                        <Popover
                            isOpen={isOpen}
                            initialFocusRef={firstFieldRef}
                            onOpen={onOpen}
                            onClose={onClose}
                            placement='right'
                            closeOnBlur={false}
                        >
                        <PopoverTrigger>
                            <IconButton size='sm' icon={<FaRegEdit />} />
                        </PopoverTrigger>
                        <PopoverContent p={5}>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <Form firstFieldRef={firstFieldRef} onCancel={onClose} />
                        </PopoverContent>
                        </Popover>
                        
                    </Flex>
                    <Flex align='center' justify='center' position='relative' bottom={1}>
                        <IconButton
                            bg="none"
                            color='primary.error'
                            opacity={0.8}
                            _hover={{ cursor: 'pointer', opacity: 1 }}
                            icon={<AiFillCloseCircle size={22}/>}
                            onClick={() => handleDelete(id)}
                        >
                        </IconButton>
                    </Flex>
                </Flex>
                <Divider />
            </GridItem>
            <GridItem colSpan={2} rowSpan={1}>
                <Flex justify='flex-start' align='center' p={1} mt={1}>
                    <Flex direction={'row'} align='center' justify='center'>
                        <Text fontSize={'12px'} >{`Spent`}</Text>
                        <Heading fontSize={'1.5rem'} ml={2}>{`$${amount}`}</Heading> 
                    </Flex>
                    <Flex direction={'column'}>
                        <Text fontSize={'1rem'} ml={6}>{`${percentSpent}%`}</Text>
                    </Flex>
                    
                    
                </Flex>
            </GridItem>
            <GridItem colSpan={1} rowSpan={1}>
                <Flex justify='flex-start' align='center' p={1}>
                
                <Flex direction={'column'} align='center'>
                        <Heading fontSize={'1.25rem'} fontWeight={'normal'} color='black.400'>{`$${maximum}`}</Heading>
                        <Text fontSize={'10px'}>{`Total`}</Text>
                </Flex>
                    
                </Flex>
            </GridItem>
            <GridItem colSpan={3} rowSpan={1} p={1}>
                <Progress value={percentSpent} size='xs' colorScheme={getProgressColor(percentSpent)} borderRadius={'2px'}/>
            </GridItem>
        </Grid>
        </Card>    
    )
}

export default BucketCard