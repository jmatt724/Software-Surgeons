import { useNavigate } from 'react-router-dom'
import React, { useEffect, useRef } from 'react'
import { Button, Flex, Heading, requiredChakraThemeKeys } from '@chakra-ui/react'
import ArchCategory from '../components/Architecture/ArchCategory'
import { PAGES } from '../data/constants'
import design from '../image/design.png'

function Architecture(){
    const scrollRef = useRef(null)
    const executeScroll = () => scrollRef.current.scrollIntoView()
    const navigate = useNavigate()

    useEffect(() => {
        executeScroll()
    }, [])

    return(
        <Flex bg={'primary.snow'} width={'98vw'} height={'100%'} pb={10} overflowX={{ sm: 'auto', md: 'auto', lg: 'auto', xl: 'auto' }}>
            <Flex direction='column'>
            <Flex width={'100%'} height={200} ref={scrollRef} direction='column'>
                <Flex direction={'row'} m={6} ml={10}>
                    <Heading>Architecture</Heading>
                </Flex>
            <Button width={150} height={50} ml={10}
                onClick={() => navigate('/')}
                bg={'primary.main'}
                color={'primary.snow'}
            > Go Back </Button>
        </Flex>
        
        <Flex ml={10}>
            <ArchCategory category = {'App Pages'} label = {'Page'} data = {PAGES}/>
        </Flex>
        <Flex justify='flex-start' align='center' mt={10}>
            <img src={design} />
        </Flex>
        </Flex>
        </Flex>
    )
}

export default Architecture