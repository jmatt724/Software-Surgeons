import { extendTheme } from "@chakra-ui/react"

const colors = {
  primary: {
    main: '#3F88C5',
    secondary: '#ffba08',
    mint: '#51dd97',
    purple: '#673ab7',
    lightBlue: '#0693e3',
    orangeYellow: '#ffce00',
    dark: '#3f3f3f',
    snow: '#f5fefd',
    gray: '#9B9B9B',
    valid: '#5be599',
    error: '#e95555',
    selected: '#c1c1c1'
  },
}

const CustomTheme = extendTheme({ colors })

export default CustomTheme