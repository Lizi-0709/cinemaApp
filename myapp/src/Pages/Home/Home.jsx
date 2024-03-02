import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CenterModeSlider from '../../assets/CenterModeSlider/CenterModeSlider';
import FilterSlider from '../../assets/FilterSlider/FilterSlider';
import { FaFire, FaHeart } from "react-icons/fa";
import { GiSpinningSword } from "react-icons/gi";
import { TbHorseToy } from "react-icons/tb";
import { GrTest } from "react-icons/gr";
import MultiSlider from '../../assets/MultiSlider/MultiSlider';
import BtnOutline from '../../assets/BtnOutline/BtnOutline';





function Home() {
  const Categories = [
    { id: 1, title: 'Trending', icon: <FaFire /> },
    { id: 3, title: 'Action', icon: <GiSpinningSword /> },
    { id: 2, title: 'Romance', icon: <FaHeart /> },
    { id: 4, title: 'Animation', icon: <TbHorseToy /> },
    { id: 5, title: 'Test', icon: <GrTest /> },
    { id: 6, title: 'Test', icon: <GrTest /> },
    { id: 7, title: 'Test', icon: <GrTest /> },
    { id: 9, title: 'Test', icon: <GrTest /> },
    { id: 10, title: 'Test', icon: <GrTest /> },
    { id: 12, title: 'Test', icon: <GrTest /> },
    { id: 13, title: 'Test', icon: <GrTest /> },
    { id: 14, title: 'Test', icon: <GrTest /> },
    { id: 15, title: 'Test', icon: <GrTest /> },
  ]
  const sliderCards2 = [
    { years:'2012', rating: '8.2', id: 1, title: 'Card 1', content: 'Content 1', img: 'https://i.pinimg.com/474x/75/7f/26/757f26a9d80eae652757df2dacd6aef6.jpg' },
    { years:'2023', rating: '7.9', id: 2, title: 'Card 2', content: 'Content 2', img: 'https://tr.web.img3.acsta.net/r_1280_720/medias/nmedia/18/85/59/68/19816803.jpg' },
    { years:'2013', rating: '8.9', id: 3, title: 'Card 3', content: 'Content 3', img: 'https://m.media-amazon.com/images/M/MV5BMjE0MjIwMDE2MV5BMl5BanBnXkFtZTgwMzM5MDQzNTM@._V1_.jpg' },
    { years:'2002', rating: '7.5', id: 4, title: 'Card 4', content: 'Content 4', img: 'https://m.media-amazon.com/images/I/51fWOBx3agL._AC_.jpg' },
    { years:'2008', rating: '6.9', id: 5, title: 'Card 5', content: 'Content 5', img: 'https://i.ebayimg.com/images/g/R-0AAOSw-jhUEyJ1/s-l400.jpg' },
    { years:'2015', rating: '6.9', id: 6, title: 'Card 6', content: 'Content 6', img: 'https://i.ebayimg.com/images/g/onAAAOSw~W5ifP7J/s-l1200.jpg' },
    { years:'2022', rating: '8.2', id: 7, title: 'Card 7', content: 'Content 7', img: 'https://i.pinimg.com/474x/38/b7/55/38b75579600e6d4c098ed2a0243aec52.jpg' },
    { years:'2013', rating: '8.9', id: 8, title: 'Card 8', content: 'Content 8', img: 'https://i.pinimg.com/474x/75/7f/26/757f26a9d80eae652757df2dacd6aef6.jpg' },
    { years:'2009', rating: '9.9', id: 9, title: 'Card 9', content: 'Content 9', img: 'https://tr.web.img3.acsta.net/r_1280_720/medias/nmedia/18/85/59/68/19816803.jpg' },
    { years:'2011', rating: '8.9', id: 10, title: 'Card 10', content: 'Content 10', img: 'https://m.media-amazon.com/images/I/51fWOBx3agL._AC_.jpg' },
    { years:'2005', rating: '8.2', id: 11, title: 'Card 11', content: 'Content 11', img: 'https://i.ebayimg.com/images/g/R-0AAOSw-jhUEyJ1/s-l400.jpg' },
    { years:'2019', rating: '8.9', id: 12, title: 'Card 12', content: 'Content 12', img: 'https://i.ebayimg.com/images/g/onAAAOSw~W5ifP7J/s-l1200.jpg' },
    { years:'2020', rating: '7.9', id: 13, title: 'Card 13', content: 'Content 13', img: 'https://i.pinimg.com/474x/38/b7/55/38b75579600e6d4c098ed2a0243aec52.jpg' },
    { years:'2021', rating: '8.9', id: 14, title: 'Card 14', content: 'Content 14', img: 'https://i.pinimg.com/474x/75/7f/26/757f26a9d80eae652757df2dacd6aef6.jpg' },
    { years:'2022', rating: '8.2', id: 15, title: 'Card 15', content: 'Content 15', img: 'https://tr.web.img3.acsta.net/r_1280_720/medias/nmedia/18/85/59/68/19816803.jpg' },
    { years:'2023', rating: '6.5', id: 16, title: 'Card 16', content: 'Content 16', img: 'https://m.media-amazon.com/images/M/MV5BMjE0MjIwMDE2MV5BMl5BanBnXkFtZTgwMzM5MDQzNTM@._V1_.jpg' },
  ];


  return (
    <div className='Home p-3'>
      <div className="HomePageBgDiv position-relative rounded-5 mt-5">
        <div className="black-bg-theme rounded-5 ">
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
                      {/* <button className='w-25 p-2 rounded-5 m-0 text-white fw-semibold'>More</button>
                      <button className='w-25 p-2 rounded-5 m-0 text-white fw-semibold'>Lorem</button> */}
                      <BtnOutline />
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div >
      {/* Header-end */}

      {/* slider */}
      <div className="first-slider-bg p-1 rounded-5 mt-2">
        <Container fluid="md">
          <div className="my-5 parent-first-slider">
            <h4 className='text-center fw-bold'>MOVIES</h4>
            <CenterModeSlider ImgData={sliderCards2} />
          </div>
        </Container>
      </div>
      {/* slider end */}

      {/* filter div */}
      <div className="filter-div-bg shadow pt-2 pb-1 mt-3 rounded-5">
        <Container fluid>
          <FilterSlider Data={Categories} />
        </Container>
      </div>
      {/* filter div end */}

      
      <div className="multi-slider-bg ">
        <Container fluid='md'>
          <MultiSlider Data={sliderCards2} />
          <MultiSlider Data={sliderCards2} />
          <MultiSlider Data={sliderCards2} />
        </Container>
      </div>
    </div >
  )
}

export default Home