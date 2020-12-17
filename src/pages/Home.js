/*
  Ini halaman home, gak ada yg istimewa disini
*/

import React from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Jumbotron,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import MainDropdown from "components/MainDropdown";
import TypeDropdown from "components/TypeDropdown";
import TitleDropdown from "components/TitleDropdown";

const Home = () => {
  const [dropdown, setDropdown] = React.useState("");
  const [type, setType] = React.useState("");

  React.useEffect(() => {
    console.log(type);
  }, [dropdown, type]);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/">
            <Navbar.Brand color="white">React Trial</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {/* <Link to="/login">
                <Button variant="primary">
                  {localStorage.getItem("USER") ? "Dashboard" : "Login"}
                </Button>
              </Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Jumbotron>
        <Container>
          <h1>Hello!</h1>
          <p>Jadi ini ceritanya contoh beberapa component dropdown</p>
        </Container>
      </Jumbotron>
      <Container className="text-center">
        <Card>
          <Card.Body>
            <Row>
              <Col md="4" lg="4">
                <MainDropdown setDropdown={setDropdown} />
              </Col>
              <Col md="4" lg="4">
                <TypeDropdown dropdown={dropdown} setType={setType} />
              </Col>
              <Col md="4" lg="4">
                <TitleDropdown type={type} />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Home;
