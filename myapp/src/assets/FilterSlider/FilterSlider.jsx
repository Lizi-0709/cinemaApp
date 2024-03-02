import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './FilterSlider.scss'

function FilterSlider({ Data }) {
    var settings = {
        dots: false,
        infinite: false,
        speed: 600,
        slidesToShow: 7,
        slidesToScroll: 7,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            
        ]
    };
    return (
        <div className="filter-slider-container">
            <Slider {...settings}>
                {Data.map((item) => (
                    <div key={item.id} className="parent-filter-div text-white d-flex justify-content-center py-3 gap-2 align-items-center rounded-5">
                        {item.icon}
                        {item.title}
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default FilterSlider;