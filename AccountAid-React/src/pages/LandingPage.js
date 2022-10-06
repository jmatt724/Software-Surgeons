import React, { useRef } from 'react'
import { Box, Divider, Flex, Heading, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react"
import NavBar from '../components/NavBar';
import { FEATURE_DATA, PRODUCT_DESCRIPTION, PRODUCT_VISION, PRODUCT_CUSTOMERS, DEVELOPER_CARD_DATA } from '../data/constants';
import DeveloperCard from '../components/DeveloperCard';

function LandingPage() {
    const scrollRef = useRef(null)
    const executeScroll = () => scrollRef.current.scrollIntoView()

    const FeatureBox = ({id, label, details, index}) => {
        return (
            <>
                <Flex key={index} bg={'white'} width={'100%'} height={400} justify={'space-between'} id={id}
                    align='center'
                >    
                    <Flex direction={'column'}>
                        <Heading fontSize={'2.5rem'} m={6} ml={12} color={'black'}>{label}</Heading>
                    </Flex>
                    <Flex width={900} justify={'center'} align={'center'} p={4} mr={6}>
                        <Heading fontSize={'1.75rem'} textAlign='center' color={'black'}>{details}</Heading>
                    </Flex>
                </Flex>
                <Divider color={'black'} size={'md'} />
            </>
        )
    }

    return (
      <Stack borderRadius="lg" pt={2} pb={20}>
        <Box position={'sticky'} top={0} width={'100%'} zIndex={6}>
            <NavBar update={executeScroll}/>
        </Box>
        <Flex color={'white'} bg={'primary.main'} width={'100%'} height={525} justify={'flex-start'} 
            align='center'
            backgroundImage={process.env.PUBLIC_URL+"images/bg-img-1.jpg"} 
            backgroundRepeat={'repeat-x'} 
            backgroundSize={'1000px 525px'}
        >
            <Flex direction={'column'} height={300} ml={125}>
                <Flex>
                    <Heading fontSize={'5rem'} m={6}>Welcome!</Heading>
                </Flex>
                <Flex>
                    <Heading fontSize={'4rem'} m={6}>Take Charge of your Finances!</Heading>
                </Flex>
            </Flex>
        </Flex>
        <Flex  bg={'white'} width={'100%'} height={350} justify={'center'} align={'center'} direction={'row'}>
            <Flex width={350} height={'100%'} justify={'center'} align='center'>
                <Heading fontSize={'2rem'} ml={2}>What is AccountAid?</Heading>
            </Flex>
            <Flex height={250} justify={'center'} align={'center'}>
                <Divider orientation='vertical' width={1} bg={'primary.secondary'} borderRadius={'md'} ml={2}/>
            </Flex>
            <Flex width={'80%'} height={300} mt={6} ml={8} bg={'white'} align='center' textAlign={'left'} pr={10}>
                <Text fontSize={'1.5rem'} fontWeight={'semibold'}>{PRODUCT_DESCRIPTION}</Text>
            </Flex>
        </Flex>
        <Divider color={'black'} size={'md'}/>
        <Flex bg={'primary.dark'} width={'100%'} height={200} justify={'center'} align={'center'} backgroundImage={process.env.PUBLIC_URL+"images/bg-img-6.jpg"} backgroundSize={'2100px 600px'} backgroundRepeat={'no-repeat'} backgroundPosition={'center'}>
            <Heading fontSize={'2.5rem'} m={6} color={'black'}>Key Features</Heading>
        </Flex>
        {FEATURE_DATA.map((item, index) => 
            <FeatureBox
                key={item.id}
                id={item.id}
                index={index}
                label={item.label}
                details={item.details}
                image={"images/budget-img.jpg"}
            />
        )}
        <Flex bg={'primary.dark'} width={'100%'} height={400} justify={'flex-start'} direction={'row'} >
            <Flex bg={'primary.main'} width={500} align='center' justify='center' borderRadius={'md'}>
                <Heading fontSize={'3rem'} color='primary.snow'>Our Vision</Heading>
            </Flex>
            <Flex bg={'primary.dark'} width={925} align='center' justify='center' ml={10}>
                <Text fontSize={'1.75rem'} color='white' textAlign='left' ml={10}>{PRODUCT_VISION}</Text>
            </Flex>
        </Flex>
        <Flex bg={'primary.dark'} width={'100%'} height={400} justify={'flex-end'} direction={'row'}>
            <Flex bg={'primary.dark'} width={1200} align='center' justify='center' mr={10}>
                <Text fontSize={'1.75rem'} color='white' textAlign='right' mr={10}>{PRODUCT_CUSTOMERS}</Text>
            </Flex>
            <Flex bg={'primary.secondary'} width={500} align='center' justify='center' borderRadius={'md'}>
                <Heading fontSize={'3rem'} color='#f5fefd'>Potential Customers</Heading>
            </Flex>
        </Flex>
        <Flex bg={'primary.main'} width={'100%'} direction={'column'} ref={scrollRef}>
            <Flex justify={'center'} width={'100%'} mt={6}>
                <Heading fontSize={'3rem'} mb={10} color={'primary.snow'}>Meet the Developers</Heading>
            </Flex>
            <Wrap justify='center' align='center' mt={6} spacing={20} height={375}>
                {DEVELOPER_CARD_DATA.filter((__,index) => index <= 1).map((card, index) => 
                    <WrapItem key={index}>
                        <DeveloperCard
                            name={card.name}
                            title={card.title}
                            description={card.description}
                            img={card.img}
                        />
                    </WrapItem>
                )}
            </Wrap>
            <Wrap justify='center' align='center' mt={6} spacing={20} height={375}>
                {DEVELOPER_CARD_DATA.filter((__,index) => index >= 2).map((card, index) => 
                    <WrapItem key={index}>
                        <DeveloperCard
                            name={card.name}
                            title={card.title}
                            description={card.description}
                            img={card.img}
                        />
                    </WrapItem>
                )}
            </Wrap>
        </Flex>
      </Stack>
    )
}

export default LandingPage

/*
    cool logic to scroll to a certain part of page on click

    const myRef = useRef(null)
    const executeScroll = () => myRef.current.scrollIntoView()
    ref={myRef}
    <Button onClick={executeScroll}>Scroll Down</Button>
*/