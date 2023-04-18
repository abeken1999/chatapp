import type { AppProps } from 'next/app'
import { chakra, ChakraProvider } from '@chakra-ui/react'
import { initializeFirebaseApp } from '@/lib/firebase/firebase'
import { getApp } from 'firebase/app'
import { AuthProvider } from '@/feature/auth/provider/AuthProvider'
import { Header } from '@/component/Header/Header'
import { Footer } from '@/component/Footer/Footer'
import { theme } from '@/lib/chakra/theme'

initializeFirebaseApp()
function MyApp({ Component, pageProps }: AppProps) {
  console.log(getApp())
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Header />
        <chakra.main
          flex={1}
          display={'flex'}
          flexDirection={'column'}
          minHeight={0}
        >
          <Component {...pageProps} />
        </chakra.main>
        <Footer />
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp
