import Head from 'next/head'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import React, { MouseEvent, useState } from 'react'
import { FaCircle, FaLongArrowAltLeft } from 'react-icons/fa'
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap'
import style from '../firewall.module.scss'

const FirewallDetail = () => {
  const router = useRouter()
  const [modalForm, setModalForm] = useState(false)

  function handleAddClick(e: MouseEvent): void {
    e.preventDefault()
    router.push('/projects/create')
  }

  return (
    <>
      <Head>
        <title>Capstone Application | Firewall</title>
      </Head>
      <div className="contentHeader">
        <h2>Firewall</h2>
      </div>
      <Link href="/firewalls">
        <a className={style.buttonLinkContent}>
          <FaLongArrowAltLeft /> Back to Firewall lists
        </a>
      </Link>
      <div className={style.subContainer}>
        <div className={style.subContent}>
          <h2>
            Firewall 01 <FaCircle className={style.svgSuccess} />
          </h2>
          <div className={style.wrapContent}>
            <h3 className={style.titleContent}>Inbound rules</h3>
            <Table hover className={style.tableContent}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Protocol</th>
                  <th>Port</th>
                  <th>Source</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>TCP</td>
                  <td>80</td>
                  <td>
                    <span className={style.tagStyle}>All IPv6</span>
                    <span className={style.tagStyle}>All IPv4</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>TCP</td>
                  <td>50</td>
                  <td>
                    <span className={style.tagStyle}>All IPv6</span>
                    <span className={style.tagStyle}>All IPv4</span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className={style.wrapContent}>
            <h3 className={style.titleContent}>Outbound rules</h3>
            <Table hover className={style.tableContent}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Protocol</th>
                  <th>Port Range</th>
                  <th>Destinations</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>ICMP</td>
                  <td>80</td>
                  <td>
                    <span className={style.tagStyle}>All IPv6</span>
                    <span className={style.tagStyle}>All IPv4</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>TCP</td>
                  <td>50</td>
                  <td>
                    <span className={style.tagStyle}>All IPv6</span>
                    <span className={style.tagStyle}>All IPv4</span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className={style.wrapContent}>
            <h3 className={style.titleContent}>Droplets</h3>
            <Link href="/droplets/123">
              <button className={style.buttonContent}>Todo List</button>
            </Link>
            <Link href="/droplets/123">
              <button className={style.buttonContent}>Capstone project</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default FirewallDetail
