import InputGroup from 'components/InputGroup'
import Head from 'next/head'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import React, { MouseEvent, useState } from 'react'
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap'
import style from '../billing.module.scss'

const Alert = () => {
  const router = useRouter()
  const [modalForm, setModalForm] = useState(false)
  const [amount, setAmount] = useState('')

  function handleAddClick(e: MouseEvent): void {
    e.preventDefault()
    router.push('/billings/alert/create')
  }

  function handleToogleModalForm(): void {
    setModalForm(!modalForm)
  }

  function handleAmountChange(value: string): void {
    setAmount(value)
  }

  return (
    <>
      <Head>
        <title>Capstone Application | Billing alert</title>
      </Head>
      <div className="contentHeader">
        <h2>Billing Alert</h2>
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
            <a className={`${style.navLinkItem} ${style.active}`}>Billings Alert</a>
          </Link>
          <Link href="/billings/invoice">
            <a className={style.navLinkItem}>Invoice</a>
          </Link>
        </div>
        <div className={style.subContent}>
          <h2>Billing Alert</h2>
          <div className={style.wrapContent}>
            <p>Set up automated billing alerts to receive emails when a specified usage amount is reached.</p>
            <Button color="primary" className="buttonAdd" onClick={handleToogleModalForm}>
              Create Alert
            </Button>
          </div>
        </div>
      </div>
      <Modal isOpen={modalForm} toggle={handleToogleModalForm} backdrop="static">
        <ModalHeader toggle={handleToogleModalForm}>Please enter a billing alert amount</ModalHeader>
        <ModalBody>
          <p className={style.decriptionContent}>
            You will receive an email whenever your monthly balance reaches the specified amount below.
          </p>
          <InputGroup
            onChange={handleAmountChange}
            value={amount == '' ? '20' : amount}
            name="amount"
            label="Alert Amount (USD):"
            type="text"
          />
        </ModalBody>
        <ModalFooter>
          <Button outline color="secondary" onClick={handleToogleModalForm}>
            Cancel
          </Button>
          <Button color="primary">Submit</Button>{' '}
        </ModalFooter>
      </Modal>
    </>
  )
}
export default Alert
