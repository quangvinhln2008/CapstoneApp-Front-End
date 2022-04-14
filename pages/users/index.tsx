import Head from 'next/head'
import React from 'react'
import { Button, Input, Table } from 'reactstrap'

function User() {
  return (
    <>
      <Head>
        <title>Capstone Application | User</title>
      </Head>
      <div className="content__header">
        <h2>USER LIST</h2>
        <Button color="primary" className="button--add">
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
    </>
  )
}
export default User
