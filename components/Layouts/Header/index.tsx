import Link from 'next/link'
import React from 'react'
import style from './header.module.scss'

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.header__title}>
        <h1>CAPSTONE APP</h1>
      </div>
      <div className={style.header__link}>
        <Link href="#">
          <a>Wellcome, Kenshin</a>
        </Link>
        <a>Log out</a>
      </div>
    </div>
  )
}

export default Header
