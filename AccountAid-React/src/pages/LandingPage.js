import React, { useRef } from 'react'
import { Box, Divider, Flex, Heading, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react"
import NavBar from '../components/LandingPage/NavBar';
import { FEATURE_DATA, PRODUCT_DESCRIPTION, PRODUCT_VISION, PRODUCT_CUSTOMERS, DEVELOPER_CARD_DATA } from '../data/landingPageData';
import { useNavigate } from 'react-router-dom';
import AdVideoModal from '../components/ad_video/AdVideoModal';
import DeveloperCard from '../components/LandingPage/DeveloperCard';


function LandingPage() {
    const scrollRef = useRef(null)
    const executeScroll = () => scrollRef.current.scrollIntoView()
    const navigate = useNavigate()

    const FeatureBox = ({ id, label, details, index }) => {
        return (
            <>
                <Flex key={index} bg={'white'} width={'100%'} height={{ sm: 200, md: 275, lg: 400, xl: 400 }} justify={'space-between'} id={id}
                    align='center' direction={{ sm: 'column', md: 'column', lg: 'row', xl: 'row' }}
                >    
                    <Flex direction={{ sm: 'row', md: 'row', lg: 'column' }}>
                        <Heading fontSize={'2.5rem'} m={6} ml={12} color={'black'}>{label}</Heading>
                    </Flex>
                    <Flex width={{ sm: '100%', md: '100%', lg: 1000 }} justify={'center'} align={'center'} p={4} mr={{ lg: 6, xl: 6 }} >
                        <Heading fontSize={{ sm: '1rem', md: '1.5rem', lg: '1.75rem' }} textAlign={{ sm: 'left', md: 'left', lg: 'center', xl: 'center' }} color={'black'}>{details}</Heading>
                    </Flex>
                </Flex>
                <Divider color={'black'} size={'md'} />
            </>
        )
    }

    return (
      <Stack borderRadius="lg" pt={2} pb={20} overflowX='hidden'>
        <Box position={'sticky'} top={0} width={'100%'} zIndex={6}>
            <NavBar update={executeScroll}/>
        </Box>
        <Flex color={'white'} bg={'primary.main'} width={'100%'} height={525} justify={'flex-start'} 
            align='center'
            backgroundImage={process.env.PUBLIC_URL+"images/bg-img-1.jpg"} 
            backgroundRepeat={'repeat-x'} 
            backgroundSize={'1000px 525px'}
        >
            <Flex direction={'column'} height={300} ml={{ sm: 85, md: 125, lg: 10 }} width={{ sm: '500px', md: '100%' }} justify={{ sm: 'center', md: 'left' }} align={{ sm: 'center', md: 'start' }}>
                <Flex>
                    <Heading fontSize={'5rem'} m={{ sm: 2, md: 6 }}>Welcome!</Heading>
                </Flex>
                <Flex>
                    <Heading fontSize={'4rem'} m={{ sm: 2, md: 6 }}>Take Charge of your Finances!</Heading>
                </Flex>
            </Flex>
        </Flex>
        <Flex  bg={'white'} width={'100%'} height={{ sm: 500, md: 375, lg: 350 }} justify={'center'} align={'center'} direction={{ sm: 'column', md: 'column', lg: 'row' }}>
            <Flex width={{ sm: '100%', md: '100%', lg: 350 }} height={'100%'} justify={'center'} align='center'>
                <Heading fontSize={{ sm: '3rem', md: '3rem', lg: '2rem'}} ml={{ lg: 6 }}>What is AccountAid?</Heading>
            </Flex>
            <Flex height={{ sm: 50, md: 50, lg: 250 }} justify={'center'} align={'center'}>
                <Divider orientation={{ sm: 'horizontal', md: 'horizontal', lg: 'vertical' }} width={{ sm: 800, md: 800, lg: 1 }} height={{ sm: 1, md: 1, lg: 275 }} bg={'primary.secondary'} borderRadius={'md'} ml={2}/>
            </Flex>
            <Flex width={{ sm: '100%', md: '100%', lg: '80%' }} height={{ lg: 300 }} mt={6} ml={8} bg={'white'} align='center' textAlign={{ sm: 'center', md: 'center', lg: 'left' }} pr={10}>
                <Text fontSize={{ sm: '1.25rem', md: '1.25rem', lg: '1.25rem', xl: '1.5rem' }} fontWeight={'semibold'}>{PRODUCT_DESCRIPTION}</Text>
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
        <Flex bg={'primary.dark'} width={'100%'} height={{ md: 400, lg: 400, xl: 400 }} justify={'flex-start'} direction={{ sm: 'column', md: 'column', lg: 'row' }} >
            <Flex bg={'primary.main'} width={{ sm: '100%', md: '100%', lg: 500 }} height={{ sm: 125, md: 125, lg: '100%' }} align='center' justify='center' borderRadius={'md'}>
                <Heading fontSize={'3rem'} color='primary.snow'>Our Vision</Heading>
            </Flex>
            <Flex bg={'primary.dark'} width={{ sm: '100%', md: '100%', lg: 925}} align='center' justify='center' ml={{ sm: 2, md: 2, lg: 10}} p={{ sm: 10, md: 6, lg: 0 }}>
                <Text fontSize={{ sm: '1.5rem', md: '1.5rem', lg: '1.75rem', xl: '1.75rem'}} color='white' textAlign={{ sm: 'center', md: 'center', lg: 'left' }} ml={{ sm: 0, md: 0, lg: 10}}>{PRODUCT_VISION}</Text>
            </Flex>
        </Flex>
        <Flex bg={'primary.dark'} width={'100%'}  height={{ md: 550, lg: 600, xl: 400 }} justify={'flex-end'} direction={{ sm: 'column', md: 'column', lg: 'row' }} >
            <Flex bg={'primary.dark'} width={{ sm: '100%', md: '100%', lg:'100%', xl: 1200 }} align='center' justify='center' mr={{ sm: 0, md: 0, lg: 0 }} p={{ sm: 10, md: 10, lg: 0 }}>
                <Text fontSize={{ sm: '1.4rem', md: '1.5rem', lg: '1.4rem', xl: '1.75rem'}} color='white' textAlign={{ xl: 'right' }} ml={{ lg: 4, xl: 0 }} mr={{ lg: 0, xl: 10 }}>{PRODUCT_CUSTOMERS}</Text>
            </Flex>
            <Flex bg={'primary.secondary'} width={{ sm: '100%', md: '100%', lg: 600, xl: 500 }} height={{ sm: 125, md: 125, lg: '100%' }} align='center' justify='center' borderRadius={'md'}>
                <Heading fontSize={'3rem'} color='#f5fefd' ml={{ lg: 20, xl: 0 }}>Potential Customers</Heading>
            </Flex>
        </Flex>
        <Flex bg={'primary.main'} width={'100%'} direction={'column'} ref={scrollRef}>
            <Flex justify={'center'} width={'100%'} mt={6}>
                <Heading fontSize={'3rem'} mb={10} color={'primary.snow'}>Meet the Developers</Heading>
            </Flex>
            <Wrap justify='center' align='center' mt={6} spacing={20} height={{ sm: 705, md: 705, lg: 705, xl: 305 }}>
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
            <Wrap justify='center' align='center' mt={6} spacing={20} height={{ sm: 705, md: 705, lg: 705, xl: 305 }}>
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
        <Flex direction={'column'}>
            <Text
                color='blue.400' 
                onClick={() => navigate('/artifacts')} 
                _hover={{ cursor: 'pointer' }}
                fontSize={'1.25rem'}
                m={8}
            >
                Artifacts
            </Text>
            <AdVideoModal />
        </Flex>
      </Stack>
    )
}

export default LandingPage