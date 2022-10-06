import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import CustomTheme from "./CustomTheme"
    
function ChakraTheme(props) {
    return ( 
        <ChakraProvider theme={CustomTheme}>
            {props.children}
        </ChakraProvider>
    )
}
    
export default ChakraTheme