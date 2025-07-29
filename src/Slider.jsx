import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "swiper/css/navigation";

const info = [
  {
    image: "/src/assets/images/slider-image-1.jpg",
    name: "Polash Goon",
    position: "Senior Executive Officer",
  },
  {
    image: "/src/assets/images/slider-image-2.jpg",
    name: "Priyanka Deb",
    position: "Documentation Executive",
  },
  {
    image: "/src/assets/images/slider-image-9.jpg",
    name: "Gyanodanondini Debi",
    position: "Student counselor",
  },
  {
    image: "/src/assets/images/slider-image-4.jpg",
    name: "Raisul Haque",
    position: "Inquiry Officer",
  },
  {
    image: "/src/assets/images/slider-image-5.jpg",
    name: "Adi Al Jamil",
    position: "Accounts Officer",
  },
  {
    image: "/src/assets/images/slider-image-6.jpg",
    name: "Shubho Debnath",
    position: "University Placement Officer",
  },
  {
    image: "/src/assets/images/slider-image-7.jpg",
    name: "Muddassir Promi",
    position: "Documentation Executive",
  },
  {
    image: "/src/assets/images/slider-image-8.jpg",
    name: "Priyanka Deb ",
    position: "Event Organizer",
  },
  {
    image: "/src/assets/images/slider-image-3.jpg",
    name: "Forence Dicosta",
    position: "Compliance Officer",
  },
];

const Slider = () => {
  return (
    <section
      className="w-[100vw]  lg:h-[92vh] 
     bg-[linear-gradient(to_right,_rgba(0,10,0,1),_rgba(5,150,105,1),_rgba(0,10,0,1))]
    flex flex-col justify-center items-center "
    >
      <h1
        className="w-9/12 lg:w-6/12  text-[20px] xl:text-[40px] mt-6 xl:mt-12  text-center  leading-5 text-[#fff]   xl:leading-12  
       border-b-1   
       backdrop-blur-xl  bg-white/20 border border-[#75757565] rounded-lg p-4 shadow-lg   font-semibold 
       
       "
      >
        The Team Behind <span className="font-extrabold">StudyOra</span>
      </h1>
      <div className="lg:w-12/12 lg:h-10/12     flex  flex-col justify-center items-center  px-5 ">
        <Swiper
          navigation={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 130,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="w-full h-11/12     !pb-20 !pt-5  flex items-center justify-center "
        >
          {info.map((item, idx) => (
            <SwiperSlide
              key={idx}
              className="relative !w-[220px] !h-[380px] lg:!w-[380px] lg:!h-[550px] rounded-2xl shadow-2xs flex justify-center items-center"
            >
              <img
                src={item.image}
                className="w-[100%] h-[100%] object-cover rounded-xl"
              />
              <div className="absolute bottom-0 left-0 w-full bg-transparent bg-opacity-70 py-3 text-center rounded-b-xl">
                <h1 className=" text-[#fff] text-xl font-semibold ">
                  {item.name}
                </h1>
                <h3 className=" text-[#6d6d6d] text-xs font-bold ">
                  {item.position}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
