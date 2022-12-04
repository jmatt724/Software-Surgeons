import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
    Heading,
    Flex,
  } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useUser } from '../../../context/UserContext'
import SortTransaction from './SortTransactions'
import TransactionCard from './TransactionCard'
import { sortTransaction } from './sortingTransactions';

function ViewAll() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { user, getTransactionsArray } = useUser()
    const transactions = getTransactionsArray()
    const currentSort = user.sortState
  
    return (
      <>
        <Flex 
            height={35}
            width={65}
            justify={'center'}
            align={'center'}
            _hover={{ cursor: 'pointer', bg: 'gray.200' }}
            mr={2}
            onClick={onOpen}
        >
            <Text color={'gray.500'} fontSize={'1rem'} fontWeight={'medium'}>See All</Text>
        </Flex>
  
        <Modal onClose={onClose} size={'full'} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
                <Flex justify='space-between'>
                    <Heading fontSize={'2rem'}>
                        My Transactions
                    </Heading>
                    {(!transactions || transactions.length!==0) &&
                    <Flex mt={6} mr={6}>
                        <SortTransaction 
                          currentSort={currentSort}
                        />
                    </Flex>
                    }
                </Flex>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            
                <Flex height={'100%'} bg={'primary.snow'} borderRadius={'md'} p={4} direction={'column'} boxShadow={'2px 4px 10px #818181'}>
                    {transactions.map((transaction, index) => 
                        <TransactionCard
                            key={transaction.paymentID}
                            category={transaction.category}
                            date={transaction.date}
                            amount={transaction.amount}
                            recipiant={transaction.recipiant}
                            sender={transaction.sender}
                            isAll={true}
                        />
                    )}
                  </Flex>
                
            
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}
export default ViewAll