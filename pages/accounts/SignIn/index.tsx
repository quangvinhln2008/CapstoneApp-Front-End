import React from 'react'
import { Label, Button, Form, FormGroup, Input } from 'reactstrap'
import style from './signin.module.css'
import InputGroup from 'components/layouts/InputGroup'
import Link from 'next/link'

const SignIn = () => {
  return (
    <div className={style.wrap}>
      <div className={style.wrap__header}>
        <h1>CAPSTONE APP</h1>
        <p>Enter you account to log in</p>
      </div>
      <Form className={style.wrap__form}>
        <InputGroup
          name="email"
          label="Email:"
          type="email"
          placeholder="Enter your email"
          className={style.wrap__label}
        />
        <InputGroup
          name="password"
          label="Password:"
          type="password"
          placeholder="Enter your password"
          className={style.wrap__label}
        />
        <Button className={style.wrap__button} color="primary">
          Sign In
        </Button>
      </Form>
      <Link href="/accounts/forgotpassword">
        <a className={style.wrap__link}>Forgot password</a>
      </Link>
    </div>
  )
}

export default SignIn

SignIn.getLayout = function PageLayout(page) {
  return <>{page}</>
}
