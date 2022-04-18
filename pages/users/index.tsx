import Head from 'next/head'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import React, { MouseEvent, useState } from 'react'
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap'
import style from './user.module.css'

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
      <div className="content__header">
        <h2>User list</h2>
        <Button color="primary" className="button--add" onClick={handleAddClick}>
          Add new Users
        </Button>
      </div>
      <div className="content__filter">
        <span>Filter by:</span>
        <Input id="userName" name="userName" placeholder="User name....." type="text" />
      </div>
      <div className="content__table">
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
                <span className={`${style.user__role} ${style.owner}`}>Owner</span>
              </td>
              <td>
                <Link href="/users/1/edit">
                  <a className="link_edit">Edit</a>
                </Link>
                <Button className={`${style.button_link} ${style.delete}`} onClick={handleToogleModalForm}>
                  Delete
                </Button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Jacob@gmail.com</td>
              <td>
                <span className={`${style.user__role} ${style.project}`}>Project</span>
              </td>
              <td>
                <Link href="/users/1/edit">
                  <a className="link_edit">Edit</a>
                </Link>
                <Button className={`${style.button_link} ${style.delete}`} onClick={handleToogleModalForm}>
                  Delete
                </Button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>larry@gmail.com</td>
              <td>
                <span className={`${style.user__role} ${style.developer}`}>Developer</span>
              </td>
              <td>
                <Link href="/users/1/edit">
                  <a className="link_edit">Edit</a>
                </Link>
                <Button className={`${style.button_link} ${style.delete}`} onClick={handleToogleModalForm}>
                  Delete
                </Button>
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
