import React, { ChangeEvent, useState, ChangeEventHandler } from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'
import { InputType } from 'reactstrap/lib/Input'

interface IInputGroupProps {
  label: string
  name: string
  type: InputType
  className?: string
  placeholder?: string
  value?: string
  onChange: (value: string) => void
}

const InputGroup = (props: IInputGroupProps): JSX.Element => {
  const { label, name, type, className, placeholder, value } = props
  return (
    <FormGroup>
      <Label className={className} for={name}>
        {label}
      </Label>
      <Input
        value={value}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={(e: ChangeEvent<HTMLInputElement>) => props.onChange(e.target.value)}
      />
    </FormGroup>
  )
}

export default InputGroup
