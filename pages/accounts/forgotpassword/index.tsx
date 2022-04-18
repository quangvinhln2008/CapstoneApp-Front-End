import React from 'react'
import style from '../SignIn/signin.module.scss'
import { Button, Form } from 'reactstrap'
import InputGroup from '../../../components/InputGroup'
import Link from 'next/link'

const ForgotPassword = () => {
  return (
    <div className={style.wrap}>
      <div className={style.wrapHeader}>
        <h1>CAPSTONE APP</h1>
        <p>Enter you email address. We will send you a new password</p>
      </div>
      <Form className={style.wrapForm}>
        <InputGroup
          name="email"
          label="Email:"
          type="email"
          placeholder="Enter your email"
          className={style.wrapLabel}
        />
        <Button className={style.wrapButton} color="primary">
          Reset password
        </Button>
      </Form>
      <Link href="/accounts/SignIn">
        <a className={style.wrapLink}>Log in to your account</a>
      </Link>
    </div>
  )
}

export default ForgotPassword

ForgotPassword.getLayout = function PageLayout(page) {
  return <>{page}</>
}
