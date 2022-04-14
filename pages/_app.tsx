import React from 'react'
import '../styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/layouts/Header'
import Container from '../components/layouts/MainContainer'
import Navigation from '../components/layouts/Navigation'
import type { AppProps } from 'next/app'
import MainContainer from '../components/layouts/MainContainer'
import Content from '../components/layouts/Content'
import Footer from 'components/layouts/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (
    <>
      <Header />
      <MainContainer>
        <Navigation />
        <Content>
          <Component {...pageProps} />
        </Content>
      </MainContainer>
      <Footer />
    </>
  )
}
export default MyApp
