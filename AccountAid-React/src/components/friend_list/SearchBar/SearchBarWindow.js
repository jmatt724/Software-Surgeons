import { Divider, Flex, Heading, IconButton, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FRIENDS_LIST, FRIEND_REQUESTS, PENDING_FRIENDS } from '../friendsData'
import DisplayFriends from '../DisplayFriends/DisplayFriends'
import DisplayPending from '../DisplayFriends/DisplayPending'
import DisplayRequests from '../DisplayFriends/DisplayRequests'
import CardBase from '../FriendCard/CardBase'
import FriendCard from '../FriendCard/FriendCard'
import PendingCard from '../FriendCard/PendingCard'
import RequestCard from '../FriendCard/RequestCard'
import SearchBar from './SearchBar'
import { useUser } from '../../../context/UserContext'
import { getAllUserIDS, getUsernames } from '../../../firebase/api'
import DisplaySearchResults from '../../feature_components/make_payments/DisplaySearchResults'

function SearchBarWindow({ handleClose }) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Friends')
  const [allUsers, setAllUsers] = useState()
  const [results, setResults] = useState([])
  const [usernames, setUsernames] = useState('')
  const [Pendingrequests, setPendingResults] = useState('')


  useEffect(() => {
    getUsernames().then((value) => {
      setUsernames(value)
    })
    console.log('GET USERS: ',usernames)
  }, [])
  const tempResult = []
  const searchUsers = (input) => {
          usernames.forEach((username, index) => {
            if(username.username !== user.username){
              if(username.username.toLowerCase().startsWith(input.toLowerCase())){
                tempResult.push(username)
              }  
              else if(input===''){
                tempResult = []
              }
            }
          })
      return tempResult
    }

          useEffect(() => {
            if(search!=='') {
              const result = searchUsers(search)
              setResults(result)
            } else {
              setResults([])
            }
          }, [search])
   /*
  const [input, setInput] = useState('')
    const [results, setResults] = useState([])
    const [allUsers, setAllUsers] = useState([]);
    const { user } = useUser()

  
  
  
  */

  const { user } = useUser()
  //const [data, setData] = useState('')

  const friends = FRIENDS_LIST
  const friendListSize = friends.size
  const requests = FRIEND_REQUESTS
  const requestSize = requests.size
  const pending = PENDING_FRIENDS
  const pendingSize = pending.size

  const handleSearchFriends = (event) => setSearch(event.target.value)

  const handleCategoryChange = (category) => {
    setCategory(category)
  }

  return (
    <Flex
      h="575px"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0,0,0,0.05)"
      borderRadius={"10px"}
      w={"400px"}
      flexDir="column"
      ml={2}
      bg={'primary.main'}
    >
      <Flex
          pos='sticky'
          p="2%"
          flexDir="row"
          bg={'primary.snow'}
          borderTopRadius={"inherit"}
          h={'55px'}
          justify='space-between'
          align='center'
      >
        <Text fontSize={'1.25rem'} fontWeight={'hairline'}
          ml={4}
        >Search Friends</Text>
        <IconButton
          bg="none"
          _hover={{ bg: 'none' }}
          icon={<AiOutlineClose />}
          onClick={() => handleClose(false)}
        >
        </IconButton>
      </Flex>
      <Divider />
      <Flex
        h={50}
        bg={'primary.snow'}
        align='center'
        direction='row'
      >
        <Flex
          w='33.33%'
          h='40px'
          justify='center'
          align='center'
          bg={(category==='Friends') ? 'primary.main' : 'none'}
          textDecor={(category==='Friends') ? 'underline' : 'none'}
          _hover={{ bg: 'purple.freezePurple', cursor: 'pointer', textDecor: 'underline' }}
          onClick={() => handleCategoryChange('Friends')}
        >
          <Text fontSize={'1rem'} fontWeight={'light'}
            color={(category==='Friends') ? 'primary.dark' : 'primary.dark'}
          > {`Friends (${(!!user.friendsList) && Object.keys(user.friendsList).length})`} </Text>
        </Flex>
        <Flex
          w='33.33%'
          h='40px'
          justify='center'
          align='center'
          bg={(category==='Requests') ? 'primary.main' : 'none'}
          textDecor={(category==='Requests') ? 'underline' : 'none'}
          _hover={{ bg: 'purple.freezePurple', cursor: 'pointer', textDecor: 'underline' }}
          onClick={() => handleCategoryChange('Requests')}
        >
        <Text fontSize={'1rem'} fontWeight={'light'} color={'primary.dark'} _hover={{ bg: 'none', cursor: 'pointer', textDecor: 'underline' }}>
          {`Requests (${requestSize})`}
        </Text>
        </Flex>
        <Flex 
          w='33.33%'
          h='40px'
          justify='center'
          align='center'
          bg={(category==='Add') ? 'primary.main' : 'none'}
          textDecor={(category==='Add') ? 'underline' : 'none'}
          _hover={{ bg: 'purple.freezePurple', cursor: 'pointer', textDecor: 'underline' }}
          onClick={() => handleCategoryChange('Add')}
        >
        <Text fontSize={'1rem'} fontWeight={'light'} color={'primary.dark'} > {`Add Friends`} </Text>
        </Flex>
      </Flex>

      <Flex
        justify='center'
        align='center'
      >
        <SearchBar input={search} handleChange={handleSearchFriends}/>
      </Flex>

      <Flex
        h='90%'
        w='100%'
        bg={'purple.mediumPurple'}
        borderBottomRadius={'inherit'}
        direction='column'
        scrollBehavior={'smooth'}
        overflowX={'auto'}
        pt={1}
        pb={1}
      >
        {category==='Friends' && 
          <DisplayFriends friends={friends}/>
        }
        {category==='Requests' && 
          <DisplayRequests requests={requests}/>
        }
        {category==='Add' && 
          <DisplayPending pending={results}/>
        }
      </Flex>

      <Flex
        h='10%'
        w='100%'
        bg={'purple.freezePurple'}
        borderBottomRadius={'inherit'}
      >
        <Flex 
          h={50}
          w={250}
          background={`radial-gradient(180% 180% at right -65% top -65%, transparent 98%, #f5fefd)`}
          borderBottomRadius={'inherit'}
        />
        <Flex 
          h={50}
          w={250}
          background='radial-gradient(180% 180% at left -65% top -65%, transparent 98%, #f5fefd )'
          borderBottomRadius={'inherit'}
        />
      </Flex>
    </Flex>
  )
}

export default SearchBarWindow