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
        initialSlide: 0,
        slidesToScroll: 5,
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
            <Slider {...settings} className="p-3">
                {ImgData.map((item) => (
                    <div key={item.id} className="parent-img-for-slider position-relative">
                        <img src={item.img} alt="" />
                        <div className="description-parent position-absolute d-flex justify-content-between p-1 px-3 fw-bold w-100">

                            <h6 className="text-white m-0">{item.content}</h6>

                            <div className="rating-div d-flex w-50 justify-content-end align-items-center pb-1">
                                <p className="text-white fw-bold px-1 m-0 mb-1">{item.rating}</p>
                            <svg className="ratings " viewBox="0 0 24 24" fill="yellow" stroke="orange" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                            </div>
                        </div>
                    </div>


                ))}
            </Slider>
        </div>
    );
}

export default CenterModeSlider;
