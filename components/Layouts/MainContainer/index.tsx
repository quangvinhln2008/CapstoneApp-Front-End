import React from 'react'
import style from './mainContainer.module.css'

interface IMainContainerProps {
  children: JSX.Element
}

const MainContainer = (props: IMainContainerProps): JSX.Element => {
  return <div className={style.main_container}>{props.children}</div>
}

export default MainContainer
