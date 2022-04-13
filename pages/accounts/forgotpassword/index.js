import React from 'react'
import Layout from 'components/layouts/Layout'
import { Label, Button, Form, FormGroup, Input } from 'reactstrap'

function ForgotPassword() {
  return (
    <Layout>
      <div className="wrap__header">
        <h1>CAPSTONE APP</h1>
        <p>Enter you email address. We will send you a new password</p>
      </div>
      <Form className="wrap__form">
        <FormGroup>
          <Label className="wrap__label" for="email">
            Email:
          </Label>
          <Input id="emal" name="email" placeholder="Enter your email" type="email" />
        </FormGroup>
        <Button className="wrap__button" color="primary">
          {' '}
          Reset password
        </Button>
      </Form>
      <a href="/accounts/SignIn" className="wrap__link">
        Log in to your account
      </a>
    </Layout>
  )
}

export default ForgotPassword
