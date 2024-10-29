import React from "react";
import backie from "../Assets/unsplashhh.avif";
import { SlLocationPin } from "react-icons/sl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { GrNext, GrPrevious } from "react-icons/gr";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image12 from "../Assets/Ellipse 6.png";
import image13 from "../Assets/Ellipse 6 (1).png";
import image14 from "../Assets/Ellipse 6 (2).png";
import image1 from "../Assets/img.png";
import image2 from "../Assets/img (2).png";
import image3 from "../Assets/img (3).png";
import image4 from "../Assets/img (4).png";
import image5 from "../Assets/Rectangle 9 (1).png";
import image9 from "../Assets/Rectangle 9 (2).png";
import image10 from "../Assets/Rectangle 9 (3).png";
import image6 from "../Assets/Mask group (1).png";
import image7 from "../Assets/Mask group (2).png";
import image15 from "../Assets/Rectangle 17.png";
import image8 from "../Assets/Mask group (3).png";
import image11 from "../Assets/icon.png";
import image16 from "../Assets/Rectangle 17 (1).png";
import image17 from "../Assets/Rectangle 17 (2).png";

import {
  BsCalendar,
  BsFacebook,
  BsSearch,
  BsSendFill,
  BsStarFill,
  BsTwitterX,
} from "react-icons/bs";
import {
  FaClock,
  FaFacebookMessenger,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="max-w-[1680px] overflow-x-hidden  xl:mx-auto  mt-5">
      <div className="max-h-[410px] w-full md:px-[70px]   sm:max-h-[400px] text-[#262729] relative">
        <div className="absolute p-[20px] py-[10px] overflow-hidden sm:p-[60px] flex flex-col lg:justify-start gap-4 bg-white/40 md:rounded-[20px] w-full  h-full">
          <h1 className="sm:text-[50px] w-[600px] text-[36px] font-bold leading-9 sm:leading-[50px] ">
            Find an apartment <br /> for your vacation
          </h1>
          <h1 className="text-[17px] w-[300px]  font-normal">
            We have several thousand apartments <br /> for every taste in every
            corner of the globe
          </h1>
        </div>
        <img
          className="md:rounded-[20px] w-full object-cover max-h-[400px] sm:max-h-[400px]"
          src={backie}
          alt=""
        />

        {/* Wrapper for padding outside the container */}
        <div className="mx-5 sm:px-0">
          <div className="flex w-full relative  items-center justify-center">
            <div className="bg-white justify-center w-full absolute mx-auto   sm:bottom-[-40px] bottom-[10px] rounded-full flex py-3 px-3 items-center shadow-md sm:w-[500px]">
              <div className="flex gap-3 w-full sm:w-[220px] sm:border-r-[2px] items-center">
                <div>
                  <SlLocationPin className="text-[#858585]" size={22} />
                </div>
                <div className="flex flex-col">
                  where
                  <div></div>
                  <input
                    type="search"
                    className="outline-none"
                    placeholder="search Destination"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="sm:flex gap-3 pl-3 w-[220px] hidden items-center">
                <div>
                  <BsCalendar className="text-[#858585]" size={22} />
                </div>
                <div>
                  when
                  <div>
                    <input
                      type="date"
                      className="custom-date-input text-[#9CA3AF] outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute w-[30px] bg-[#EE685F] rounded-full justify-center flex items-center h-[30px] right-[12px]">
                <BsSearch className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:mt-[80px] flex flex-col gap-[50px] py-7 h-full w-full px-3  mx-0 bg-[#F7F7F7]">
        <div className="flex  gap-4 flex-col items-center text-center ">
          <h1 className="md:text-[36px] text-[29px] font-bold">
            Why Choose Us
          </h1>
          <p className="md:max-w-[370px] w-[300px] font-thin text-[#959595] text-[16px] leading-5">
            The main reason is because our competitors have disgusting sites,
            but we can' t write that here, so the text here will be different
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 ">
          <div className="flex flex-col gap-3 items-center">
            <img src={image1} className="w-[80px]" alt="" />{" "}
            <h1>Payment Methods</h1>{" "}
            <p className="text-center text-[#959595] font-thin w-[230px]">
              We have a lot of them, from cryptocurrencies to barter for
              potatoes
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <img src={image2} className="w-[80px]" alt="" />{" "}
            <h1>Simple search process</h1>{" "}
            <p className="text-center text-[#959595] font-thin w-[230px]">
              We checked it out, even the kid did it, but it was my mom's
              friend's son
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <img src={image3} className="w-[80px]" alt="" />{" "}
            <h1>24/7 support</h1>{" "}
            <p className="text-center text-[#959595] font-thin w-[230px]">
              Is there something you don't understand? Feel free to call us.
              Phone number in the footer
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <img src={image4} className="w-[80px]" alt="" />{" "}
            <h1>we are nice</h1>{" "}
            <p className="text-center text-[#959595] font-thin w-[230px]">
              Fantasy is over, there will be something really convincing here
            </p>
          </div>
        </div>
      </div>
      <div className="sm:mt-[80px] h-full py-7 flex flex-col gap-[30px] sm:gap-[50px] w-full items-center   justify-center">
        <div className="text-center">
          <h1 className="md:text-[36px] text-[29px] font-bold">
            Special Offers
          </h1>
        </div>
        <div className="grid px-[40px] md:px-4 xl:px-[70px] gap-6  w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-4  h-full rounded-[10px] px-2 py-2 border-[1px]  border-[#F0F0F3]">
            <div className="w-full relative">
              <div className="absolute flex justify-between items-center w-full p-4">
                <div className="bg-[#F3F4F4]/90  rounded-md flex items-center py-1  gap-2 px-1 ">
                  <BsStarFill className="text-[#EFC968]" size={13} />{" "}
                  <p className="font-thin">4.8</p>
                </div>
                <div className="bg-[#F3F4F4]/90  w-[30px] h-[30px] flex items-center justify-center rounded-full py-1  gap-2 px-1 ">
                  <img src={image11} alt="" />
                </div>
              </div>
              <img className="w-full" src={image5} alt="" />
            </div>
            <div className="flex flex-col gap-[3px]">
              <h1 className="w-full text-[19px] xl:text-[30px] font-montserrat font-medium">
                Wilderness Club at big cedar
              </h1>
              <p className="text-[#959595] text-[14px] lg:text-[18px] font-thin">
                Two bedroom combined lodge
              </p>
              <p className="font-thin text-[14px] lg:text-[18px]">
                28th October - 1st November
              </p>
              <h1 className="text-[22px] flex  items-center text-[#3094DB] font-thin">
                $2016/{" "}
                <span className=" text-[16px] text-[#3595DA]">6 nights</span>
              </h1>
            </div>
            <div className="sm:flex hidden xl:mt-2  justify-between">
              <div className="flex items-center gap-2">
                <div>
                  <img src={image6} alt="" />
                </div>{" "}
                <div>
                  <h1 className="text-[#959595] font-thin">4 Beds</h1>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <img src={image7} alt="" />
                </div>{" "}
                <div>
                  <h1 className="text-[#959595] font-thin">8 Sleeps</h1>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <img src={image8} alt="" />
                </div>{" "}
                <div>
                  <h1 className="text-[#959595] font-thin">40 Sq Feet</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4  h-full rounded-[10px] px-2 py-2 border-[1px]  border-[#F0F0F3]">
            <div className="w-full relative">
              <div className="absolute flex justify-between items-center w-full p-4">
                <div className="bg-[#F3F4F4]/90  rounded-md flex items-center py-1  gap-2 px-1 ">
                  <BsStarFill className="text-[#EFC968]" size={13} />{" "}
                  <p className="font-thin">4.8</p>
                </div>
                <div className="bg-[#F3F4F4]/90  w-[30px] h-[30px] flex items-center justify-center rounded-full py-1  gap-2 px-1 ">
                  <img src={image11} alt="" />
                </div>
              </div>
              <img className="w-full" src={image9} alt="" />
            </div>
            <div className="flex flex-col gap-[3px]">
              <h1 className="w-full text-[19px] xl:text-[30px] font-montserrat font-medium">
                Wilderness Club at big cedar
              </h1>
              <p className="text-[#959595] text-[14px] lg:text-[18px] font-thin">
                Two bedroom combined lodge
              </p>
              <p className="font-thin text-[14px] lg:text-[18px]">
                28th October - 1st November
              </p>
              <h1 className="text-[22px] flex  items-center text-[#3094DB] font-thin">
                $2016/{" "}
                <span className=" text-[16px] text-[#3595DA]">6 nights</span>
              </h1>
            </div>
            <div className="sm:flex hidden xl:mt-2  justify-between">
              <div className="flex items-center gap-2">
                <div>
                  <img src={image6} alt="" />
                </div>{" "}
                <div>
                  <h1 className="text-[#959595] font-thin">4 Beds</h1>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <img src={image7} alt="" />
                </div>{" "}
                <div>
                  <h1 className="text-[#959595] font-thin">8 Sleeps</h1>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <img src={image8} alt="" />
                </div>{" "}
                <div>
                  <h1 className="text-[#959595] font-thin">40 Sq Feet</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4  h-full rounded-[10px] px-2 py-2 border-[1px]  border-[#F0F0F3]">
            <div className="w-full relative">
              <div className="absolute flex justify-between items-center w-full p-4">
                <div className="bg-[#F3F4F4]/90  rounded-md flex items-center py-1  gap-2 px-1 ">
                  <BsStarFill className="text-[#EFC968]" size={13} />{" "}
                  <p className="font-thin">4.8</p>
                </div>
                <div className="bg-[#F3F4F4]/90  w-[30px] h-[30px] flex items-center justify-center rounded-full py-1  gap-2 px-1 ">
                  <img src={image11} alt="" />
                </div>
              </div>
              <img className="w-full" src={image10} alt="" />
            </div>
            <div className="flex flex-col gap-[3px]">
              <h1 className="w-full text-[19px] xl:text-[30px] font-montserrat font-medium">
                Wilderness Club at big cedar
              </h1>
              <p className="text-[#959595] text-[14px] lg:text-[18px] font-thin">
                Two bedroom combined lodge
              </p>
              <p className="font-thin text-[14px] lg:text-[18px]">
                28th October - 1st November
              </p>
              <h1 className="text-[22px] flex  items-center text-[#3094DB] font-thin">
                $2016/{" "}
                <span className=" text-[16px] text-[#3595DA]">6 nights</span>
              </h1>
            </div>
            <div className="sm:flex hidden xl:mt-2  justify-between">
              <div className="flex items-center gap-2">
                <div>
                  <img src={image6} alt="" />
                </div>{" "}
                <div>
                  <h1 className="text-[#959595] font-thin">4 Beds</h1>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <img src={image7} alt="" />
                </div>{" "}
                <div>
                  <h1 className="text-[#959595] font-thin">8 Sleeps</h1>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <img src={image8} alt="" />
                </div>{" "}
                <div>
                  <h1 className="text-[#959595] font-thin">40 Sq Feet</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:mt-[80px] px-[40px] md:px-4 xl:px-[70px] relative h-full py-7 flex flex-col gap-[30px] sm:gap-[50px] w-full items-center   justify-center">
        <h1 className="md:text-[36px] text-[29px] font-bold">Reviews</h1>
        <div className="flex flex-col relative items-center w-full  mx-auto px-9">
          <div className="w-full flex flex-col items-center justify-center relative">
            <div className="flex justify-between items-center top-0 bottom-0 h-full absolute w-full mt-">
              <div className="swiper-button-prev-unique-1 z-50 rounded-md -ml-[40px] bg-[#EE685F] p-3 cursor-pointer">
                <GrPrevious className="h-4 w-4 text-white" />
              </div>

              <div className="swiper-button-next-unique-1 z-50 -mr-10 rounded-md  bg-[#EE685F] p-3 cursor-pointer">
                <GrNext className="h-4 w-4 text-white" />
              </div>
            </div>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={15}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },

                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },

                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              navigation={{
                nextEl: ".swiper-button-next-unique-1",
                prevEl: ".swiper-button-prev-unique-1",
              }}
              pagination={{
                el: ".swiper-pagination-unique-1",
                clickable: true,
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
              }}
              className="w-full h-full mx-7"
            >
              <SwiperSlide className="flex px-4 items-center justify-center">
                <div className="flex flex-col gap-4 items-center justify-center">
                  <img src={image12} className="w-[80px]" alt="" />
                  <div className="flex flex-col gap-3">
                    <p className="max-w-[320px] font-thin text-[#a6a6a9] text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perspiciatis harum dicta maiores tempora dignissimos unde
                      dolorum commodi! In magnam rerum, natus deserunt autem,
                      aliquam enim numquam voluptatum quaerat inventore
                      sapiente.
                    </p>
                    <p className="text-[#a6a6a9] text-center font-thin">
                      <span className="text-black font-medium">
                        {" "}
                        Tola Egberongbe
                      </span>{" "}
                      Publisher
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex px-4 items-center justify-center">
                <div className="flex flex-col gap-4 items-center justify-center">
                  <img src={image13} className="w-[80px]" alt="" />
                  <div className="flex flex-col gap-3">
                    <p className="max-w-[320px] font-thin text-[#a6a6a9] text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perspiciatis harum dicta maiores tempora dignissimos unde
                      dolorum commodi! In magnam rerum, natus deserunt autem,
                      aliquam enim numquam voluptatum quaerat inventore
                      sapiente.
                    </p>
                    <p className="text-[#a6a6a9] text-center font-thin">
                      <span className="text-black font-medium">
                        {" "}
                        Tola Egberongbe
                      </span>{" "}
                      Publisher
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex px-4 items-center justify-center">
                <div className="flex flex-col gap-4 items-center justify-center">
                  <img src={image14} className="w-[80px]" alt="" />
                  <div className="flex flex-col gap-3">
                    <p className="max-w-[320px] font-thin text-[#a6a6a9] text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perspiciatis harum dicta maiores tempora dignissimos unde
                      dolorum commodi! In magnam rerum, natus deserunt autem,
                      aliquam enim numquam voluptatum quaerat inventore
                      sapiente.
                    </p>
                    <p className="text-[#a6a6a9] text-center font-thin">
                      <span className="text-black font-medium">
                        {" "}
                        Tola Egberongbe
                      </span>{" "}
                      Publisher
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex px-4 items-center justify-center">
                <div className="flex flex-col gap-4 items-center justify-center">
                  <img src={image12} className="w-[80px]" alt="" />
                  <div className="flex flex-col gap-3">
                    <p className="max-w-[320px] font-thin text-[#a6a6a9] text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perspiciatis harum dicta maiores tempora dignissimos unde
                      dolorum commodi! In magnam rerum, natus deserunt autem,
                      aliquam enim numquam voluptatum quaerat inventore
                      sapiente.
                    </p>
                    <p className="text-[#a6a6a9] text-center font-thin">
                      <span className="text-black font-medium">
                        {" "}
                        Tola Egberongbe
                      </span>{" "}
                      Publisher
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex px-4 items-center justify-center">
                <div className="flex flex-col gap-4 items-center justify-center">
                  <img src={image12} className="w-[80px]" alt="" />
                  <div className="flex flex-col gap-3">
                    <p className="max-w-[320px] font-thin text-[#a6a6a9] text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perspiciatis harum dicta maiores tempora dignissimos unde
                      dolorum commodi! In magnam rerum, natus deserunt autem,
                      aliquam enim numquam voluptatum quaerat inventore
                      sapiente.
                    </p>
                    <p className="text-[#a6a6a9] text-center font-thin">
                      <span className="text-black font-medium">
                        {" "}
                        Tola Egberongbe
                      </span>{" "}
                      Publisher
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            {/* <div className="swiper-pagination-unique-1 mt-2 items-center justify-center flex gap-1" /> */}
          </div>
          <div className="bg-[#EE685F] rounded-md text-white w-[275px] mt-10 h-[50px] flex items-center text-center justify-center">
            More Reviews
          </div>
        </div>
      </div>
      <div className="sm:mt-[80px] flex flex-col gap-[50px] py-7">
        <div>
          <h1 className="md:text-[36px] w-full text-[29px] text-center font-bold">
            Recent Post
          </h1>
        </div>
        <div className="grid px-[40px] md:px-4 xl:px-[70px] gap-6  w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-2">
            <img src={image15} alt="" />
            <div className="w-full flex justify-between">
              <p>May 23 2024</p>
              <p className="flex gap-1 text-[#92C6EB] items-center">
                <FaClock /> 5 minutes ago
              </p>
            </div>
            <div className="font-bold text-[20px]">My trip to Athens</div>
            <div>
              <h1 className="text-[#999A9B] font-thin">
                It would seem that in a city where Theseus, Plato and Epicurus
                once walked, the very idea of the subway is alien to the city,
                but already...
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <img src={image16} alt="" />
            <div className="w-full flex justify-between">
              <p>May 23 2024</p>
              <p className="flex gap-1 text-[#92C6EB] items-center">
                <FaClock /> 5 minutes ago
              </p>
            </div>
            <div className="font-bold text-[20px]">Vinius Resort</div>
            <div>
              <h1 className="text-[#999A9B] font-thin">
                It would seem that in a city where Theseus, Plato and Epicurus
                once walked, the very idea of the subway is alien to the city,
                but already...
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <img src={image17} alt="" />
            <div className="w-full flex justify-between">
              <p>May 23 2024</p>
              <p className="flex gap-1 text-[#92C6EB] items-center">
                <FaClock /> 5 minutes ago
              </p>
            </div>
            <div className="font-bold text-[20px]">
              Tips for flying on a plane
            </div>
            <div>
              <h1 className="text-[#999A9B] font-thin">
                It would seem that in a city where Theseus, Plato and Epicurus
                once walked, the very idea of the subway is alien to the city,
                but already...
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F3F2F0] px-[40px]  md:px-4 xl:px-[70px] sm:mt-[80px] flex items-center justify-center flex-col gap-[50px] py-10">
        <div className="grid grid-cols-1 w-full gap-7 sm:grid-cols-3 lg:grid-cols-4 ">
          <div className="flex flex-col gap-2">
            <h1>Title of Section</h1>
            <p className="font-thin"> page title</p>
            <p className="font-thin"> page title</p>
            <p className="font-thin"> page title</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1>Title of Section</h1>
            <p className="font-thin"> page title</p>
            <p className="font-thin"> page title</p>
            <p className="font-thin"> page title</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1>Title of Section</h1>
            <p className="font-thin"> page title</p>
            <p className="font-thin"> page title</p>
            <p className="font-thin"> page title</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1>Subscribe to NewsLetter</h1>

            <h1 className="font-thin">Your email</h1>
            <div className="relative w-full md:w-full lg:w-full">
              <input
                className="w-full border border-[#EE685F] outline-none p-2 pr-[40px] rounded-lg h-[35px]"
                type="email"
                placeholder="Enter your email"
              />
              <button className="absolute inset-y-0 right-0 h-full w-[40px] flex items-center justify-center bg-[#EE685F] rounded-r-lg text-white">
                <BsSendFill size={16} />
              </button>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] w-full  border-[#CCCBCA]  ">
          <div className="w-full flex flex-col md:flex-row gap-3 justify-between pt-7 md:items-center">
          
              <h1 className="text-[32px]">Hotel</h1>
         
            <div>
              <ul className="flex gap-4 items-center">
                <a href="">
                  {" "}
                  <BsFacebook className="text-blue-500" size={24} />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="gradient-icon"
                  >
                    <defs>
                      <linearGradient
                        id="instagramGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" style={{ stopColor: "#f09433" }} />
                        <stop offset="50%" style={{ stopColor: "#e6683c" }} />
                        <stop offset="100%" style={{ stopColor: "#bc1888" }} />
                      </linearGradient>
                    </defs>
                    <FaInstagram fill="url(#instagramGradient)" size={24} />
                  </svg>
                </a>
                <a href="">
                  <BsTwitterX size={24}/>
                </a>
                <a href="">
                  <FaWhatsapp size={24} className="text-green-400" />
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
