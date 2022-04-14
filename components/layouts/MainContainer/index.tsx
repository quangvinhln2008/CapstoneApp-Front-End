import React from 'react'
import style from './MainContainer.module.css'

function MainContainer(props) {
  return <div className={style.main_container}>{props.children}</div>
}

export default MainContainer
