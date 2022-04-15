import Head from 'next/head'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import React, { MouseEvent } from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'
import style from './user.module.css'

const User = () => {
  const router = useRouter()

  function handleCancelClick(e: MouseEvent): void {
    e.preventDefault()
    router.push('/users')
  }

  return (
    <>
      <Head>
        <title>Capstone Application | User</title>
      </Head>
      <div className="content__header">
        <h2>Add new User</h2>
      </div>
      <Form className="content__form">
        <FormGroup>
          <Label for="userName">User name:</Label>
          <Input id="userName" type="text" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input id="email" type="text" />
        </FormGroup>
        <FormGroup>
          <Label for="role">Role:</Label>
          <Input id="role" name="role" type="select">
            <option value="owner">Owner</option>
            <option value="project">Project Manager</option>
            <option value="billing">Billing Manager</option>
            <option value="developer">Developer</option>
          </Input>
        </FormGroup>
        <div className="content__form_button">
          <Button onClick={handleCancelClick} className="content__button_cancel" outline>
            Cancel
          </Button>
          <Button className="content__button_save" color="success">
            Add new user
          </Button>
        </div>
      </Form>
    </>
  )
}
export default User
