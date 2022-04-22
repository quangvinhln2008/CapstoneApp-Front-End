import Head from 'next/head'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import React, { MouseEvent, useState } from 'react'
import { FaCircle, FaLongArrowAltLeft } from 'react-icons/fa'
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap'
import style from '../droplet.module.scss'

const DropletsHistory = () => {
  const router = useRouter()
  const [modalForm, setModalForm] = useState(false)

  function handleAddClick(e: MouseEvent): void {
    e.preventDefault()
    router.push('/projects/create')
  }

  return (
    <>
      <Head>
        <title>Capstone Application | Droplet History</title>
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
            <a className={style.navLinkItem}>Networking</a>
          </Link>
          <Link href="/droplets/1/history">
            <a className={`${style.navLinkItem} ${style.active}`}>History</a>
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
            <h3>Droplet History</h3>
            <div className={style.wrap}>
              <Table hover className={style.tableContent}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Event</th>
                    <th>Initiated</th>
                    <th>Excution Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Power On</td>
                    <td>4 day ago</td>
                    <td>11 seconds</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Power Off</td>
                    <td>4 days ago</td>
                    <td>5 seconds</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default DropletsHistory
