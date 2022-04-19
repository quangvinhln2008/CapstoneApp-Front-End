import Head from 'next/head'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import React, { MouseEvent, useState } from 'react'
import { Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap'
import style from '../../billing.module.scss'

const InvoiceSumary = () => {
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
          <h2>Invoice Sumary</h2>
          <div className={`${style.wrapContent} ${style.display}`}>
            <div className={style.subWrap}>
              <h3 className={style.titleContent}>Invoice period</h3>
              <p className={style.detailContent}>2022-03</p>
            </div>
            <div className={style.subWrap}>
              <p className={`${style.detailContent} ${style.price}`}>$12.34</p>
            </div>
          </div>
          <div className={`${style.wrapContent} ${style.display}`}>
            <div className={style.subWrap}>
              <p>
                <b>User name:</b> Sammy Shark
              </p>
              <p>
                <b>City:</b> Atlantis
              </p>
            </div>
            <div className={style.subWrap}>
              <p>
                <b>Billing address:</b> 101 Shark Row
              </p>
              <p>
                <b>Postal code:</b> 12345
              </p>
            </div>
          </div>
          <div className={`${style.wrapContent} ${style.display}`}>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className={`${style.wrapContent} ${style.display}`}>
            <div className={style.subWrap}>
              <h3 className={style.titleContent}>Taxes</h3>
              <p className={`${style.detailContent}`}>$5.34</p>
            </div>
            <div className={style.subWrap}>
              <h3 className={style.titleContent}>Credits & adjustments</h3>
              <p className={`${style.detailContent}`}>$5.34</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default InvoiceSumary