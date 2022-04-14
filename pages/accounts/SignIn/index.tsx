import React from 'react'
// import Layout from 'components/layouts/Layout'
import { Label, Button, Form, FormGroup, Input } from 'reactstrap'
import style from './SignIn.module.css'

function SignIn() {
  return (
    <div className={style.wrap}>
      <div className={style.wrap__header}>
        <h1>CAPSTONE APP</h1>
        <p>Enter you account to log in</p>
      </div>
      <Form className={style.wrap__form}>
        <FormGroup>
          <Label className={style.wrap__label} for="email">
            Email:
          </Label>
          <Input id="emal" name="email" placeholder="Enter your email" type="email" />
        </FormGroup>
        <FormGroup>
          <Label className={style.wrap__label} for="password">
            Password:
          </Label>
          <Input id="password" name="password" placeholder="Enter your password" type="password" />
        </FormGroup>
        <Button className={style.wrap__button} color="primary">
          Sign In
        </Button>
      </Form>
      <a href="/accounts/forgotpassword" className={style.wrap__link}>
        Forgot password
      </a>
    </div>
  )
}

export default SignIn

SignIn.getLayout = function PageLayout(page) {
  return <>{page}</>
}
