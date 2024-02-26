import React from 'react';
import '../Detail/detail.scss';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaRegBookmark } from "react-icons/fa6";
import { IoTicketOutline } from "react-icons/io5";



function Detail() {
  function embedYouTubeVideo() {
    var videoContainer = document.getElementById("videoContainer");
    var embedCode = '<iframe width="560" height="315" src="https://www.youtube.com/embed/v_0GJg_Jnlo?si=dvQjdDgflwatphzq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    videoContainer.innerHTML = embedCode;
  }

  return (
    <>
      <div className="header">
        <Container>
          <Row className=''>

            <Col md={6} className='aciklama'>
              <p className='pb-3'>Buraya yıldız ikonu</p>
              <h1 className='mb-5'>THE <span> <b>WOMAN</b></span> İN THE <span><b>WİNDOW</b></span></h1>
              <h4 className=''>2021 ‧ Gerilim/Gizem ‧ 1 saat 40 dakika</h4>
              <p className='mt-4'>Penceredeki Kadın, yazar AJ Finn'in 2018'de en çok satan aynı adlı romanından uyarlanan, senaryo'sunu Tracy Letts'in yazdığıJoe Wright tarafından yönetilen 2021 Amerikan psikolojik gerilim filmidir.</p>
              <div className="mb-2 mt-5">
                <Button variant="primary" size="lg" onClick={embedYouTubeVideo}>
                  Play icon<div id="videoContainer"></div>
                </Button>

                <Button className='ms-4' variant="secondary" size="lg">
                  <IoTicketOutline />
                </Button>
                <Button className='ms-4' variant="secondary" size="lg">
                  <FaRegBookmark />
                </Button>
              </div>

            </Col>
          </Row>
        </Container>


      </div >
    </>
  )
}

export default Detail