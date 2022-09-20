import {Navbar, Container, Nav, Form} from 'react-bootstrap'

type clickProp = {
  setSearch: Function
}

const Navbars = (props:clickProp) => {

    const {setSearch} = props;

  return (
    <Navbar style={{position: 'absolute'}}bg="dark" expand="lg" >
      <Container>
        <Navbar.Brand href="/">My Anime List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            
            {/* <Button variant="outline-success">Search</Button> */}
        </Form>
      </Container>
    </Navbar>
  )
}

export default Navbars