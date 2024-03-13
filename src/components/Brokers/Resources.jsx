import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Container from "../../shared/Container/Container";
import truck03 from "../../assets/solutions/truck03.jpg";
import truck01 from "../../assets/solutions/truck01.jpg";
import truck02 from "../../assets/solutions/truck02.jpg";

import truckDriver from "../../assets/solutions/truck_driver.jpg";

const Resources = ({ resourcesId }) => {
  const resources = [
    {
      image: truck01,
      heading: "Item 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, numquam voluptatibus expedita aperiam, totam consequatur veniam temporibus vero quasi odio voluptatem, aut nihil! Corrupti harum exercitationem accusantium et, vel illo.",
    },
    {
      image: truck02,
      heading: "Item 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, numquam voluptatibus expedita aperiam, totam consequatur veniam temporibus vero quasi odio voluptatem, aut nihil! Corrupti harum exercitationem accusantium et, vel illo.",
    },
    {
      image: truck03,
      heading: "Item 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, numquam voluptatibus expedita aperiam, totam consequatur veniam temporibus vero quasi odio voluptatem, aut nihil! Corrupti harum exercitationem accusantium et, vel illo.",
    },
    {
      image: truckDriver,
      heading: "Item 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, numquam voluptatibus expedita aperiam, totam consequatur veniam temporibus vero quasi odio voluptatem, aut nihil! Corrupti harum exercitationem accusantium et, vel illo.",
    },
    {
      image: truck02,
      heading: "Item 5",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, numquam voluptatibus expedita aperiam, totam consequatur veniam temporibus vero quasi odio voluptatem, aut nihil! Corrupti harum exercitationem accusantium et, vel illo.",
    },
  ];
  const customeSlider = useRef();
  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id={resourcesId} className="px-2 py-20 bg-black">
      <Container>
        <h1 className="sm:text-5xl text-3xl font-semibold leading-normal tracking-normal text-black text-center">
          What our customers are saying
        </h1>
        <div className="py-10 ">
          <Slider {...settings} ref={customeSlider}>
            {resources.map((review, i) => (
              <div
                className="h-auto rounded-xl border border-[#dfdfdf] p-5 bg-gray-900"
                key={i}
              >
                <div className="flex flex-col space-y-2 h-[60%]">
                  <img src={review.image} alt="" />
                </div>
                <div className="my-2 h-[40%] text-white">
                  <h5>{review.heading}</h5>
                  <p className="text-xs">{review.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex justify-center space-x-2 ">
          <span
            className="w-10 h-10 text-white flex justify-center items-center flex-shrink-0 font-normal rounded-full border border-black bg-slate-400 cursor-pointer hover:bg-[#0A0D10] hover:text-white duration-500 ease-in-out"
            onClick={() => gotoPrev()}
          >
            <IoIosArrowBack className="h-5 w-5" />
          </span>
          <span
            className="w-10 h-10 flex justify-center items-center flex-shrink-0 font-normal rounded-full border border-black cursor-pointer bg-slate-400 hover:bg-[#0A0D10] text-white hover:text-white duration-500 ease-in-out"
            onClick={() => gotoNext()}
          >
            <IoIosArrowForward className="h-5 w-5" />
          </span>
        </div>
      </Container>
    </div>
  );
};

export default Resources;
