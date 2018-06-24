import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

const Header = props => {
  const pathname = props.location.pathname

  return (
    <header>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>Avatar NEXT</Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem
              componentClass={Link}
              href="/"
              to="/"
              active={pathname === '/'}
            >
              Trang Chủ
            </NavItem>
            <NavItem
              componentClass={Link}
              href="/about"
              to="/about"
              active={pathname === '/about'}
            >
              Về Trang Này
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default withRouter(Header)
