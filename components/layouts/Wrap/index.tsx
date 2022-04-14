import React from 'react'
import style from './Wrap.module.css'

interface PropsType {
  children: JSX.Element
}
function Layout(props: PropsType) {
  return (
    <div>
      <div className={style.wrap}>{props.children}</div>
    </div>
  )
}

export default Layout
