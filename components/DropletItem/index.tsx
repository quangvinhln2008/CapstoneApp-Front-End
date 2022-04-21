import Link from 'next/link'
import React, { ChangeEvent, useState, ChangeEventHandler } from 'react'
import { Button, ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import style from './dropletItem.module.scss'

interface IInputGroupProps {
  row: String
  name: string
  ip: string
  createAt: string
}

const DropletItem = (props: IInputGroupProps): JSX.Element => {
  const { row, name, ip, createAt } = props
  const [dropdownOpen, setDropdownOpen] = useState(false)

  function handleToogleDropdown(): void {
    setDropdownOpen(!dropdownOpen)
  }
  return (
    <>
      <tr>
        <th scope="row">{row}</th>
        <td>
          <Link href="/droplets/1">
            <a className={style.dropletlDetail}>{name}</a>
          </Link>
        </td>
        <td>{ip}</td>
        <td>{createAt}</td>
        <td>
          <ButtonDropdown isOpen={dropdownOpen} toggle={handleToogleDropdown}>
            <DropdownToggle caret color="primary">
              More Action
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="/droplets/1/history">View History</DropdownItem>
              <DropdownItem href="/droplets/1/monitoring">Monitoring</DropdownItem>
              <DropdownItem divider />
              <DropdownItem className={style.buttonDestroy}>Destroy</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </td>
      </tr>
    </>
  )
}

export default DropletItem
