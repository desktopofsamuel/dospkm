import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { ChakraProvider } from '@chakra-ui/react'
import customTheme from "../theme.js";
import { repositoryName } from '../prismicio'


export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS={true} theme={customTheme}>
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
    </ChakraProvider>
  )
}