import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import MainContainer from '../MainContainer'
import Navigation from '../Navigation'
import style from './layout.module.css'

interface ILayoutProps {
  children: JSX.Element
}

const Layout = (props: ILayoutProps): JSX.Element => {
  const { children } = props
  return (
    <>
      <Header />
      <MainContainer>
        <Navigation />
        <main className={style.layout}>{children}</main>
      </MainContainer>
      <Footer />
    </>
  )
}

export default Layout
