import React from 'react'
import { Nav } from "react-bootstrap";

export default function Nav2() {
  return (
    <div>
    <Nav className="fs-5" fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link className="text-danger" href="/">
          IGDb
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-danger" href="/login">
         Login
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
  )
}
