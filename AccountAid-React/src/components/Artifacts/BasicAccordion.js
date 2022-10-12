import { Accordion, AccordionItem, Box, AccordionIcon, AccordionPanel } from '@chakra-ui/react'
import {
    AccordionHeader,
  } from "@chakra-ui/core";
import React from 'react'

function BasicAccordion({ sections }) {
  return (
        <Accordion defaultIndex={[0]} allowMultiple>
        {sections.map((section) => 
            <AccordionItem>
            <AccordionHeader>
            <Box flex="1" textAlign="left">
                {section.label}
            </Box>
            <AccordionIcon />
            </AccordionHeader>
                <AccordionPanel pb={4}>
                    {section.content}
                </AccordionPanel>
            </AccordionItem>
        )}
    </Accordion>
  )
}

export default BasicAccordion