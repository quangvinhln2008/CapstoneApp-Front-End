import Head from 'next/head'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import React from 'react'
import { Button, Input, Table } from 'reactstrap'
import style from './User.module.css'

function User() {
  const router = useRouter()

  const handleAddClick = e => {
    e.preventDefault()
    router.push('/users/create')
  }

  return (
    <>
      <Head>
        <title>Capstone Application | User</title>
      </Head>
      <div className="content__header">
        <h2>USER LIST</h2>
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
                <Link href="/users/1">
                  <a className="link_edit">Edit</a>
                </Link>
                <Link href="/users/1">
                  <a className="link_delete">Delete</a>
                </Link>
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
                <Link href="/users/1">
                  <a className="link_edit">Edit</a>
                </Link>
                <Link href="/users/1">
                  <a className="link_delete">Delete</a>
                </Link>
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
                <Link href="/users/1">
                  <a className="link_edit">Edit</a>
                </Link>
                <Link href="/users/1">
                  <a className="link_delete">Delete</a>
                </Link>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  )
}
export default User
