import Head from 'next/head'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import React, { MouseEvent, useState } from 'react'
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap'
import style from '../billing.module.scss'

const Invoice = () => {
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
            <a className={style.navLinkItem}>Billings</a>
          </Link>
          <Link href="/billings/history">
            <a className={style.navLinkItem}>Billings History</a>
          </Link>
          <Link href="/billings/alert">
            <a className={style.navLinkItem}>Billings Alert</a>
          </Link>
          <Link href="/billings/invoice">
            <a className={`${style.navLinkItem} ${style.active}`}>Invoice</a>
          </Link>
        </div>
        <div className={style.subContent}>
          <h2>Invoice</h2>
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
          <div className={`${style.wrapContent} ${style.display}`}>
            <div className={style.subWrap}>
              <h3 className={style.titleContent}>Invoice period</h3>
              <p className={style.detailContent}>2022-02</p>
            </div>
            <div className={style.subWrap}>
              <p className={`${style.detailContent} ${style.price}`}>$10.34</p>
            </div>
            <div className={style.subWrap}>
              <span>
                <Link href="/billings/invoice/12345">Detail</Link>
              </span>
            </div>
          </div>
          <div className={`${style.wrapContent} ${style.display}`}>
            <div className={style.subWrap}>
              <h3 className={style.titleContent}>Invoice period</h3>
              <p className={style.detailContent}>2022-01</p>
            </div>
            <div className={style.subWrap}>
              <p className={`${style.detailContent} ${style.price}`}>$5.34</p>
            </div>
            <div className={style.subWrap}>
              <span>
                <Link href="/billings/invoice/12345">Detail</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Invoice
