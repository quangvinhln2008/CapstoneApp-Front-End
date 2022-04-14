import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import MainContainer from '../MainContainer'
import Navigation from '../Navigation'

import style from './Layout.module.css'

interface PropsType {
  children: JSX.Element
}
function Layout(props: PropsType) {
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
