import React, { useState } from 'react'
import { Label, Button, Form, FormGroup, Input } from 'reactstrap'
import style from './signin.module.scss'
import InputGroup from '../../../components/InputGroup'
import Link from 'next/link'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleEmailChange(value: string): void {
    setEmail(value)
  }

  function handlePasswordChange(value: string): void {
    setPassword(value)
  }

  return (
    <div className={style.wrap}>
      <div className={style.wrapHeader}>
        <h1>CAPSTONE APP</h1>
        <p>Enter you account to log in</p>
      </div>
      <Form className={style.wrapForm}>
        <InputGroup
          onChange={handleEmailChange}
          value={email}
          name="email"
          label="Email:"
          type="email"
          placeholder="Enter your email"
          className={style.wrapLabel}
        />
        <InputGroup
          onChange={handlePasswordChange}
          value={password}
          name="password"
          label="Password:"
          type="password"
          placeholder="Enter your password"
          className={style.wrapLabel}
        />
        <Button className={style.wrapButton} color="primary">
          Sign In
        </Button>
      </Form>
      <Link href="/accounts/forgotpassword">
        <a className={style.wrapLink}>Forgot password</a>
      </Link>
    </div>
  )
}

export default SignIn

SignIn.getLayout = function PageLayout(page) {
  return <>{page}</>
}
