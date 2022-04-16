import Head from 'next/head'
import { useRouter } from 'next/router'
import React, {
  ChangeEvent,
  ChangeEventHandler,
  EventHandler,
  FormEvent,
  FormEventHandler,
  MouseEvent,
  useState
} from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'
import style from './user.module.css'
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
      <div className="content__header">
        <h2>Add new user</h2>
      </div>
      <Form onSubmit={handleSaveClick} className="content__form">
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
