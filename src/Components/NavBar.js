import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import ProjectPage from './ProjectPage'
  import ResumePage from './ResumePage'
  import HomePage from './HomePage'
  import ContactMePage from './ContactMePage'
  import { Navbar, Nav } from 'react-bootstrap'
  import pdf from './Files/resume_fall_2020.pdf'


function NavBar() {
    return (
        <Router>
            <Navbar  expand="md" style={{backgroundColor:'white'}}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />
                    <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
                    <Nav justify className="ml-auto">
                        <Nav.Link href="/" className="ml-auto">About me</Nav.Link>
                        <Nav.Link href="/Projects" className="ml-auto">Projects</Nav.Link>
                        <Nav.Link  href={pdf} target="__blank" className="ml-auto">Resume</Nav.Link>
                        <Nav.Link href="/ContactMe" className="ml-auto">Contact Me</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
            </Navbar>

            <Switch>
                <Route component={HomePage} exact path="/" />
                <Route component={ProjectPage} path="/Projects" />
                <Route component={ContactMePage} path="/ContactMe" />

            </Switch>

            
        </Router>
    );
  }
  
  export default NavBar;