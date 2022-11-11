import React from 'react'
import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton,
    MenuList
} from '@chakra-ui/react'
import NavHoverBox from './NavHoverBox'
import HoverTooltip from './HoverTooltip'

function NavItem({ navSize, title, icon, active, description, navigation, handleNav }) {
    return (
        <HoverTooltip label={title} disabled={(navSize==='large')}>
        <Flex
            mt={30}
            flexDir="column"
            w="100%"
            align={navSize==='small' ? 'center' : 'flex-start'}
        >
            <Menu placement="right">
                <Link
                    backgroundColor={active && "primary.secondary"}
                    p={3}
                    borderRadius={8}
                    _hover={{ textDecor: 'none', bg: 'primary.selected' }}
                    w={navSize==='large' && "100%"}
                    onClick={() => handleNav(navigation)}
                >
                    <MenuButton w="100%">
                        <Flex 
                            align='center'
                            justify='flex-start'
                        >
                            <Icon as={icon} fontSize="xl" color={"primary.dark"}/>
                            <Text ml={5} display={navSize==='small' ? 'none' : 'flex'}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link> 
                {/*
                <MenuList
                    py={0}
                    border="none"
                    w="150"
                    h="50"
                    ml={5}
                >
                    <NavHoverBox title={title}/>
                </MenuList>    
                */}
            </Menu>
            
        </Flex>
        </HoverTooltip>
    )
}

export default NavItem