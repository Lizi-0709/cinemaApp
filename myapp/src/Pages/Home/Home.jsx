import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import UserImg from '../../../public/img/man.png'
import SliderCard from '../../assets/SliderCard/SliderCard';
import CenterModeSlider from '../../assets/CenterModeSlider/CenterModeSlider';




function Home() {
  const sliderCards2 = [
    { id: 1, title: 'Card 1', content: 'Content 1', img: 'https://i.pinimg.com/474x/75/7f/26/757f26a9d80eae652757df2dacd6aef6.jpg' },
    { id: 2, title: 'Card 2', content: 'Content 2', img: 'https://tr.web.img3.acsta.net/r_1280_720/medias/nmedia/18/85/59/68/19816803.jpg' },
    { id: 3, title: 'Card 3', content: 'Content 3', img: 'https://m.media-amazon.com/images/M/MV5BMjE0MjIwMDE2MV5BMl5BanBnXkFtZTgwMzM5MDQzNTM@._V1_.jpg' },
    { id: 4, title: 'Card 4', content: 'Content 4', img: 'https://m.media-amazon.com/images/I/51fWOBx3agL._AC_.jpg' },
    { id: 5, title: 'Card 5', content: 'Content 5', img: 'https://i.ebayimg.com/images/g/R-0AAOSw-jhUEyJ1/s-l400.jpg' },
    { id: 6, title: 'Card 6', content: 'Content 6', img: 'https://i.ebayimg.com/images/g/onAAAOSw~W5ifP7J/s-l1200.jpg' },
    { id: 7, title: 'Card 7', content: 'Content 7', img: 'https://i.pinimg.com/474x/38/b7/55/38b75579600e6d4c098ed2a0243aec52.jpg' },
    { id: 8, title: 'Card 8', content: 'Content 8', img: 'https://i.pinimg.com/474x/75/7f/26/757f26a9d80eae652757df2dacd6aef6.jpg' },
    { id: 9, title: 'Card 9', content: 'Content 9', img: 'https://tr.web.img3.acsta.net/r_1280_720/medias/nmedia/18/85/59/68/19816803.jpg' },
    { id: 10, title: 'Card 10', content: 'Content 10', img: 'https://m.media-amazon.com/images/I/51fWOBx3agL._AC_.jpg' },
    { id: 11, title: 'Card 11', content: 'Content 11', img: 'https://i.ebayimg.com/images/g/R-0AAOSw-jhUEyJ1/s-l400.jpg' },
    { id: 12, title: 'Card 12', content: 'Content 12', img: 'https://i.ebayimg.com/images/g/onAAAOSw~W5ifP7J/s-l1200.jpg' },
    { id: 13, title: 'Card 13', content: 'Content 13', img: 'https://i.pinimg.com/474x/38/b7/55/38b75579600e6d4c098ed2a0243aec52.jpg' },
    { id: 14, title: 'Card 14', content: 'Content 14', img: 'https://i.pinimg.com/474x/75/7f/26/757f26a9d80eae652757df2dacd6aef6.jpg' },
    { id: 15, title: 'Card 15', content: 'Content 15', img: 'https://tr.web.img3.acsta.net/r_1280_720/medias/nmedia/18/85/59/68/19816803.jpg' },
    { id: 16, title: 'Card 16', content: 'Content 16', img: 'https://m.media-amazon.com/images/M/MV5BMjE0MjIwMDE2MV5BMl5BanBnXkFtZTgwMzM5MDQzNTM@._V1_.jpg' },


  ];


  return (
    <div className='Home  p-3'>
      <div className="HomePageBgDiv position-relative rounded-5">
        <div className="black-bg-theme rounded-5 ">


          <Navbar expand="lg" className="text-light rounded-5">
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
                {/* AccountBtn */}
                <Nav className='ms-auto account-div m-0 mt-5'>
                  <NavLink to={"/profile"} exact activeClassName='active' className='text-light text-decoration-none mx-2 p-1 d-flex align-items-center'><img className='' src={UserImg} alt="" /></NavLink>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <div className="home-content d-flex align-items-center">
            <Container fluid='md'>
              <Row>
                <Col md={6} className='col-left'>
                  <div className="content-left">
                    <div className="mt-5 child-1 d-flex p-1">
                      <h4 className='shadow text-white fw-bold w-25  m-0 '>DEC 18, 2009</h4>
                      <div className="border-2 border-bottom w-75 mb-2"></div>
                    </div>
                    <div className="mt-4 child-2">
                      <h1 className='fw-bold w-100 text-white'>LOREM IPSUM DOLOR</h1>
                    </div>
                    <div className="mt-4 child-3">
                      <h6 className='text-white'>A FILM BY <span className='fw-bold'>X</span></h6>
                    </div>
                    <div className="mt-4 child-4  rounded-4 p-0">
                      <p className='text-white m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nulla facere magni atque quibusdam magnam repudiandae dolorem maiores optio recusandae deleniti excepturi, non tempore minus ut, ab similique soluta rem?</p>
                    </div>
                    <div className="mt-4 child-5 d-flex gap-3">
                      <button className='w-25 p-2 rounded-5 m-0 text-white fw-semibold'>More</button>
                      <button className='w-25 p-2 rounded-5 m-0 text-white fw-semibold'>Lorem</button>
                    </div>
                  </div>
                </Col>
                <Col md={6} className='col-right'>
                  {/* <div className="content-right d-flex gap-1 justify-content-center flex-column align-items-center h-100 ">
                    <button className='w-50 p-2 rounded-5 m-0 text-white fw-bolder'>Log In</button>
                    <h4 className='text-white fw-bold'>or</h4>
                    <button className='w-50 p-2 rounded-5 m-0 text-white fw-bolder'>Sign Up</button>
                  </div> */}
                </Col>
              </Row>
            </Container>
          </div>
        </div>


      </div >


      {/* Header-end */}







      {/* slider */}


      <Container fluid="md">
        <div className="my-5">

          <CenterModeSlider ImgData={sliderCards2} />
        </div>
      </Container>


      {/* slider end */}








      <div className="slider-2-bg ">
        <div className="slider-content-2-parent p-1">
          <Container fluid='md'>
            <h6 className='text-white fw-bold p-1 pb-0 mt-1 text-uppercase'>test</h6>
            <div className="slider-content-2 d-flex overflow-x-auto overflow-y-hidden gap-2">


              {sliderCards2.map((item) => (

                <div key={item.id} className="slider-2-card d-flex mb-3 position-relative">
                  {/* stars */}
                  <div className="rating-div gap-2 position-absolute d-flex justify-content-center rounded-3 align-items-center p-1">
                    <svg className="stars" viewBox="0 0 24 24" fill="#9290C3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    <h6 className='rating-point p-0 m-0 fw-bold'>10.0</h6>

                  </div>

                  {/* stars-end */}
                  {/* bookmark */}
                  <svg className="bookmarks position-absolute  p-1 rounded-3 fw-bold shadow " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  {/* bookmark-end */}


                  <img className='' src={item.img} alt="" />
                  {/* <h2>{item.title}</h2>
                    <p>{item.content}</p> */}
                </div>


              ))}


            </div>
          </Container>
        </div>
      </div>


      {/* example-clone */}
      <div className="slider-2-bg ">
        <div className="slider-content-2-parent p-1">
          <Container fluid='md'>
            <h6 className='text-white fw-bold p-1 pb-0 mt-1 text-uppercase'>test</h6>
            <div className="slider-content-2 d-flex overflow-x-auto overflow-y-hidden gap-2">


              {sliderCards2.map((item) => (

                <div key={item.id} className="slider-2-card d-flex mb-3 position-relative">
                  {/* stars */}
                  <div className="rating-div gap-2 position-absolute d-flex justify-content-center rounded-3 align-items-center p-1">
                    <svg className="stars" viewBox="0 0 24 24" fill="#9290C3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    <h6 className='rating-point p-0 m-0 fw-bold'>10.0</h6>

                  </div>

                  {/* stars-end */}
                  {/* bookmark */}
                  <svg className="bookmarks position-absolute  p-1 rounded-3 fw-bold shadow " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  {/* bookmark-end */}


                  <img className='' src={item.img} alt="" />
                  {/* <h2>{item.title}</h2>
                    <p>{item.content}</p> */}
                </div>


              ))}


            </div>
          </Container>
        </div>
      </div>

      {/* example 2 */}
      <div className="slider-2-bg ">
        <div className="slider-content-2-parent p-1">
          <Container fluid='md'>
            <h6 className='text-white fw-bold p-1 pb-0 mt-1 text-uppercase'>test</h6>
            <div className="slider-content-2 d-flex overflow-x-auto overflow-y-hidden gap-2">


              {sliderCards2.map((item) => (

                <div key={item.id} className="slider-2-card d-flex mb-3 position-relative">
                  {/* stars */}
                  <div className="rating-div gap-2 position-absolute d-flex justify-content-center rounded-3 align-items-center p-1">
                    <svg className="stars" viewBox="0 0 24 24" fill="#9290C3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    <h6 className='rating-point p-0 m-0 fw-bold'>10.0</h6>

                  </div>

                  {/* stars-end */}
                  {/* bookmark */}
                  <svg className="bookmarks position-absolute  p-1 rounded-3 fw-bold shadow " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  {/* bookmark-end */}


                  <img className='' src={item.img} alt="" />
                  {/* <h2>{item.title}</h2>
                    <p>{item.content}</p> */}
                </div>


              ))}


            </div>
          </Container>
        </div>
      </div>

     


    </div >
  )
}

export default Home