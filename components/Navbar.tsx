import { Navbar as NavbarBS, Container, Nav, NavDropdown } from 'react-bootstrap'
import Link from 'next/link'

const Navbar = () => {
    return (
        <NavbarBS bg="dark" expand="lg" variant="dark">
        <Container>
          <Link href="/">
            <NavbarBS.Brand href="/">Christopher Kapic</NavbarBS.Brand>
          </Link>
          <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
          <NavbarBS.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="http://blog.kapic.io">Blog</Nav.Link>
              <Link href="/portfolio">
                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
              </Link>
              <NavDropdown title="Socials" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://github.com/christopher-kapic">Github</NavDropdown.Item>
                <NavDropdown.Item href="https://linkedin.com/in/christopher-kapic">LinkedIn</NavDropdown.Item>
                <NavDropdown.Item href="https://www.youtube.com/channel/UCuXgDzDJhNAwvzvc62GnYwA">YouTube</NavDropdown.Item>
                <NavDropdown.Item href="https://mastodon.kapic.io/@christopher">Mastodon</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </NavbarBS.Collapse>
        </Container>
      </NavbarBS>
    )
}

export default Navbar;