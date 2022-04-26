import Head from 'next/head'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import React, { MouseEvent, useState } from 'react'
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap'
import style from './firewall.module.scss'

const Firewall = () => {
  const router = useRouter()
  const [modalForm, setModalForm] = useState(false)

  function handleAddClick(e: MouseEvent): void {
    e.preventDefault()
    router.push('/projects/create')
  }

  function handleToogleModalForm(): void {
    setModalForm(!modalForm)
  }

  return (
    <>
      <Head>
        <title>Capstone Application | Firewalls</title>
      </Head>
      <div className="contentHeader">
        <h2>Firewall</h2>
        {/* <Button color="primary" className="buttonAdd" onClick={handleAddClick}>
          Add New Project
        </Button> */}
      </div>
      <div className="contentFilter">
        <span>Filter by:</span>
        <Input id="firewallName" name="projectName" placeholder="Firewall name....." type="text" />
      </div>
      <div className="contentTable">
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Firewall Name</th>
              <th>Status</th>
              <th>Create at</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                <Link href="/firewalls/1">
                  <a className={style.firewallDetail}>firewall 01</a>
                </Link>
              </td>
              <td>
                <span className={`${style.firewallStatus} ${style.success}`}>Success</span>
              </td>
              <td>2018-09-27</td>
              <td>
                {/* <Link href="/projects/1/edit">
                  <a className="linkEdit">Edit</a>
                </Link> */}
                <button className={`${style.buttonLink} ${style.delete}`} onClick={handleToogleModalForm}>
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>
                <Link href="/firewalls/1">
                  <a className={style.firewallDetail}>Firewall 02</a>
                </Link>
              </td>
              <td>
                <span className={`${style.firewallStatus} ${style.waiting}`}>Waiting</span>
              </td>
              <td>2018-09-27</td>
              <td>
                {/* <Link href="/firewall/1/edit">
                  <a className="linkEdit">Edit</a>
                </Link> */}
                <button className={`${style.buttonLink} ${style.delete}`} onClick={handleToogleModalForm}>
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>
                <Link href="/firewalls/1">
                  <a className={style.firewallDetail}>firewall 03</a>
                </Link>
              </td>
              <td>
                <span className={`${style.firewallStatus} ${style.failed}`}>Failed</span>
              </td>
              <td>2018-09-27</td>
              <td>
                {/* <Link href="/projects/1/edit">
                  <a className="linkEdit">Edit</a>
                </Link> */}
                <button className={`${style.buttonLink} ${style.delete}`} onClick={handleToogleModalForm}>
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Modal isOpen={modalForm} toggle={handleToogleModalForm} backdrop="static">
        <ModalHeader toggle={handleToogleModalForm}>Delete firewall</ModalHeader>
        <ModalBody>Do you want delete firewall configuration...?</ModalBody>
        <ModalFooter>
          <Button color="danger">Delete</Button>{' '}
          <Button outline color="secondary" onClick={handleToogleModalForm}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}
export default Firewall
