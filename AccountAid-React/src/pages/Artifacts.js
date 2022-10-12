import { Flex, Heading, HStack } from '@chakra-ui/react'
import React from 'react'
import ArtifactAccordion from '../components/Artifacts/ArtifactAccordion'
import ArtifactCard from '../components/Artifacts/ArtifactCard'
import ArtifactCategory from '../components/Artifacts/ArtifactCategory'
import Sidebar from '../components/Artifacts/Sidebar'
import { PERSONAS, SCENARIOS } from '../data/constants'
import { INTERVIEWS } from './../data/constants';

function Artifacts() {

  return (
    <Flex bg={'primary.snow'} width={'100vw'} height={2000}>
      <Sidebar />
      <Flex direction='column'>
      <Flex width={'100%'} height={200}>
        <Heading m={6}>ARTIFACTS</Heading>
      </Flex>
      <Flex ml={10}>
        <ArtifactCategory category={'Persona'} data={PERSONAS}/>
      </Flex>
      <Flex ml={10} mt={6}>
        <ArtifactCategory category={'Scenario'} data={SCENARIOS}/>
      </Flex>
      <Flex ml={10} mt={6}>
        <ArtifactCategory category={'Interview'} data={INTERVIEWS}/>
      </Flex>
      
      
      </Flex>
    </Flex>
  )
}

/*
<BasicAccordion sections={[
        {label: 'Personas', content: <ArtifactCategory category={'Personas'} data={PERSONAS}/>},
        {label: 'Scenarios', content: <ArtifactCategory category={'Scenarios'} data={SCENARIOS}/>},
        {label: 'Interviews', content: <ArtifactCategory category={'Interviews'} data={INTERVIEWS}/>}
      ]}/>
<ArtifactAccordion sections={sections}/>
      
*/

export default Artifacts