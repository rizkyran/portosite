import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { ChakraProvider } from '@chakra-ui/react'
import { MainRouter } from './routes/routes'

const App = () => {
  return (
    <HelmetProvider>
      <ChakraProvider>
        <MainRouter />
      </ChakraProvider>
    </HelmetProvider>
  )
}

export default App
