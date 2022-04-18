import React from 'react'
import style from './mainContainer.module.scss'

interface IMainContainerProps {
  children: JSX.Element
}

const MainContainer = (props: IMainContainerProps): JSX.Element => {
  const { children } = props
  return <div className={style.main_container}>{children}</div>
}

export default MainContainer
