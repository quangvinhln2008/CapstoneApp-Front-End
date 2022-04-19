import Head from 'next/head'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import React, { MouseEvent, useState } from 'react'
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap'
import style from '../billing.module.scss'

const History = () => {
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
        <h2>Billing History</h2>
      </div>
      <div className={style.subContainer}>
        <div className={style.leftNavigation}>
          <Link href="/billings">
            <a className={style.navLinkItem}>Billings</a>
          </Link>
          <Link href="/billings/history">
            <a className={`${style.navLinkItem} ${style.active}`}>Billings History</a>
          </Link>
          <Link href="/billings/alert">
            <a className={style.navLinkItem}>Billings Alert</a>
          </Link>
          <Link href="/billings/invoice">
            <a className={style.navLinkItem}>Invoice</a>
          </Link>
        </div>
        <div className={style.subContent}>
          <h2>Billing History</h2>
          <div className={`${style.wrapContent} ${style.display}`}>
            <div className={style.subWrap}>
              <h3 className={style.titleContent}>Invocice for March 2022</h3>
              <p className={style.detailContent}>April 01, 22</p>
            </div>
            <div className={style.subWrap}>
              <p className={`${style.detailContent} ${style.price}`}>$5.00</p>
            </div>
            <div className={style.subWrap}>
              <span>
                Dowload <a href="#">PDF</a>
              </span>
            </div>
          </div>
          <div className={`${style.wrapContent} ${style.display}`}>
            <div className={style.subWrap}>
              <h3 className={style.titleContent}>Invocice for Febuary 2022</h3>
              <p className={style.detailContent}>Febuary 01, 22</p>
            </div>
            <div className={style.subWrap}>
              <p className={`${style.detailContent} ${style.price}`}>$5.00</p>
            </div>
            <div className={style.subWrap}>
              <span>
                Dowload <a href="#">PDF</a>
              </span>
            </div>
          </div>
          <div className={`${style.wrapContent} ${style.display}`}>
            <div className={style.subWrap}>
              <h3 className={style.titleContent}>Invocice for Janury 2022</h3>
              <p className={style.detailContent}>Janury 01, 22</p>
            </div>
            <div className={style.subWrap}>
              <p className={`${style.detailContent} ${style.price}`}>$5.00</p>
            </div>
            <div className={style.subWrap}>
              <span>
                Dowload <a href="#">PDF</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default History
