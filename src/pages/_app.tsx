import type { AppProps } from 'next/app'
import { globalStyles } from "../styles/global"

import Image from 'next/image'
import logoImg from "../assets/logo.svg"
import { Container, Header } from "../styles/pages/app"

globalStyles()

function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg.src} alt="" width="130" height="52" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}

export default App