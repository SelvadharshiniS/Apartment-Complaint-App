
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Accordion} from 'react-bootstrap';
import BasicExample from './BasicExample';
import { Link } from 'react-router-dom';
import "./Home.css";

function Home() {
 
  return (
    
    <div className="home"> 
       
    <Navbar expand="lg" className="SAMPLE">
      <Container>
        <Navbar.Brand href="#home">QUERIES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="me-auto">
          
            <Link to ='login'>    
           <Nav.Link href="#Login"><button> Login</button></Nav.Link></Link>
           <Link to ='signup'>
            <Nav.Link href="#signup"><button>Signup</button></Nav.Link></Link>
            <Link to='aboutus'>
            <Nav.Link href="#aboutus"><button>AboutUs</button></Nav.Link></Link>
            
            <Link to='contact'>
            <Nav.Link href="#contact"><button>Contact</button></Nav.Link></Link>
            <Link to='complaintform'>
           <Nav.Link href="/complaint-form"><button>ComplaintForm</button></Nav.Link></Link>
           <Link to='dashboard'>
            <Nav.Link href="#dashboard"><button>Dashboard</button></Nav.Link></Link>
            <Link to='complaintlist'>
            <Nav.Link href="#complaintlist"><button>ComplaintList</button></Nav.Link></Link>  
            <Link to='feedback'>
            <Nav.Link href="#feedback"><button>Feedback</button></Nav.Link></Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
    
    <Container className="center-container">
     <BasicExample />
      </Container>
     
     
   
    </div> 
    
);
}

export default Home;
