import {  Nav, Navbar, Container } from 'react-bootstrap';
import LinkItem from './LinkItem.js';
const links=[
  {
    id:"1",
    title:"Educacion",
    href:"#courses"
  },
  {
    id:"2",
    title:"Proyectos",
    href:"#proyects"
  },
  {
    id:"3",
    title:"Skills",
    href:"#skills"
  }
]


function NavBar() { 
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className='fs-3' href="/">P-FStack</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            { links.map(link => <LinkItem key={"link"+link.id} link={link} />)}
          </Nav>       
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar