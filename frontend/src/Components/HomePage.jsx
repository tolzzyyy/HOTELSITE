import React from "react";
import backie from "../Assets/unsplashhh.avif";
import { SlLocationPin } from "react-icons/sl";
import { BsCalendar, BsSearch } from "react-icons/bs";

const HomePage = () => {
  return (
    <div className="max-w-[1680px]  xl:mx-auto md:px-[70px] my-5">
      <div className="max-h-[410px]   sm:max-h-[400px] text-[#262729] relative">
        <div className="absolute p-[20px] py-[20px] sm:p-[60px] flex flex-col lg:justify-start gap-4 bg-white/40 md:rounded-[20px] w-full h-full">
          <h1 className="sm:text-[50px] text-[36px] tracking-wide leading-9 sm:leading-[50px] font-medium">
            Find an apartment <br /> for your vacation
          </h1>
          <h1 className="text-[17px] font-normal">
            We have several thousand apartments <br /> for every taste in every
            corner of the globe
          </h1>
        </div>dddd
        <img
          className="md:rounded-[20px] w-full object-cover max-h-[400px] sm:max-h-[400px]"
          src={backie}
          alt=""
        />

        {/* Wrapper for padding outside the container */}
        <div className="mx-5 sm:px-0">
          <div className="flex w-full relative  items-center justify-center">
            <div className="bg-white justify-center w-full absolute mx-auto   sm:bottom-[-40px] bottom-[20px] rounded-full flex py-3 px-3 items-center shadow-md sm:w-[500px]">
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
    </div>
  );
};

export default HomePage;
