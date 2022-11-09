import React from 'react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    useDisclosure,
} from '@chakra-ui/react'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useUser } from '../../../context/UserContext';

function RemoveCardAlert({ cardID }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { removeCard } = useUser()
    const cancelRef = React.useRef()
  
    return (
      <>
        <Menu>
            <MenuButton>
            <BsThreeDotsVertical size={'25px'}/>
            </MenuButton>
            <MenuList>
                <MenuItem onClick={onOpen}>Remove Card</MenuItem>
            </MenuList>
        </Menu>
        
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          motionPreset='slideInBottom'
          isCentered
          size={'xl'}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='2rem' fontWeight='bold'>
                Remove Card
              </AlertDialogHeader>
  
              <AlertDialogBody fontSize={'1rem'}>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='red' onClick={() => { removeCard(cardID); onClose(); }} ml={3}>
                  Remove
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
}

export default RemoveCardAlert