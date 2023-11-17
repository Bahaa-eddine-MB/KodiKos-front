"use client";
import React, { useState } from "react";
import Image from "next/image";
import arrow from "@assets/slide.svg";

const SliderComponent = ({ comments }) => {
  const [myIndex, setIndex] = useState(1);
    const handlePrevClick = () => {
    setIndex((prevIndex) => (prevIndex - 1 + comments.length) % comments.length);
  };

  const handleNextClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % comments.length);
  };
  return (
    <>
      <div className="flex gap-12 pb-16 pt-8 overflow-hidden">
        <div className="w-[60%]">
          <div className="text-5xl font-semibold pb-8">
            What customer says about our platform
          </div>
          <p className="text-mainGray2">
            The sky was cloudless and of a deep dark blue the spectaclef a deep
            dark blue
          </p>
          <div className="flex items-center h-24 gap-8">
            <Image
              onClick={handlePrevClick}
              alt=""
              className="hover:cursor-pointer"
              src={arrow}
            />
            <div
              onClick={handleNextClick}
              className="rotate-180"
            >
              <Image className="hover:cursor-pointer" alt="" src={arrow} />
            </div>
          </div>
        </div>
        <div className="relative w-[55%]">
          {comments.map((element, index) => {
            return (
              <>
                <div
                  className={`transition-all duration-700 absolute top-0 space-y-12 ${
                    index == myIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="text-mainGray2 text-xl font-medium">
                    {element.feedback}
                  </p>
                  <div className="flex items-center gap-4">
                    <Image alt="" src={element.avatar} />
                    <div className="flex flex-col">
                      <p className="text-black font-bold text-xl">
                        {element.name}
                      </p>
                      <p className="font-medium text-md text-mainGray2">
                        {element.role}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default SliderComponent;
