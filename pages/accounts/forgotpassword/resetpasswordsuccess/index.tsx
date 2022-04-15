import React from 'react'
import style from '../SignIn/signin.module.css'
import { Label, Button, Form, FormGroup, Input } from 'reactstrap'

const ResetPassSuccess = () => {
  return (
    <div className={style.wrap}>
      <div className={style.wrap__header}>
        <h1>CAPSTONE APP</h1>
        <p>Enter you email address. We will send you a new password</p>
      </div>
      <div className={style.wrap__info}>
        <p>An email have send to your email address. Check your email to get new password.</p>
      </div>
      <a href="/accounts/SignIn" className={style.wrap__link}>
        Log in to your account
      </a>
    </div>
  )
}

export default ResetPassSuccess

ResetPassSuccess.getLayout = function PageLayout(page) {
  return <>{page};</>
}
