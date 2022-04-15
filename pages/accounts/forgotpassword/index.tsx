import React from 'react'
import style from '../SignIn/signin.module.css'
import { Label, Button, Form, FormGroup, Input } from 'reactstrap'

const ForgotPassword = () => {
  return (
    <div className={style.wrap}>
      <div className={style.wrap__header}>
        <h1>CAPSTONE APP</h1>
        <p>Enter you email address. We will send you a new password</p>
      </div>
      <Form className={style.wrap__form}>
        <FormGroup>
          <Label className={style.wrap__label} for="email">
            Email:
          </Label>
          <Input id="emal" name="email" placeholder="Enter your email" type="email" />
        </FormGroup>
        <Button className={style.wrap__button} color="primary">
          Reset password
        </Button>
      </Form>
      <a href="/accounts/SignIn" className={style.wrap__link}>
        Log in to your account
      </a>
    </div>
  )
}

export default ForgotPassword

ForgotPassword.getLayout = function PageLayout(page) {
  return <>{page}</>
}
