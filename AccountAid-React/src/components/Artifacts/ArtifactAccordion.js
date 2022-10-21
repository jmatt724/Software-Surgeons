import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react'

function ArtifactAccordion({ sections }) {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
        {sections.map((item, index) => 
            <AccordionItem height={'100%'} key={index} width={1850}>
            <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                    {item.label}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
                <AccordionPanel pb={4}>
                {item.content}
                </AccordionPanel>
            </AccordionItem>
        )}
    </Accordion>
  )
}

export default ArtifactAccordion