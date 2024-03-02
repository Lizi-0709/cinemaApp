import React, { useState } from 'react';
import '../Detail/detail.scss';
import imgUrl from '../../../public/img/indir2.jpg';
import { Row, Col, Button, Modal } from 'react-bootstrap';
import { IoArrowBack } from "react-icons/io5";

import Sidebar from  '../Detail/sidebar.jsx';
import { FaPlay } from "react-icons/fa";
import {useNavigate} from 'react-router-dom';



function Detail  () {
  const [showModal, setShowModal] = useState(false);


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigate =useNavigate();
  const handleGoBack=()=>{
    navigate(-1)
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };






  


  return (
    <>
   
      <div className="header">
       
       
        
       
       <div className="img" >
     
        <img src={imgUrl} alt=""  />
        
        </div>

     
      
        <div className="container">
        
       
        
          <Row className='headerRight'>
            <Col md={6} className="text-right">
              <div className="back">
            <a href="/" onClick={handleGoBack} className=' text-light text-decoration-none fs-4 '><IoArrowBack /> <span className='ms-2'>Back</span></a></div>
              <h1 className='pb-4'><span><b>The Darkest Minds</b></span></h1>
              <div className="detay ">
              <ul className='list-unstyled d-flex m link-offset-2'  >
                <li >yıldızlar</li>
                <li  className='ps-3'>2018</li>
                <li><a href="" className='text-light link-offset-2 link-underline link-underline-opacity-0 ps-3'>  Bilim Kurgu/Aksiyon</a> </li>
                <li  className='ps-3'>1 saaat 45 dakika</li>
              </ul>
              </div>
             
              <p className='pb-3'> Karanlık Zihinler, Yönetmenliğini Jennifer Yuh Nelson'ın yaptığı, Chad Hodge tarafından yazılan 2018 ABD yapımı distopik bilim kurgu/aksiyon filmidir. Alexandra Bracken'ın aynı isimli romanından uyarlanmıştır.</p>
              <p className='pb-5'>Yönetmeni: <a href="#" className='text-info'>Jennifer Yuh Nelson</a></p>
              <div className="button">
                <Button onClick={() => setShowModal(true)} ><FaPlay /><span className='ms-2 '>Play</span></Button>
                <button onClick={ () => toggleSidebar (true)} className='btn btn-primary ms-5'>Bilet Al</button>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Modal className='  flex-column m-5 p-5 ms-2  '
        show={showModal}
        onHide={() => setShowModal(false)}
        backdrop={true}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >

        <Modal.Body className='bg-dark  '
        >
          <iframe className=''
            width="100%"
            height="400px"
            src="https://www.youtube.com/embed/X8sUqhf_1gc?si=ROTDlc-xcJPO1g4z"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Modal.Body>
        <Modal.Footer className='bg-dark'>
    <Button onClick={() => setShowModal(false)} className='btn btn-light text-dark '>Kapat</Button> 
  </Modal.Footer>

      </Modal>
    </>
  );
}

export default Detail; 
