import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CenterModeSlider.scss";

function CenterModeSlider({ ImgData }) {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 5,
        speed: 500,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    arrow: false
                }
            }
        ],
        
    };
    return (
        <div className="slider-container">
            <div className="slider-container">
                <Slider {...settings}>
                    {ImgData.map((item) => (
                        <div key={item.id} className="parent-img-for-slider">
                            <img src={item.img} alt="" />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default CenterModeSlider;
