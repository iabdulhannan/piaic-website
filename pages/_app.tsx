import 'piaicRoot/styles/globals.css'
import type {AppProps} from 'next/app'
import '@fontsource/inter/400.css'
import {Box, ChakraProvider, extendTheme} from "@chakra-ui/react";
import {Footer} from "piaicRoot/components/Footer";
import React from "react";
import Header from "piaicRoot/components/Header";

const theme = extendTheme({
  colors: {
    piaic: {
      100: "#caf0f8",
      200: "#90e0ef",
      300: "#6188b8",
      400: "#2d6dbb",
      500: "#286abd",
    },
    piaicGreen: '#01635e',
    fonts: {
      heading: `Inter', sans-serif`,
      text: `Inter', sans-serif`,
    },
  },
})

export default function App({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header/>
      <Box pt={16} px={0} scrollBehavior={"smooth"} scrollMarginTop={16}>
        <Component {...pageProps} />
      </Box>
      <Footer/>
    </ChakraProvider>
  )
}
