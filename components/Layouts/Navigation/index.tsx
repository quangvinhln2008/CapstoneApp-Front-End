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
          <div className={style.navLinkItem}>
            <FaFolderOpen />
            <Link href="/accounts/configuration">Configuration</Link>
          </div>
          <div className={style.navLinkItem}>
            <FaUserAlt />
            <Link href="/users">User</Link>
          </div>
        </div>
      </div>
      <div className={style.navGroup}>
        <p>Mange</p>
        <div className={style.navLink}>
          <div className={style.navLinkItem}>
            <FaTh />
            <Link href="/accounts/SignIn">Project</Link>
          </div>
          <div className={style.navLinkItem}>
            <FaPeriscope />
            <Link href="/droplets">Droplets</Link>
          </div>
          <div className={style.navLinkItem}>
            <FaRegFileImage />
            <Link href="/images">Images</Link>
          </div>
          <div className={style.navLinkItem}>
            <FaMoneyBillAlt />
            <Link href="/billing">Bilings</Link>
          </div>
          <div className={style.navLinkItem}>
            <FaTasks />
            <Link href="/firewalls">Firewalls</Link>
          </div>
          <div className={style.navLinkItem}>
            <FaWatchmanMonitoring />
            <Link href="/monitoring">Monitoring</Link>
          </div>
        </div>
      </div>
      <div className={style.navGroup}>
        <p>List</p>
        <div className={style.navLink}>
          <div className={style.navLinkItem}>
            <FaShieldVirus />
            <Link href="/regions">Regions</Link>
          </div>
          <div className={style.navLinkItem}>
            <FaServer />
            <Link href="/sizes">Sizes</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
