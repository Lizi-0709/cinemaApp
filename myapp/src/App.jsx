import { useState } from 'react'
import './App.scss'
import { Routes, Link, Route, NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import UserImg from '../public/img/man.png'
import { Container } from 'react-bootstrap';
import Home from '../src/Pages/Home/Home'
import Profile from '../src/Pages/Profile/Profile'
import Detail from '../src/Pages/Detail/Detail'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar expand="lg" className="text-light  position-fixed w-100 ">
        <Container fluid="md">
          <Navbar.Brand><h2 className='Logo fw-bold pt-3 text-white'>CineApp</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto mt-3">
              <NavLink to={"/"} exact activeClassName='active' className='text-light text-decoration-none mx-4 p-1'>HOME</NavLink>
              <NavLink to={"/detail"} exact activeClassName='active' className='text-light text-decoration-none mx-2 p-1'>DETAIL</NavLink>
              <NavLink to={"/lorem"} exact activeClassName='active' className='text-light text-decoration-none mx-2 p-1'>LOREM</NavLink>
              <NavLink to={"/lorem"} exact activeClassName='active' className='text-light text-decoration-none mx-2 p-1'>IPSUM</NavLink>
            </Nav>
            <Nav className='ms-auto account-div m-0 mt-5'>
              <NavLink to={"/profile"} exact activeClassName='active' className='text-light text-decoration-none mx-2 p-1 d-flex align-items-center'><img className='' src={UserImg} alt="" /></NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/detail' element={<Detail />} />
      </Routes>
    </>
  )
}

export default App
