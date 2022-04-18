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
      <div className={style.nav_group}>
        <p>Setting</p>
        <div className={style.nav_link}>
          <div className={style.nav_link_items}>
            <FaFolderOpen />
            <Link href="/configuration">Configuration</Link>
          </div>
          <div className={style.nav_link_items}>
            <FaUserAlt />
            <Link href="/users">User</Link>
          </div>
        </div>
      </div>
      <div className={style.nav_group}>
        <p>Mange</p>
        <div className={style.nav_link}>
          <div className={style.nav_link_items}>
            <FaTh />
            <Link href="/accounts/SignIn">Project</Link>
          </div>
          <div className={style.nav_link_items}>
            <FaPeriscope />
            <Link href="/droplets">Droplets</Link>
          </div>
          <div className={style.nav_link_items}>
            <FaRegFileImage />
            <Link href="/images">Images</Link>
          </div>
          <div className={style.nav_link_items}>
            <FaMoneyBillAlt />
            <Link href="/billing">Bilings</Link>
          </div>
          <div className={style.nav_link_items}>
            <FaTasks />
            <Link href="/firewalls">Firewalls</Link>
          </div>
          <div className={style.nav_link_items}>
            <FaWatchmanMonitoring />
            <Link href="/monitoring">Monitoring</Link>
          </div>
        </div>
      </div>
      <div className={style.nav_group}>
        <p>List</p>
        <div className={style.nav_link}>
          <div className={style.nav_link_items}>
            <FaShieldVirus />
            <Link href="/regions">Regions</Link>
          </div>
          <div className={style.nav_link_items}>
            <FaServer />
            <Link href="/sizes">Sizes</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
