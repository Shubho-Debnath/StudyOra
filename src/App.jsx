import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import bgVideo from "./assets/images/compressed video.mp4";
import { FaPenToSquare } from "react-icons/fa6";
import Slider from "./Slider";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);


  return (
    <>
      {/* -----------parent wrapper--------------- */}
      <div className="bg- min-h-screen max-w-screen overflow-x-hidden flex flex-col justify-between items-center">
        {/* ------------hero (video) -------------- */}
        <div className="relative w-full h-[50vh] xl:h-[90vh] overflow-hidden ">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src={bgVideo} type="video/mp4" />
          </video>
          {/* ------------gradient layer ----------------- */}
          <div
            className="absolute top-0 left-0 w-full h-full z-10 
          bg-[linear-gradient(to_right,_rgba(0,10,0,0.9)_0%,_transparent_40%,_transparent_60%,_rgba(0,10,0,0.9)_100%)]
"
          >
            {/* ---------------nav------------- */}
            <nav className=" shadow-md -z-50 backdrop-blur-sm fixed w-full  xl:px-[15vw] flex justify-between items-center px-7 py-3">
              <div className="text-2xl text-[#fff] font-bold ">StudyOra</div>

              <div className="hidden xl:inline-block">
                <ul className="flex gap-10 text-lg font-semibold text-[#fff]">
                  <li className="text-[#059669]">
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Universities</a>
                  </li>
                  <li>
                    <a href="#">Courses</a>
                  </li>
                  <li>
                    <a href="#">Pathway</a>
                  </li>
                  <li>
                    <a href="#">Blogs</a>
                  </li>
                </ul>
              </div>

              {/* --------------------hamburger---------------- */}
              <div className="hidden">
                <button
                  className="text-3xl text-[#fff]"
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
                >
                  <FontAwesomeIcon icon={faBars} />
                </button>

                {isOpen && (
                  <div className="absolute right-0 bg-[#fff] w-9/12 h-10/12 text-right pr-7 pt-10 font-semibold leading-9  ">
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">Universities</a>
                      </li>
                      <li>
                        <a href="#">Courses</a>
                      </li>
                      <li>
                        <a href="#">Pathway</a>
                      </li>
                      <li>
                        <a href="#">Blogs</a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="hidden xl:block">
                <button className="px-2 py-1 text-[#fff] bg-[#059669] rounded-lg font-semibold">
                  Register
                </button>
              </div>
            </nav>
          </div>
          {/* ------------------Main Conten------------------- */}
          <div className=" absolute w-full translate-z-80 flex  h-[25vh] xl:h-[60vh] bottom-0 text-white xl:px-[15vw] mb-5  xl:mb-10 ">
            <div className="relative w-full  h-full flex flex-col justify-center  items-center text-center">
              <h1 className=" text-[#059669] mt-3 text-[30px] xl:text-[85px] w-12/12 leading-[28px] xl:leading-[74px] font-bold uppercase">
                Turn your dreams <br /> of studying in
                <span class="  relative   w-full  h-8 xl:h-[75px] text-[30px]  xl:text-[85px] leading-[5px] flex justify-center items-center overflow-hidden">
                  <span class="absolute animate-word-flip text-[#fdfdfd] mt-[185px] xl:mt-[355px]">
                    <span class="block h-[38px] xl:h-[73px]">Australia</span>
                    <span class="block h-[38px] xl:h-[73px]">Denmark</span>
                    <span class="block h-[38px] xl:h-[73px]">JAPAN</span>
                    <span class="block h-[38px] xl:h-[73px]">CANADA</span>
                    <span class="block h-[38px] xl:h-[73px]">USA</span>
                  </span>
                </span>
                into reality.
              </h1>
              <p className="w-9/12 xl:my-4 text-xs leading-7 xl:text-lg  text-[#aba9a9]">
                95% of our students get an admit in less than 4 weeks
              </p>
              <div className="mt-2 flex items-center gap-3 ">
                <button className="px-3 py-1 xl:px-8 xl:py-3 text-white text-sm  xl:text-lg font-semibold rounded-md bg-[#059669] hover:bg-[#1a382efc]">
                  Explore Now
                </button>
                <button className="px-3 py-1 xl:px-8 xl:py-3 text-[#000] text-sm  xl:text-lg font-semibold rounded-md bg-[#fff]">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ------------floating div---------------- */}
        <div className="-mt-5 xl:-mt-10 backdrop-blur-xl  bg-white/20 border shadow-lg  border-white/10 rounded-xl p-5 z-20 w-10/12 h-[4vh] xl:h-[8vh]   flex justify-center items-center gap-4">
          <div className="w-2/12 p-2  ">
            <img
              src="/src/assets/images/Pearson_logo.svg.png"
              alt=""
              className="w-16 xl:w-26"
            />
          </div>
          <div className="w-2/12 p-2 ">
            <img
              src="/src/assets/images/idp-ielts-logo.png"
              alt=""
              className="w-12 xl:w-20"
            />
          </div>
          <div className="w-2/12 p-2">
            <img
              src="/src/assets/images/BritishCouncil.png"
              alt=""
              className="w-16 xl:w-26"
            />
          </div>
          <div className="w-2/12 p-2 ">
            <img
              src="/src/assets/images/Kaplan,_Inc._logo.svg.png"
              alt=""
              className="w-16 xl:w-26"
            />
          </div>
        </div>

        {/* -----------SEARCH--------------- */}
        <div className="xl:-mt-14 -mt-6 py-5 xl:py-16 w-full xl:px-[15vw]  bg-[#d2d0d065] flex items-center justify-center flex-col ">
          <h1 className="w-7/12 text-[20px] xl:text-[40px] mt-6 xl:mt-12 font-bold text-center  leading-5 TextPrimary   xl:leading-12 ">
            Explore Univerisities That Match Your Resuls and Requirements
          </h1>
          <div className=" bg-[#ffffff]  w-11/12 xl:w-9/12 mt-6 shadow-[0_0px_30px_1px_rgba(211,211,211,1)] rounded-xl p-5 xl:py-10 flex flex-col justify-center items-center ">
            <h2 className="TextPrimary text-md  leading-4 font-semibold  mb-6 border-b border-1px-[#007595] pb-2  ">
              FIND BEST MATCH BASED ON YOUR QUALIFICATIONS & preferences
            </h2>

            <div className="bg-[#ffffff]  flex flex-wrap justify-center items-center gap-4 xl:gap-8 ">
              {/* SSC RESULT */}
              <div className=" w-80">
                <label className="text-sm font-medium text-gray-700">
                  SSC RESULT
                </label>
                <input
                  type="number"
                  placeholder="ssc result"
                  className=" text-gray-700 text-md w-full border border-gray-300 rounded p-1 pl-2  placeholder:text-sm"
                />
              </div>

              {/* HSC RESULT */}
              <div className=" w-80">
                <label className="text-sm font-medium text-gray-700">
                  HSC RESULT
                </label>
                <input
                  type="number"
                  placeholder="hsc result"
                  className=" text-gray-700 text-md w-full border border-gray-300 rounded p-1 pl-2  placeholder:text-sm"
                />
              </div>

              {/* HONOUR's RESULT */}
              <div className=" w-80">
                <label className="text-sm font-medium text-gray-700">
                  HONOUR'S RESULT
                </label>
                <input
                  type="number"
                  placeholder="honour's result"
                  className=" text-gray-700 text-md w-full border border-gray-300 rounded p-1 pl-2  placeholder:text-sm"
                />
              </div>

              {/* Master's RESULT */}
              <div className=" w-80">
                <label className="text-sm font-medium text-gray-700">
                  MASTER'S RESULT
                </label>
                <input
                  type="number"
                  placeholder="master's result"
                  className=" text-gray-700 text-md w-full border border-gray-300 rounded p-1 pl-2  placeholder:text-sm"
                />
              </div>

              {/* IELTS RESULT */}
              <div className=" w-80">
                <label className="text-sm font-medium text-gray-700">
                  IELTS RESULT
                </label>
                <input
                  type="number"
                  placeholder="ielts result"
                  className=" text-gray-700 text-md w-full border border-gray-300 rounded p-1 pl-2  placeholder:text-sm"
                />
              </div>

              {/* COUNTRY */}
              <div className="w-80">
                <label className="text-sm font-medium text-gray-700">
                  Country
                </label>
                <select
                  className="text-gray-700 text-md w-full border border-gray-300 rounded p-1 pl-2 bg-white placeholder:text-sm"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select your country
                  </option>
                  <option value="England">England</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Finland">Finland</option>
                  <option value="Poland">Poland</option>
                  <option value="Canada">Canada</option>
                  <option value="Norway">Norway</option>
                  <option value="United States">United States</option>
                  <option value="Japan">Japan</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                </select>
              </div>

              {/* CITY */}
              <div className="w-80">
                <label className="text-sm font-medium text-gray-700">
                  City (England)
                </label>
                <select
                  className="text-gray-700 text-md w-full border border-gray-300 rounded p-1 pl-2 bg-white placeholder:text-sm"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select your city
                  </option>
                  <option value="London">London</option>
                  <option value="Manchester">Manchester</option>
                  <option value="Birmingham">Birmingham</option>
                  <option value="Liverpool">Liverpool</option>
                  <option value="Leeds">Leeds</option>
                  <option value="Sheffield">Sheffield</option>
                  <option value="Bristol">Bristol</option>
                  <option value="Newcastle">Newcastle</option>
                  <option value="Nottingham">Nottingham</option>
                  <option value="Cambridge">Cambridge</option>
                </select>
              </div>

              <div className="w-full flex justify-center items-center">
                <button className="w-full xl:w-5/12 BgPrimary px py-3 mt-2 rounded-md hover:bg-[#274347] ">
                  SEARCH
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* -------Explore our best services------- */}
        <div className="w-full h-[165vh] lg:h-[70vh] bg-[#059669] flex justify-center items-center py-5">

          <div className=" bg-[]  w-10/12 lg:w-8/12 h-full lg:h-11/12  flex flex-col justify-center items-center  flex-wrap ">

            <div className="w-full h-1/2  space-y-2 flex flex-col justify-center items-center lg:flex-row lg:gap-3 ">
              
              
              <div className=" bg-[#000000] w-full  lg:w-9/12 h-3/12 lg:h-11/12 text-center lg:text-start flex flex-col justify-center items-center lg:items-start text-[#fff]  rounded-t-2xl space-y-2 lg:space-y-4  px-5 lg:px-6 lg:rounded-2xl">

                <h3 className="text-lg lg:text-3xl leading-7 font-bold  lg:leading-8">
                  Explore Our Best <span className="TextPrimary">Services</span>
                </h3>
                <p className="text-xs lg:text-[14px] text-[#a7a3a3]  lg:leading-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quae recusandae animi ad voluptatem laboriosam perspiciatis sapiente consequatur dolore quo? sit amet consectetur adipisicing elit. Officiis  
                </p>
                <button className="px-2 py-1 lg:px-6 xl:py-2 text-white text-sm  xl:text-md font-semibold rounded bg-[#059669] hover:bg-[#1a382efc]">
                  Explore
                </button>
              </div>



              <div className="  lg:h-11/12   bg-[#000] text-center flex flex-col justify-between lg:justify-center items-center  text-[#fff]   space-y-2 px-6 py-6 relative rounded-md  lg:rounded-xl">
                <div className=" absolute text-[#059669] top-1 left-2 text-2xl font-bold font-mono">
                  O1.
                </div>
                <FaPenToSquare className="text-3xl " />
                <h1 className="text-xl font-semibold ">
                  University Matching System
                </h1>
                <p className="text-xs lg:text-[14px] text-[#a7a3a3]  lg:leading-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet
                </p>
              </div>

              <div className="  lg:h-11/12   bg-[#000] text-center flex flex-col justify-between lg:justify-center items-center  text-[#fff]   space-y-2 px-6 py-6 relative rounded-md  lg:rounded-xl">
                <div className=" absolute text-[#059669] top-1 left-2 text-2xl font-bold font-mono">
                  O1.
                </div>
                <FaPenToSquare className="text-3xl " />
                <h1 className="text-xl font-semibold ">
                  University Matching System
                </h1>
                <p className="text-xs lg:text-[14px] text-[#a7a3a3]  lg:leading-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet
                </p>
              </div>

              <div className="  lg:h-11/12   bg-[#000] text-center flex flex-col justify-between lg:justify-center items-center  text-[#fff]   space-y-2 px-6 py-6 relative rounded-md  lg:rounded-xl">
                <div className=" absolute text-[#059669] top-1 left-2 text-2xl font-bold font-mono">
                  O1.
                </div>
                <FaPenToSquare className="text-3xl " />
                <h1 className="text-xl font-semibold ">
                  University Matching System
                </h1>
                <p className="text-xs lg:text-[14px] text-[#a7a3a3]  lg:leading-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet
                </p>
              </div>


            </div>

            {/* --------------------- */}

            <div className="w-full h-1/2 -mt-3  space-y-2 flex flex-col justify-center items-center lg:flex-row lg:gap-3 ">
             
             

              <div className="  lg:h-11/12   bg-[#000] text-center flex flex-col justify-between lg:justify-center items-center  text-[#fff]   space-y-2 px-6 py-6 relative rounded-md  lg:rounded-xl">
                <div className=" absolute text-[#059669] top-1 left-2 text-2xl font-bold font-mono">
                  O1.
                </div>
                <FaPenToSquare className="text-3xl " />
                <h1 className="text-xl font-semibold ">
                  University Matching System
                </h1>
                <p className="text-xs lg:text-[14px] text-[#a7a3a3]  lg:leading-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet
                </p>
              </div>

              <div className="  lg:h-11/12   bg-[#000] text-center flex flex-col justify-between lg:justify-center items-center  text-[#fff]   space-y-2 px-6 py-6 relative rounded-md  lg:rounded-xl">
                <div className=" absolute text-[#059669] top-1 left-2 text-2xl font-bold font-mono">
                  O1.
                </div>
                <FaPenToSquare className="text-3xl " />
                <h1 className="text-xl font-semibold ">
                  University Matching System
                </h1>
                <p className="text-xs lg:text-[14px] text-[#a7a3a3]  lg:leading-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet
                </p>
              </div>

              <div className="  lg:h-11/12   bg-[#000] text-center flex flex-col justify-between lg:justify-center items-center  text-[#fff]   space-y-2 px-6 py-6 relative rounded-md  lg:rounded-xl">
                <div className=" absolute text-[#059669] top-1 left-2 text-2xl font-bold font-mono">
                  O1.
                </div>
                <FaPenToSquare className="text-3xl " />
                <h1 className="text-xl font-semibold ">
                  University Matching System
                </h1>
                <p className="text-xs lg:text-[14px] text-[#a7a3a3]  lg:leading-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet
                </p>
              </div>

              <div className=" bg-[#000000] w-full  lg:w-9/12 h-3/12 lg:h-11/12 text-center lg:text-end flex flex-col justify-center  items-center lg:items-end text-[#fff]  rounded-b-2xl space-y-2 lg:space-y-4  px-5 lg:px-6 lg:rounded-2xl">

                <h3 className="text-lg lg:text-3xl leading-7 font-bold  lg:leading-8">
                  Explore Our Best <span className="TextPrimary">Services</span>
                </h3>
                <p className="text-xs lg:text-[14px] text-[#a7a3a3]  lg:leading-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quae recusandae animi ad voluptatem laboriosam perspiciatis sapiente consequatur dolore quo? sit amet consectetur adipisicing elit. Officiis  
                </p>
                <button className="px-2 py-1 lg:px-6 xl:py-2 text-white text-sm  xl:text-md font-semibold rounded bg-[#059669] hover:bg-[#1a382efc]">
                  Explore
                </button>
              </div>


            </div>
          </div>
        </div>

        {/* --------- moving photo Section--------- */}
        <div className="w-full h-[30vh] lg:h-[40vh] bg-[#ffffff] flex items-center justify-center overflow-hidden ">
          <div className="w-full flex flex-col lg:gap-5 items-center justify-between overflow-hidden">
            <div className="flex justify-center items-center animate-marquee-left gap-9  lg:gap-14">
              <img
                src="/src/assets/images/universities/1.png"
                className="w-20 lg:w-26"
                alt=""
              />
              <img
                src="/src/assets/images/universities/10.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/3.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/4.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/5.png"
                className="w-20 lg:w-26"
                alt=""
              />
              <img
                src="/src/assets/images/universities/6.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/7.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/8.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/9.png"
                className="w-22 lg:w-26"
                alt=""
              />
              <img
                src="/src/assets/images/universities/10.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/5.png"
                className="w-20 lg:w-30"
                alt=""
              />
              <img
                src="/src/assets/images/universities/12.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/13.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/14.png"
                className="w-20 lg:w-26"
                alt=""
              />
              <img
                src="/src/assets/images/universities/15.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/16.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/17.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/18.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/19.jpg"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/1.png"
                className="w-20 lg:w-26"
                alt=""
              />
              <img
                src="/src/assets/images/universities/10.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/3.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/4.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/5.png"
                className="w-20 lg:w-26"
                alt=""
              />
              <img
                src="/src/assets/images/universities/6.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/7.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/8.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/9.png"
                className="w-22 lg:w-26"
                alt=""
              />
              <img
                src="/src/assets/images/universities/10.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/5.png"
                className="w-20 lg:w-30"
                alt=""
              />
              <img
                src="/src/assets/images/universities/12.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/13.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/14.png"
                className="w-20 lg:w-26"
                alt=""
              />
              <img
                src="/src/assets/images/universities/15.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/16.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/17.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/18.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/19.jpg"
                className="w-26 lg:w-34"
                alt=""
              />
            </div>

            <div className="flex justify-center items-center animate-marquee-right gap-9 lg:gap-14">
              <img
                src="/src/assets/images/universities/1.png"
                className="w-20 lg:w-24"
                alt=""
              />
              <img
                src="/src/assets/images/universities/10.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/3.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/4.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/5.png"
                className="w-20 lg:w-26"
                alt=""
              />
              <img
                src="/src/assets/images/universities/6.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/7.png"
                className="w-20 lg:w-36"
                alt=""
              />
              <img
                src="/src/assets/images/universities/8.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/9.png"
                className="w-20 lg:w-26"
                alt=""
              />
              <img
                src="/src/assets/images/universities/10.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/5.png"
                className="w-20 lg:w-26"
                alt=""
              />
              <img
                src="/src/assets/images/universities/12.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/13.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/14.png"
                className="w-20 lg:w-26"
                alt=""
              />
              <img
                src="/src/assets/images/universities/15.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/16.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/17.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/18.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/19.jpg"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/1.png"
                className="w-20 lg:w-26"
                alt=""
              />
              <img
                src="/src/assets/images/universities/10.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/3.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/4.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/5.png"
                className="w-20 lg:w-26"
                alt=""
              />
              <img
                src="/src/assets/images/universities/6.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/7.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/8.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/9.png"
                className="w-22 lg:w-26"
                alt=""
              />
              <img
                src="/src/assets/images/universities/10.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/5.png"
                className="w-20 lg:w-30"
                alt=""
              />
              <img
                src="/src/assets/images/universities/12.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/13.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/14.png"
                className="w-20 lg:w-26"
                alt=""
              />
              <img
                src="/src/assets/images/universities/15.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/16.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/17.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/18.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/19.jpg"
                className="w-26 lg:w-34"
                alt=""
              />
            </div>

            <div className="flex justify-center items-center animate-marquee-left gap-9  lg:gap-14">
              <img
                src="/src/assets/images/universities/13.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/5.png"
                className="w-20 lg:w-26"
                alt=""
              />
              <img
                src="/src/assets/images/universities/16.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/1.png"
                className="w-20 lg:w-26"
                alt=""
              />
              <img
                src="/src/assets/images/universities/6.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/9.png"
                className="w-20 lg:w-26"
                alt=""
              />
              <img
                src="/src/assets/images/universities/19.jpg"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/6.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/3.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/14.png"
                className="w-20 lg:w-26"
                alt=""
              />
              <img
                src="/src/assets/images/universities/12.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/8.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/18.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/7.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/10.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/17.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/4.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/15.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/10.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/5.png"
                className="w-20 lg:w-26"
                alt=""
              />
              <img
                src="/src/assets/images/universities/13.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/5.png"
                className="w-20 lg:w-26"
                alt=""
              />
              <img
                src="/src/assets/images/universities/16.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/1.png"
                className="w-20 lg:w-26"
                alt=""
              />
              <img
                src="/src/assets/images/universities/6.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/9.png"
                className="w-20 lg:w-26"
                alt=""
              />
              <img
                src="/src/assets/images/universities/19.jpg"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/6.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/3.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/14.png"
                className="w-20 lg:w-26"
                alt=""
              />
              <img
                src="/src/assets/images/universities/12.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/8.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/18.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/7.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/10.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/17.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/4.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/15.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/10.png"
                className="w-26 lg:w-34"
                alt=""
              />
              <img
                src="/src/assets/images/universities/5.png"
                className="w-20 lg:w-26"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* ------------Slider--------------- */}
        <Slider />

        {/* ---------Contact --------- */}
        <div class=" w-full h-90vh] lg:h-[60vh] bg-[#f7f5f5]  flex items-center  justify-center py-5">
          <div class=" w-full lg:w-[65vw]   backdrop-blur-xl  bg-white/10 border shadow-2xl  border-white/10   p-5    flex justify-between items-center mx-3 px-3 lg:p-10 py-5 gap-10 rounded-xl flex-col lg:flex-row">
            {/* -- Contact Info -- */}
            <div class="space-y-1">
              <h2 class="text-lg font-bold text-[#059669]">Get In Touch</h2>
              <p class="text-gray-600 text-sm w-9/12">
                Nullam fermentum ultrices lorem sit amet porta. Etiam ac felis
                vitae nisl iaculis finibus. Donec facilisis sapien eget
                tincidunt tincidunt.
              </p>
              <div class="space-y-1 text-gray-700 mt-4">
                <div class="flex items-center gap-3">
                  <i class="fas fa-phone-alt TextPrimary"></i> +02 1234 5346
                </div>
                <div class="flex items-center gap-3">
                  <i class="fas fa-envelope TextPrimary"></i>{" "}
                  help@genicalteam.com
                </div>
                <div class="flex items-center gap-3">
                  <i class="fas fa-globe TextPrimary"></i> www.genicalsite.com
                </div>
                <div class="flex items-center gap-3">
                  <i class="fas fa-map-marker-alt TextPrimary"></i> 99 Wring St,
                  New City, PUL 23456
                </div>
              </div>

              <div class="pt-2">
                <p class="text-gray-700 font-medium">Follow Us On</p>
                <div class="flex gap-4 mt-2 ">
                  <a
                    href="#"
                    class="w-8 h-8 flex items-center justify-center rounded-full BgPrimary text-white"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    class="w-8 h-8  flex items-center justify-center rounded-full BgPrimary text-white"
                  >
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    class="w-8 h-8  flex items-center justify-center rounded-full BgPrimary text-white"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a
                    href="#"
                    class="w-8 h-8  flex items-center justify-center rounded-full BgPrimary text-white"
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* -- Contact Form - */}
            <div>
              <form class="space-y-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  class="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none text-sm"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  class="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none text-sm"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  class="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none text-sm"
                />
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  class="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none text-sm"
                ></textarea>
                <button
                  type="submit"
                  class="BgPrimary text-white px-3 py-2 rounded-md hover:bg-[#4b9793] transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* -- Map Section -- */}
        <div class=" bg-[#060606] w-full p-10 h-[40vh] flex justify-center items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3487.4061931565784!2d91.88247576059645!3d24.885627371505315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1752828226405!5m2!1sen!2sbd"
            class="w-full lg:w-10/12 h-full rounded-xl"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* ----------footer------------ */}
        <footer
          className="w-full xl:px-[15vw] bg-[#010101] h-auto py-5 bottom-0 flex flex-col justify-center items-center  text-[#fff] px-5 
        "
        >
          <div className="bg-[#0000003e] w-full xl:flex ">
            <div
              className="bg-[#000000] text-center leading-4  pb-5 xl:border-0 xl:text-start xl:w-3/12  
            "
            >
              <h1 className="text-2xl font-bold ">StudyOra</h1>
              <p className="text-[#aaaaaa] text-sm">
                Guiding You Beyond Borders.
              </p>
              <p className="text-[#928f8f] text-sm mt-2 leading-4 xl:w-10/12 text-center xl:text-start ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                error nostrum molestiae magnam ducimus dolorem expedita impedit
                nihil quod illum accusamus ipsam quasi, quas quis magni quos
                harum doloremque animi!
              </p>
            </div>

            <div className="bg-[#000000] w-full  flex flex-col justify-around items-start  xl:flex-row xl:w-9/12 xl:justify-center ">
              <div className="bg-[#000000] w-full  flex justify-between items-strat py-3 border-t-[0.5px] border-[#a3a3a3] text-[#a5a1a1] xl:flex-col xl:border-0 ">
                <h1 className="uppercase font-bold">Destinations</h1>
                <div className="w-1/2">
                  <ul>
                    <li>
                      <a href="#">Australia</a>
                    </li>
                    <li>
                      <a href="#">England</a>
                    </li>
                    <li>
                      <a href="#">Sweden</a>
                    </li>
                    <li>
                      <a href="#">Norway</a>
                    </li>
                    <li>
                      <a href="#">United State</a>
                    </li>
                    <li>
                      <a href="#">Poland</a>
                    </li>
                    <li>
                      <a href="#">Denmark</a>
                    </li>
                    <li>
                      <a href="#">Finland</a>
                    </li>
                    <li>
                      <a href="#">Canada</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full flex justify-between items-strat py-3 border-t-[0.5px] border-[#a3a3a3] text-[#a5a1a1] xl:flex-col xl:border-0">
                <h1 className="uppercase font-bold">Study in</h1>
                <div className="w-1/2">
                  <ul>
                    <li>
                      <a href="#">AI University Course Finder</a>
                    </li>
                    <li>
                      <a href="#">Scholarship Hub</a>
                    </li>
                    <li>
                      <a href="#">Refer & Earn</a>
                    </li>
                    <li>
                      <a href="#">Branch Locator</a>
                    </li>
                    <li>
                      <a href="#">Fly Loans</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full flex justify-between items-strat py-3 border-t-[0.5px] border-[#a3a3a3] text-[#a5a1a1] xl:flex-col xl:border-0 ">
                <h1 className="uppercase font-bold">Company</h1>
                <div className="w-1/2">
                  <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Our Team</a>
                    </li>
                    <li>
                      <a href="#">What do we do</a>
                    </li>
                    <li>
                      <a href="#">Why Choose StudyOra</a>
                    </li>
                    <li>
                      <a href="#">Success Stories</a>
                    </li>
                    <li>
                      <a href="#">Work with us</a>
                    </li>
                    <li>
                      <a href="#">Experience Centres</a>
                    </li>
                    <li>
                      <a href="#">Agents</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full flex justify-between items-strat py-3 border-t-[0.5px] border-[#a3a3a3] text-[#a5a1a1] xl:flex-col xl:border-0">
                <h1 className="uppercase font-bold">Study in</h1>
                <div className="w-1/2">
                  <ul>
                    <li>
                      <a href="#">Privacy policy</a>
                    </li>
                    <li>
                      <a href="#">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="#">Responsible Disclousoure Policy</a>
                    </li>
                    <li>
                      <a href="#">EEO Policy</a>
                    </li>
                    <li>
                      <a href="#">Agent Selection Guide</a>
                    </li>
                    <li>
                      <a href="#"></a>
                    </li>
                    <li>
                      <a href="#"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#000000fb] w-full flex flex-col justify-center items-center gap-3 pt-3 border-t-[1px] border-[#5b5b5b87] xl:flex-row xl:justify-between">
            <div className="flex justify-center items-center gap-2 ">
              <a
                className="w-7 h-7 xl:w-10   xl:h-10 flex items-center justify-center rounded-full  hover:bg-[#fefefe] hover:text-[#000000]  text-[#ede7e7] "
                href="#"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-xl xl:text-3xl"
                />
              </a>

              <a
                className="w-7 h-7 xl:w-10   xl:h-10 flex items-center justify-center rounded-full  hover:bg-[#fefefe] hover:text-[#000000]  text-[#ede7e7] "
                href="#"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-xl xl:text-3xl"
                />
              </a>

              <a
                className="w-7 h-7 xl:w-10   xl:h-10 flex items-center justify-center rounded-full  hover:bg-[#fefefe] hover:text-[#000000]  text-[#ede7e7] "
                href="#"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-xl xl:text-3xl"
                />
              </a>

              <a
                className="w-7 h-7 xl:w-10   xl:h-10 flex items-center justify-center rounded-full  hover:bg-[#fefefe] hover:text-[#000000]  text-[#ede7e7] "
                href="#"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="text-xl xl:text-3xl"
                />
              </a>
            </div>
            <div className="text-center text-xs text-[#747171]">
              {" "}
              Copyright Ⓒ 2025, StudyOra. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;
