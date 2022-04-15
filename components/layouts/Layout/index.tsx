import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import MainContainer from '../MainContainer'
import Navigation from '../Navigation'
import style from './layout.module.css'

interface ILayoutProps {
  children: JSX.Element
}
const Layout = (props: ILayoutProps) => {
  return (
    <>
      <Header />
      <MainContainer>
        <Navigation />
        <main className={style.layout}>{props.children}</main>
      </MainContainer>
      <Footer />
    </>
  )
}

export default Layout
