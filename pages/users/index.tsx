import Head from 'next/head'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import React, { MouseEvent, useState } from 'react'
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap'
import style from './user.module.scss'

const User = () => {
  const router = useRouter()
  const [modalForm, setModalForm] = useState(false)

  function handleAddClick(e: MouseEvent): void {
    e.preventDefault()
    router.push('/users/create')
  }

  function handleToogleModalForm(): void {
    setModalForm(!modalForm)
  }

  return (
    <>
      <Head>
        <title>Capstone Application | User</title>
      </Head>
      <div className="contentHeader">
        <h2>User List</h2>
        <Button color="primary" className="buttonAdd" onClick={handleAddClick}>
          Add new Users
        </Button>
      </div>
      <div className="contentFilter">
        <span>Filter by:</span>
        <Input id="userName" name="userName" placeholder="User name....." type="text" />
      </div>
      <div className="contentTable">
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>mark@gmail.com</td>
              <td>
                <span className={`${style.userRole} ${style.owner}`}>Owner</span>
              </td>
              <td>
                <Link href="/users/1/edit">
                  <a className="linkEdit">Edit</a>
                </Link>
                <button className={`${style.buttonLink} ${style.delete}`} onClick={handleToogleModalForm}>
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Jacob@gmail.com</td>
              <td>
                <span className={`${style.userRole} ${style.project}`}>Project</span>
              </td>
              <td>
                <Link href="/users/1/edit">
                  <a className="linkEdit">Edit</a>
                </Link>
                <button className={`${style.buttonLink} ${style.delete}`} onClick={handleToogleModalForm}>
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>larry@gmail.com</td>
              <td>
                <span className={`${style.userRole} ${style.developer}`}>Developer</span>
              </td>
              <td>
                <Link href="/users/1/edit">
                  <a className="linkEdit">Edit</a>
                </Link>
                <button className={`${style.buttonLink} ${style.delete}`} onClick={handleToogleModalForm}>
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Modal isOpen={modalForm} toggle={handleToogleModalForm} backdrop="static">
        <ModalHeader toggle={handleToogleModalForm}>Delete user</ModalHeader>
        <ModalBody>Do you want delete user...?</ModalBody>
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
export default User
