import React from 'react'
import style from './wrap.module.css'

interface IWrapProps {
  children: JSX.Element
}
const Layout = (props: IWrapProps): JSX.Element => {
  return (
    <div>
      <div className={style.wrap}>{props.children}</div>
    </div>
  )
}

export default Layout
