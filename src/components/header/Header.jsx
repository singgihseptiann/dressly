import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaBarsStaggered } from "react-icons/fa6";
import Logo from "../../assets/image/logo/logo.png";
function Header() {
  return (
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FaBarsStaggered />
        </Navbar.Toggle>
        <Navbar.Brand href="#" className="mx-auto mx-lg-0">
          <Image src={Logo} />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link">Shop</Nav.Link>
            <Nav.Link href="#link">Shop</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
