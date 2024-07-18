import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src="https://dummyimage.com/300.png/09f/fff" alt="Image 1" />
        </div>
        <div>
          <img src="https://dummyimage.com/300.png/09f/fff" alt="Image 1" />
        </div>
        <div>
          <img src="https://dummyimage.com/300.png/09f/fff" alt="Image 1" />
        </div>
        <div>
          <img src="https://dummyimage.com/300.png/09f/fff" alt="Image 1" />
        </div>
      </Slider>
    </div>
  );
}
