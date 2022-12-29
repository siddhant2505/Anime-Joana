// import '../styles/globals.css'
import "react-tuby/css/main.css";
import Navbar from '../components/Navbar';
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

export default function App({ Component, pageProps }) {
  return <ChakraProvider theme={theme}>
    <Navbar>
    <Component {...pageProps} />
    </Navbar>
    </ChakraProvider>
}
