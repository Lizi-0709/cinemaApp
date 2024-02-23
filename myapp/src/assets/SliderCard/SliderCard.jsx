import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './SliderCard.scss'

function SliderCard({ imageSrc1, imageSrc2, imageSrc3, title1, title2, title3, text1, text2, text3, buttonText1, buttonText2, buttonText3 }) {
    return (
        <>
            <Carousel fade className='w-25 rounded-4 position-relative'>
                <Carousel.Item>
                    <Card className='text-white rounded-4'>
                        <Card.Header className='shadow d-flex align-items-center p-3'>
                            <Card.Img className='w-100 rounded-3 ' variant="top" src={imageSrc1} />
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>{title1}</Card.Title>
                            <Card.Text>{text1}</Card.Text>
                            <Button variant="primary">{buttonText1}</Button>
                        </Card.Body>
                    </Card>


                </Carousel.Item>
                <Carousel.Item>
                    <Card className='text-white rounded-4'>
                        <Card.Header className='shadow d-flex align-items-center p-3'>
                            <Card.Img className='w-100 rounded-3 ' variant="top" src={imageSrc2} />
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>{title2}</Card.Title>
                            <Card.Text>{text2}</Card.Text>
                            <Button variant="primary">{buttonText2}</Button>
                        </Card.Body>
                    </Card>


                </Carousel.Item>
                <Carousel.Item>
                    <Card className='text-white rounded-4'>
                        <Card.Header className='shadow d-flex align-items-center p-3'>
                            <Card.Img className='w-100 rounded-3 ' variant="top" src={imageSrc3} />
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>{title3}</Card.Title>
                            <Card.Text>{text3}</Card.Text>
                            <Button variant="primary">{buttonText3}</Button>
                        </Card.Body>
                    </Card>

                </Carousel.Item>

            </Carousel>
        </>
    )
}

export default SliderCard