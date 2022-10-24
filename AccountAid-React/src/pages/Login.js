import { Flex, VStack } from '@chakra-ui/react'
import React from 'react'
import Calendar from '../components/feature_components/calendar/Calendar'
import SimButton from '../components/feature_components/calendar/SimButton'
import { CalendarProvider } from '../context/CalendarContext'

function Login() {
  return (
    <CalendarProvider>
      <Flex justify='center' align='center' height={1000} width={'100vw'} bg={'primary.dark'}>
          <Calendar />
      </Flex>
    </CalendarProvider>
  )
}

export default Login