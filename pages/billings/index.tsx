import Head from 'next/head'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import React, { MouseEvent, useState } from 'react'
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap'
import style from './billing.module.scss'

const Billing = () => {
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
      <div className="contentHeader">
        <h2>Billing Infomation</h2>
      </div>
      <div className={style.subContainer}>
        <div className={style.leftNavigation}>
          <Link href="/billings">
            <a className={`${style.navLinkItem} ${style.active}`}>Billings</a>
          </Link>
          <Link href="/billings/history">
            <a className={style.navLinkItem}>Billings History</a>
          </Link>
          <Link href="/billings/alert">
            <a className={style.navLinkItem}>Billings Alert</a>
          </Link>
          <Link href="/billings/invoice">
            <a className={style.navLinkItem}>Invoice</a>
          </Link>
        </div>
        <div className={style.subContent}>
          <h2>Billing</h2>
          <div className={style.wrapContent}>
            <h3 className={style.titleContent}>Remaining account credit</h3>
            <p className={style.detailContent}>$96.37</p>
          </div>
          <div className={style.wrapContent}>
            <h3 className={style.titleContent}>Estimated costs for this billing period</h3>
            <p className={style.detailContent}>$0.00</p>
          </div>
          <div className={style.wrapContent}>
            <h3 className={style.titleContent}>Month-to-date April 1 - 05, 2022</h3>
            <p className={style.detailContent}>$2.34</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Billing
