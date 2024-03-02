import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './MultiSlider.scss'

function MultiSlider({ Data }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 8
    };
    return (
        <div className="multi-slider-container my-5">
            <Slider {...settings}>
                {Data.map((item) => (
                    <div key={item.id} className="slider-2-card shadow rounded-2 mb-1 position-relative">
                        <svg className="bookmarks position-absolute  p-1 rounded-3 fw-bold shadow " fill="none" viewBox="0 0 24 24" stroke="green">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                        <img className='' src={item.img} alt="" />
                        
                            <h6 className="text-white m-0 p-1 ms-2 fw-bold">{item.content}</h6>
                        <div className="rating-div shadow gap-2 m-0 position-absolute d-flex justify-content-center rounded-3 align-items-center p-1">
                            <svg className="stars" viewBox="0 0 24 24" fill="yellow" stroke="orange" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                            <h6 className='description p-0 m-0 mb-1 fw-bold'>{item.rating}</h6>
                            <h6 className="description p-0 m-0 mb-1 ms-5 fw-bold">{item.years}</h6>


                        </div>

                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default MultiSlider;
