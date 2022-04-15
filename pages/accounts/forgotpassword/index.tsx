import React from 'react'
import style from '../SignIn/signin.module.css'
import { Button, Form } from 'reactstrap'
import InputGroup from '../../../components/InputGroup'
import Link from 'next/link'

const ForgotPassword = () => {
  return (
    <div className={style.wrap}>
      <div className={style.wrap__header}>
        <h1>CAPSTONE APP</h1>
        <p>Enter you email address. We will send you a new password</p>
      </div>
      <Form className={style.wrap__form}>
        <InputGroup
          name="email"
          label="Email:"
          type="email"
          placeholder="Enter your email"
          className={style.wrap__label}
        />
        <Button className={style.wrap__button} color="primary">
          Reset password
        </Button>
      </Form>
      <Link href="/accounts/SignIn">
        <a className={style.wrap__link}>Log in to your account</a>
      </Link>
    </div>
  )
}

export default ForgotPassword

ForgotPassword.getLayout = function PageLayout(page) {
  return <>{page}</>
}
