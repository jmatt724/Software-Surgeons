import { Button, Flex, Heading } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import FeatureCategory from '../components/Artifacts/features/FeatureCategory'
import InterviewCategory from '../components/Artifacts/interviews/InterviewCategory'
import PersonaCategory from '../components/Artifacts/personas/PersonaCategory'
import ScenarioCategory from '../components/Artifacts/scenarios/ScenarioCategory'
import UserStoryCategory from '../components/Artifacts/user_stories/UserStoryCategory'
import { FEATURE_DATA, PERSONAS, SCENARIOS, USER_STORY_DATA } from '../data/constants'
import { INTERVIEWS } from './../data/constants';

function Artifacts() {
  const scrollRef = useRef(null)
  const executeScroll = () => scrollRef.current.scrollIntoView()
  const navigate = useNavigate()

  useEffect(() => {
    // when navigating to this page it would always start at the bottom of the page
    // so this scrolls to the top on page load
    executeScroll()
  }, [])

  return (
    <Flex bg={'primary.snow'} width={'98vw'} height={'100%'} pb={10} overflowX={'hidden'}>
      {/*<Sidebar />*/}
      <Flex direction='column'>
      <Flex width={'100%'} height={200} ref={scrollRef} direction='column'>
        <Heading m={6} ml={10}>ARTIFACTS</Heading>
        <Button width={150} height={50} ml={10}
          onClick={() => navigate('/')}
          bg={'primary.main'}
          color={'primary.snow'}
        > Go Back </Button>
      </Flex>
      <Flex ml={10}>
        <PersonaCategory category={'Personas'} label={'Persona'} data={PERSONAS}/>
      </Flex>
      <Flex ml={10} mt={6}>
        <ScenarioCategory category={'Scenarios'} label={'Scenario'} data={SCENARIOS}/>
      </Flex>
      <Flex ml={10} mt={6}>
        <UserStoryCategory category={'User Stories'} data={USER_STORY_DATA}/>
      </Flex>
      <Flex ml={10} mt={6}>
        <FeatureCategory category={'Features'} data={FEATURE_DATA}/>
      </Flex>
      <Flex ml={10} mt={6}>
        <InterviewCategory category={'Interviews'} label={'Interview'} data={INTERVIEWS}/>
      </Flex>
      </Flex>
    </Flex>
  )
}

export default Artifacts