import { Box, Tag, Tooltip } from '@chakra-ui/react'
import React from 'react'

function HoverTooltip({ label, disabled, children }) {
  return (
    <Tooltip label={label} placement='right' isDisabled={disabled}>
      {children}
    </Tooltip>
  )
}

export default HoverTooltip