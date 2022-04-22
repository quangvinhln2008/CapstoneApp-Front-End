import Head from 'next/head'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import React, { MouseEvent, useState } from 'react'
import { FaCircle, FaLongArrowAltLeft } from 'react-icons/fa'
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap'
import style from '../../droplet.module.scss'

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
        <title>Capstone Application | Droplet Monitoring</title>
      </Head>
      <div className={style.contentHeader}>
        <h2>
          Droplet: DL 01 <FaCircle className={style.svgSuccess} />
        </h2>
        <p>In: Todo list / Image information</p>
      </div>
      <Link href="/droplets/1">
        <a className={style.buttonLinkContent}>
          <FaLongArrowAltLeft /> Back
        </a>
      </Link>
      <div className={style.subContainer}>
        <div className={style.leftNavigation}>
          <Link href="/droplets/1/monitoring">
            <a className={`${style.navLinkItem} ${style.active}`}>Alert Policies</a>
          </Link>
          <Link href="/droplets/1/history">
            <a className={style.navLinkItem}>Bandwidth Metrics</a>
          </Link>
          <Link href="/droplets/1/monitoring/cpu-metrics">
            <a className={style.navLinkItem}>CPU Metrics</a>
          </Link>
          <Link href="/droplets/1/monitoring/total-memory-metrics">
            <a className={style.navLinkItem}>Total Memory Metrics</a>
          </Link>
        </div>

        <div className={style.subContent}>
          <div className={`${style.wrapContent} ${style.display}`}>
            <div className={style.wrap}>
              <h3>Alert Policies</h3>
              <Button color="primary" onClick={handleAddClick}>
                Create resource Alert
              </Button>
            </div>
            <div className={`${style.wrapContent} ${style.display}`}>
              <div className={style.subWrap}>
                <h3 className={style.titleContent}>Invoice period</h3>
                <p className={style.detailContent}>2022-03</p>
              </div>
              <div className={style.subWrap}>
                <p className={`${style.detailContent} ${style.price}`}>$12.34</p>
              </div>
              <div className={style.subWrap}>
                <span>
                  <Link href="/billings/invoice/12345">Detail</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default DropletsId
