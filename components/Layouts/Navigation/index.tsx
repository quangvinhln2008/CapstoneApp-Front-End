import Link from 'next/link'
import React from 'react'
import style from './navigation.module.scss'
import {
  FaFolderOpen,
  FaServer,
  FaShieldVirus,
  FaPeriscope,
  FaWatchmanMonitoring,
  FaUserAlt,
  FaTh,
  FaMoneyBillAlt,
  FaRegFileImage,
  FaTasks
} from 'react-icons/fa'

const Navigation = () => {
  return (
    <div className={style.navigation}>
      <div className={style.navGroup}>
        <p>Setting</p>
        <div className={style.navLink}>
          <Link href="/accounts/configuration">
            <a className={style.navLinkItem}>
              <FaFolderOpen /> Configuration
            </a>
          </Link>
          <Link href="/users">
            <a className={style.navLinkItem}>
              <FaUserAlt /> User
            </a>
          </Link>
        </div>
      </div>
      <div className={style.navGroup}>
        <p>Mange</p>
        <div className={style.navLink}>
          <Link href="/accounts/SignIn">
            <a className={style.navLinkItem}>
              <FaTh /> Project
            </a>
          </Link>
          <Link href="/droplets">
            <a className={style.navLinkItem}>
              <FaPeriscope /> Droplets
            </a>
          </Link>
          <Link href="/images">
            <a className={style.navLinkItem}>
              <FaRegFileImage /> Images
            </a>
          </Link>
          <Link href="/billing">
            <a className={style.navLinkItem}>
              <FaMoneyBillAlt /> Bilings
            </a>
          </Link>
          <Link href="/firewalls">
            <a className={style.navLinkItem}>
              <FaTasks /> Firewalls
            </a>
          </Link>
          <Link href="/monitorings">
            <a className={style.navLinkItem}>
              <FaWatchmanMonitoring /> Monitoring
            </a>
          </Link>
        </div>
      </div>
      <div className={style.navGroup}>
        <p>List</p>
        <div className={style.navLink}>
          <Link href="/regions">
            <a className={style.navLinkItem}>
              <FaShieldVirus /> Regions
            </a>
          </Link>
          <Link href="/sizes">
            <a className={style.navLinkItem}>
              <FaServer /> Sizes
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navigation
