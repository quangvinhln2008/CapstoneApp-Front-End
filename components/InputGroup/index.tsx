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
}

const InputGroup = (props: IInputGroupProps): JSX.Element => {
  const [valueInput, setValueInput] = useState('')

  return (
    <FormGroup>
      <Label className={props.className} for={props.name}>
        {props.label}
      </Label>
      <Input
        value={valueInput}
        id={props.name}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setValueInput(e.target.value)}
      />
    </FormGroup>
  )
}

export default InputGroup
