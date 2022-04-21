import DropletItem from 'components/DropletItem'
import Head from 'next/head'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import React, { MouseEvent, useState } from 'react'
import {
  Button,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Table
} from 'reactstrap'
import style from './droplet.module.scss'

const Droplet = () => {
  const router = useRouter()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  function handleToogleDropdown(): void {
    setDropdownOpen(!dropdownOpen)
  }

  return (
    <>
      <Head>
        <title>Capstone Application | Droplets</title>
      </Head>
      <div className="contentHeader">
        <h2>Droplet</h2>
      </div>
      <div className="contentFilter">
        <span>Filter by:</span>
        <Input id="dropletName" name="dropletName" placeholder="Droplet name....." type="text" />
      </div>
      <div className="contentTable">
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Droplet Name</th>
              <th>IP Address</th>
              <th>Create at</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <DropletItem row="1" name="DL 01" ip="128.199.85.186" createAt="2018-09-27" />
            <DropletItem row="2" name="DL 02" ip="128.199.85.186" createAt="2018-09-27" />
            <DropletItem row="3" name="DL 03" ip="128.199.85.186" createAt="2018-09-27" />
          </tbody>
        </Table>
      </div>
    </>
  )
}
export default Droplet
