import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Quot from "../../assets/images/Quot.png";
import RightArrow from "../../assets/images/RightArrow.png";
import LeftArrow from "../../assets/images/LeftArrow.png";
import RightArrowClick from "../../assets/images/RightArrowClick.png";
import LeftArrowClick from "../../assets/images/LeftArrowClick.png";
import TestimonialsE1 from "../../assets/images/TestimonialsE1.png";
import TestimonialsE2 from "../../assets/images/TestimonialsE2.png";
import TestimonialsE3 from "../../assets/images/TestimonialsE3.png";

function Testimonials() {
  const testimonials = [
    {
      quote:
        "Our experience with Stratagem transformed our supply chain operations. The direct line of communication they established with our suppliers in China has made a world of difference in how we manage our inventory and respond to market demands.",
      image: TestimonialsE1,
      name: "Lorem IPsum",
      role: "CEO of Lorem",
    },
    {
      quote:
        "Our experience with Stratagem transformed our supply chain operations. The direct line of communication they established with our suppliers in China has made a world of difference in how we manage our inventory and respond to market demands.",
      image: TestimonialsE2,
      name: "John Doe",
      role: "COO of Acme Inc.",
    },
    {
      quote:
        "Our experience with Stratagem transformed our supply chain operations. The direct line of communication they established with our suppliers in China has made a world of difference in how we manage our inventory and respond to market demands.",
      image: TestimonialsE3,
      name: "Jane Smith",
      role: "CTO of ABC Corp.",
    },
    // Add more testimonials as needed
  ];

  const [slidesToShow, setSlidesToShow] = useState(3);
  const [leftArrowImage, setLeftArrowImage] = useState(LeftArrow);
  const [rightArrowImage, setRightArrowImage] = useState(RightArrow);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1); // Show 1 card on mobile
      } else {
        setSlidesToShow(3); // Show 3 cards on larger screens
      }
    };

    // Listen to window resize events
    window.addEventListener("resize", handleResize);
    // Call handleResize initially
    handleResize();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  const sliderRef = React.createRef();

  const nextSlide = () => {
    sliderRef.current.slickNext();
    setRightArrowImage(RightArrowClick);
    setTimeout(() => {
      setRightArrowImage(RightArrow);
    }, 300);
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
    setLeftArrowImage(LeftArrowClick);
    setTimeout(() => {
      setLeftArrowImage(LeftArrow);
    }, 300);
  };

  return (
    <div className="my-5">
      <div className="text-white flex flex-col items-center justify-center mx-5" data-aos="zoom-out">
        <b className="text-teal-400 uppercase tracking-wide">Testimonials</b>
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mt-7 lg:mt-5">
          Hear From Our Happy Partners
        </h1>
      </div>
      <div className="lg:px-72" data-aos="zoom-in-up">
        <Slider {...settings} ref={sliderRef}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="TestimonialsCard bg-white text-black p-9 rounded-lg my-4">
              <img src={Quot} alt="quotation mark" className="" />
              <p className="mt-5 lg:mt-7 text-white tracking-wide leading-relaxed">
                <span style={{ textTransform: "capitalize" }}>
                  {testimonial.quote}
                </span>
              </p>
              <div className="flex items-center gap-4 py-7">
                <div>
                  <img
                    src={testimonial.image}
                    alt={`TestimonialsE${index + 1}`}
                    className=""
                  />
                </div>
                <div>
                  <b className="text-sky-400 w-full tracking-wide text-start lg:text-2xl">
                    {testimonial.name}
                  </b>
                  <p className="tracking-wide leading-relaxed text-start text-white">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="text-center mt-5 gap-10" >
        <button
          className="bg-transparent border-none cursor-pointer focus:outline-none"
          onClick={prevSlide}>
          <img src={leftArrowImage} alt="LeftArrow" className="Left_Img" />
        </button>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <button
          className="bg-transparent border-none cursor-pointer focus:outline-none"
          onClick={nextSlide}>
          <img src={rightArrowImage} alt="RightArrow" className="Right_Img" />
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
