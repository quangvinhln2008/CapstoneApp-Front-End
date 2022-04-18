import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { FormEvent, MouseEvent, useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Modal, Table } from 'reactstrap'
import InputGroup from '../../components/InputGroup'

const User = () => {
  const router = useRouter()

  const [userRole, setUserRole] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')

  function handleUserNameChange(value: string): void {
    setUserName(value)
  }

  function handleEmailChange(value: string): void {
    setEmail(value)
  }

  function handleRoleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setUserRole(e.target.value)
  }

  function handleCancelClick(e: MouseEvent): void {
    e.preventDefault()
    router.push('/users')
  }

  function handleSaveClick(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    console.log('click')
  }

  return (
    <>
      <Head>
        <title>Capstone Application | User</title>
      </Head>
      <div className="contentHeader">
        <h2>Add new user</h2>
      </div>
      <Form onSubmit={handleSaveClick} className="contentForm">
        <InputGroup onChange={handleUserNameChange} value={userName} name="userName" label="User name:" type="text" />
        <InputGroup onChange={handleEmailChange} value={email} name="email" label="Email" type="email" />
        <FormGroup>
          <Label for="role">Role:</Label>
          <Input id="role" name="role" onChange={handleRoleChange} type="select">
            <option value="owner">Owner</option>
            <option value="project">Project Manager</option>
            <option value="billing">Billing Manager</option>
            <option value="developer">Developer</option>
          </Input>
        </FormGroup>
        <div className="contenFormButton">
          <Button onClick={handleCancelClick} className="buttonCancel" outline>
            Cancel
          </Button>
          <Button className="buttonSave" color="primary">
            Add new user
          </Button>
        </div>
      </Form>
    </>
  )
}
export default User
