import { Avatar, Divider, Flex, Heading, IconButton, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiFillHome, AiOutlineMenu, AiFillCreditCard, AiOutlineCalendar, AiFillRobot } from 'react-icons/ai'
import { MdPayments } from 'react-icons/md'
import { FaRobot } from 'react-icons/fa'
import NavItem from './NavItem'
import { useUser } from '../../context/UserContext'
import { useLocation, useNavigate } from 'react-router-dom'

function Sidebar() {
    const [navSize, setNavSize] = useState("large")
    const [current, setCurrent] = useState('')
    const { user } = useUser()
    const route = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        setCurrent(route.pathname)
    }, [])
    

    const handleNav = (nav) => {
        navigate(nav)
        //setNavSize('small')
    }

    return (
        <Flex
            pos="sticky"
            left="5"
            h="95vh"
            marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0,0,0,0.05)"
            borderRadius={navSize==='small' ? "15px" : "30px"}
            w={navSize === 'small' ? "75px" : "200px"}
            flexDir="column"
            justifyContent="space-between"
            ml={2}
        >
            <Flex
                p="5%"
                flexDir="column"
                align={navSize==='small' ? 'center' : "flex-start"}
                as="nav"
            >
                <IconButton 
                    bg="none"
                    mt={5}
                    _hover={{ bg: 'none' }}
                    icon={<AiOutlineMenu />}
                    onClick={() => {
                        navSize==='small' ? setNavSize("large") : setNavSize("small")
                    }}
                />
                <NavItem navSize={navSize} title='Dashboard' icon={AiFillHome} navigation={'/dashboard'} active={current==='/dashboard'} handleNav={handleNav}/>
                <NavItem navSize={navSize} title='Make Payment' icon={MdPayments} navigation={'/make-payment'} active={current==='/make-payment'} handleNav={handleNav}/>
                <NavItem navSize={navSize} title='Budget Buddy' icon={FaRobot} navigation={'/budget-buddy'} active={current==='/budget-buddy'} handleNav={handleNav}/>
            </Flex>
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                align={navSize==='small' ? "center" : "flex-start"}
                mb={4}
            >
                <Divider display={navSize==='small' ? 'none' : 'flex'}/>
                <Flex mt={4} align="center">
                    <Avatar size="sm" ml={navSize==='large' && 2}/>
                    <Flex flexDir="column" ml={4} display={navSize==='small' ? 'none' : 'flex'}>
                        <Heading as="h3" size="sm">{`${user.firstName} ${user.lastName}`}</Heading>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Sidebar