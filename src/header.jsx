import React,{ Component } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import {BrowserRouter as Router,Switch,Route,Link,Routes} from "react-router-dom";
import App from './App';
import About from './components/about';
import Blog from './components/blog';
import Contact from './components/contact';
import Profile from './components/profile';

export default class header extends Component {
    render() {
        return (
            <Router>
            <div>
                <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand><Link to="/">Easy Learning</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link><Link to="/about">About Us</Link></Nav.Link>
                        <Nav.Link><Link to="/contact">Contact Us</Link></Nav.Link>
                        <Nav.Link><Link to="/blog">Blog</Link></Nav.Link>
                        <Nav.Link><Link to="/profile">Profile</Link></Nav.Link>
                    
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </div>

            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/" element={<App />} />
            </Routes>

            </Router>
        )
    }
}