import { Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { useUser } from '../../../context/UserContext'
import CreditCard from '../credit_cards/CreditCard'

function YourCards() {
    const { user } = useUser()
    const cards = user.cards
    const cardCount = cards.length

    return (
        <Flex height={'100%'} width={'100%'} p={2} direction={'column'}>
            <Heading>{`Your Cards (${cardCount})`}</Heading>
            <Flex direction={'row'}>
                {cards.length === 0 
                ? <Button mt={8}>Add a Card</Button>
                : cards.map((card) => 
                    <CreditCard 
                        cardID={card.cardID}
                        cardName={card.cardName}
                        cardNumber={card.cardNumber}
                        amount={card.amount}
                        expiration={card.expiration} 
                    />
                )}
            </Flex>
        </Flex>
    )
}

export default YourCards