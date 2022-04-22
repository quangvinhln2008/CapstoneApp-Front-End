import Head from 'next/head'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import React, { MouseEvent, useState } from 'react'
import { FaCircle, FaLongArrowAltLeft } from 'react-icons/fa'
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap'
import style from '../droplet.module.scss'

const DropletsId = () => {
  const router = useRouter()
  const [modalForm, setModalForm] = useState(false)

  function handleAddClick(e: MouseEvent): void {
    e.preventDefault()
    router.push('/projects/create')
  }

  return (
    <>
      <Head>
        <title>Capstone Application | Billing Infomation</title>
      </Head>
      <div className={style.contentHeader}>
        <h2>
          Droplet: DL 01 <FaCircle className={style.svgSuccess} />
        </h2>
        <p>In: Todo list / Image information</p>
      </div>
      <Link href="/droplets">
        <a className={style.buttonLinkContent}>
          <FaLongArrowAltLeft /> Back to Droplet lists
        </a>
      </Link>
      <div className={style.subContainer}>
        <div className={style.leftNavigation}>
          <Link href="/droplets/1">
            <a className={`${style.navLinkItem} ${style.active}`}>Networking</a>
          </Link>
          <Link href="/droplets/1/history">
            <a className={style.navLinkItem}>History</a>
          </Link>
          <Link href="/droplets/1/monitoring">
            <a className={style.navLinkItem}>Monitoring</a>
          </Link>
          <hr></hr>
          <Link href="/droplets/1/destroy">
            <a className={style.navLinkItem}>Destroy</a>
          </Link>
        </div>
        <div className={style.subContent}>
          <div className={`${style.wrapContent} ${style.display}`}>
            <h3>Public Network</h3>
            <div className={style.wrap}>
              <div className={style.subWrap}>
                <h3 className={style.titleContent}>PUBLIC IPV4 ADDRESS</h3>
                <p className={style.detailContent}>128.199.147.111</p>
              </div>
              <div className={style.subWrap}>
                <h3 className={style.titleContent}>PUBLIC GATEWAY</h3>
                <p className={style.detailContent}>128.199.128.1</p>
              </div>
              <div className={style.subWrap}>
                <h3 className={style.titleContent}>SUBNET MASK</h3>
                <p className={style.detailContent}>255.255.192.0</p>
              </div>
            </div>
            <div className={style.wrap}>
              <div className={style.subWrap}>
                <h3 className={style.titleContent}>PUBLIC IPV6 ADDRESS</h3>
                <p className={style.detailContent}>2400:6180:0:d0::f27:4001</p>
              </div>
              <div className={style.subWrap}>
                <h3 className={style.titleContent}>PUBLIC IPV6 GATEWAY</h3>
                <p className={style.detailContent}>2400:6180:0:d0::1</p>
              </div>
            </div>
          </div>
          <div className={`${style.wrapContent} ${style.display}`}>
            <h3>Private Network</h3>
            <div className={style.wrap}>
              <div className={style.subWrap}>
                <h3 className={style.titleContent}>PRIVATE IPV4 ADDRESS</h3>
                <p className={style.detailContent}>10.104.0.2</p>
              </div>
              <div className={style.subWrap}>
                <h3 className={style.titleContent}>VPC NETWORK</h3>
                <p className={style.detailContent}>default-sgp1</p>
              </div>
              <div className={style.subWrap}>
                <h3 className={style.titleContent}>VPC IP RANGE</h3>
                <p className={style.detailContent}>10.104.0.0/20</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default DropletsId
