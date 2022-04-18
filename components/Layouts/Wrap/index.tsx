import React from 'react'
import style from './wrap.module.scss'

interface IWrapProps {
  children: JSX.Element
}
const Layout = (props: IWrapProps): JSX.Element => {
  const { children } = props
  return (
    <div>
      <div className={style.wrap}>{children}</div>
    </div>
  )
}

export default Layout
