import InputGroup from 'components/InputGroup'
import Head from 'next/head'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import React, { MouseEvent, useState } from 'react'
import { FaCircle, FaLongArrowAltLeft } from 'react-icons/fa'
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap'
import style from '../droplet.module.scss'

const DestroyDroplet = () => {
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
        <title>Capstone Application | Destroy Droplet</title>
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
            <a className={style.navLinkItem}>History</a>
          </Link>
          <Link href="/droplets/1/monitoring">
            <a className={style.navLinkItem}>Monitoring</a>
          </Link>
          <hr></hr>
          <Link href="/droplets/1/destroy">
            <a className={`${style.navLinkItem} ${style.active}`}>Destroy</a>
          </Link>
        </div>
        <div className={style.subContent}>
          <h2>Destroy Droplet</h2>
          <div className={style.wrapContent}>
            <p>
              This is irreversible. We will destroy your Droplet and all associated backups. All Droplet data will be
              scrubbed and irretrievable.
            </p>
            <Button color="danger" outline className="buttonDelete" onClick={handleToogleModalForm}>
              Destroy this Droplet
            </Button>
          </div>
        </div>
      </div>
      <Modal isOpen={modalForm} toggle={handleToogleModalForm} backdrop="static">
        <ModalHeader toggle={handleToogleModalForm}>Destroy Droplet</ModalHeader>
        <ModalBody>Do you want destroy this droplet...?</ModalBody>
        <ModalFooter>
          <Button color="danger">Destroy</Button>{' '}
          <Button outline color="secondary" onClick={handleToogleModalForm}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}
export default DestroyDroplet
