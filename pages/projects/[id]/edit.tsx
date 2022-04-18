import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { FormEvent, MouseEvent, useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Modal, Table } from 'reactstrap'
import InputGroup from '../../../components/InputGroup'

const Project = () => {
  const router = useRouter()

  const [purpose, setPurpose] = useState('')
  const [enviroment, setEnviroment] = useState('')
  const [projectName, setProjectName] = useState('')
  const [decription, setDecription] = useState('')

  function handleProjectNameChange(value: string): void {
    setProjectName(value)
  }

  function handleDecriptionChange(value: string): void {
    setDecription(value)
  }

  function handlePurposeChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setPurpose(e.target.value)
  }

  function handleEnviromentChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setEnviroment(e.target.value)
  }

  function handleCancelClick(e: MouseEvent): void {
    e.preventDefault()
    router.push('/projects')
  }

  function handleSaveClick(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    console.log('click')
  }

  return (
    <>
      <Head>
        <title>Capstone Application | Edit new project</title>
      </Head>
      <div className="contentHeader">
        <h2>Edit New Project</h2>
      </div>
      <Form onSubmit={handleSaveClick} className="contentForm">
        <InputGroup
          onChange={handleProjectNameChange}
          value={projectName}
          name="projectName"
          label="Project name:"
          type="text"
        />
        <InputGroup
          onChange={handleDecriptionChange}
          value={decription}
          name="decription"
          label="Decription:"
          type="text"
        />
        <FormGroup>
          <Label for="purpose">Purpose:</Label>
          <Input id="purpose" name="purpose" onChange={handlePurposeChange} type="select">
            <option value="0">Choose purpose....</option>
            <option value="1">Just trying out DigitalOcean</option>
            <option value="2">Class project / Educational purposes</option>
            <option value="3">Website or blog</option>
            <option value="3">Web Application</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="enviroment">Role:</Label>
          <Input id="enviroment" name="enviroment" onChange={handleEnviromentChange} type="select">
            <option value="0">Choose enviroment...</option>
            <option value="1">Development</option>
            <option value="2">Staging</option>
            <option value="3">Production</option>
          </Input>
        </FormGroup>
        <div className="contenFormButton">
          <Button onClick={handleCancelClick} className="buttonCancel" outline>
            Cancel
          </Button>
          <Button className="buttonSave" color="primary">
            Update project
          </Button>
        </div>
      </Form>
    </>
  )
}
export default Project
