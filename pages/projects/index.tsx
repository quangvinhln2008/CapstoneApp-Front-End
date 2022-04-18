import Head from 'next/head'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import React, { MouseEvent, useState } from 'react'
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap'
import style from './project.module.scss'

const Project = () => {
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
        <title>Capstone Application | Projects</title>
      </Head>
      <div className="contentHeader">
        <h2>Projects List</h2>
        <Button color="primary" className="buttonAdd" onClick={handleAddClick}>
          Add New Project
        </Button>
      </div>
      <div className="contentFilter">
        <span>Filter by:</span>
        <Input id="projectName" name="projectName" placeholder="Project name....." type="text" />
      </div>
      <div className="contentTable">
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Project Name</th>
              <th>Decription</th>
              <th>Create at</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                <Link href="/projects/1/edit">
                  <a className={style.projectDetail}>Capstone project</a>
                </Link>
              </td>
              <td>Lorem Ipsum has been</td>
              <td>2018-09-27</td>
              <td>
                <Link href="/projects/1/edit">
                  <a className="linkEdit">Edit</a>
                </Link>
                <button className={`${style.buttonLink} ${style.delete}`} onClick={handleToogleModalForm}>
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>
                <Link href="/projects/1/edit">
                  <a className={style.projectDetail}>Capstone project</a>
                </Link>
              </td>
              <td>Lorem Ipsum has been</td>
              <td>2018-09-27</td>
              <td>
                <Link href="/projects/1/edit">
                  <a className="linkEdit">Edit</a>
                </Link>
                <button className={`${style.buttonLink} ${style.delete}`} onClick={handleToogleModalForm}>
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>
                <Link href="/projects/1/edit">
                  <a className={style.projectDetail}>Capstone project</a>
                </Link>
              </td>
              <td>Lorem Ipsum has been</td>
              <td>2018-09-27</td>
              <td>
                <Link href="/projects/1/edit">
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
        <ModalHeader toggle={handleToogleModalForm}>Delete project</ModalHeader>
        <ModalBody>Do you want delete project...?</ModalBody>
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
export default Project
