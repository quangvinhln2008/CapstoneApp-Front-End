import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FormEvent, MouseEvent, useEffect, useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { Alert, Button, Form, FormGroup, Input, Label, Modal, Table } from 'reactstrap'
import InputGroup from '../../../components/InputGroup'
import style from './configuration.module.scss'

const Configuration = () => {
  const router = useRouter()

  const [cloudServices, setCloudServices] = useState('')
  const [tokenAccess, setTokenAccess] = useState('')
  const [toogleMessage, setToogleMessage] = useState(false)
  const elementInfo = (
    <span>
      <Link href="/users">Click here</Link> to retrive and manage resources of cloud service.
    </span>
  )
  function handleTokenAccessChange(value: string): void {
    setTokenAccess(value)
  }

  function handleCloudServicesChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setCloudServices(e.target.value)
  }

  function handleCancelClick(e: MouseEvent): void {
    e.preventDefault()
    router.push('/')
  }

  function handleSaveClick(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault()

    setToogleMessage(!toogleMessage)

    console.log('click')
  }
  return (
    <>
      <Head>
        <title>Capstone Application | Configuration cloud</title>
      </Head>
      <div className="contentHeader">
        <h2>Configuration Cloud Services</h2>
      </div>
      <Form onSubmit={handleSaveClick} className="contentForm">
        <FormGroup>
          <Label for="cloudServices">Cloud services:</Label>
          <Input id="cloudServices" name="cloudServices" onChange={handleCloudServicesChange} type="select">
            <option value="">Choose cloud services...</option>
            <option value="DO">Digital Occens</option>
            <option value="AWS">AWS</option>
          </Input>
        </FormGroup>
        <InputGroup
          onChange={handleTokenAccessChange}
          value={tokenAccess}
          name="tokenAccess"
          label="Token Access:"
          type="text"
        />
        <div className="contenFormButton">
          <Button onClick={handleCancelClick} className="buttonCancel" outline>
            Cancel
          </Button>
          <Button className="buttonSave" color="primary">
            Connect cloud services
          </Button>
        </div>
        <Alert className={style.alertToogle} color="success" isOpen={toogleMessage}>
          <FaCheck />
          <span> Connect cloud services successfull</span>
        </Alert>
        {toogleMessage ? elementInfo : ''}
      </Form>
    </>
  )
}

export default Configuration
