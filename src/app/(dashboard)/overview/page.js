"use client";
import React, { useState } from "react";
import Image from "next/image";
import office1 from "@assets/overview/office1.svg";
import office2 from "@assets/overview/office2.svg";
import office3 from "@assets/overview/office3.svg";
import office4 from "@assets/overview/office4.svg";
import office5 from "@assets/overview/office5.svg";
import office6 from "@assets/overview/office6.svg";
import office7 from "@assets/overview/office7.svg";
import ProjectsHeader from "@/components/ProjectsPage/ProjectsHeader";
import TroubleShoot from "@/components/overview/troubleshoot";

const Dashboard = () => {
  const [isOpen, setOpen] = useState(false);
  const closePopup = () => {
    setOpen(false);
  };
  const openPopup = () => {
    setOpen(true);
  };
  return (
    <div className="mt-16 ml-7 mr-10 w-full pb-8 ">
      <ProjectsHeader
        text={"Here are your offices"}
        title={"My organisation"}
      />
      <section className="p-8 mt-6 border-2 border-gray-300 rounded-lg">
        <div className="flex justify-center">
          <Image className="h-[50%]" alt="" src={office1} />
          <Image className="h-[50%]" alt="" src={office2} />
          <Image alt="" src={office3} />
        </div>
        <div className="flex justify-center">
          <div className="relative">
              <TroubleShoot
                description={
                  "Perpetual sincerity out suspected necessary one but provision satisfied. Respect nothing use set waiting pursuit"
                }
                isOpen={isOpen}
                onClose={closePopup}
                name={"Department Name"}
                title={"Title"}
                type={"Trouble type "}
              />
            <Image alt="" src={office4} />
            <div
              onClick={openPopup}
              className="absolute bottom-3 left-3 fill-red-600 transition-all duration-700 hover:fill-red-400 hover:cursor-pointer"
            >
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24.375 24.375H20.625V13.125H24.375M24.375 31.875H20.625V28.125H24.375M22.5 3.75C20.0377 3.75 17.5995 4.23498 15.3247 5.17726C13.0498 6.11953 10.9828 7.50065 9.24175 9.24175C5.72544 12.7581 3.75 17.5272 3.75 22.5C3.75 27.4728 5.72544 32.2419 9.24175 35.7583C10.9828 37.4994 13.0498 38.8805 15.3247 39.8227C17.5995 40.765 20.0377 41.25 22.5 41.25C27.4728 41.25 32.2419 39.2746 35.7583 35.7583C39.2746 32.2419 41.25 27.4728 41.25 22.5C41.25 20.0377 40.765 17.5995 39.8227 15.3247C38.8805 13.0498 37.4994 10.9828 35.7583 9.24175C34.0172 7.50065 31.9502 6.11953 29.6753 5.17726C27.4005 4.23498 24.9623 3.75 22.5 3.75Z" />
              </svg>
            </div>
          </div>
          <Image alt="" src={office5} />
          <Image alt="" src={office6} />
          <Image alt="" src={office7} />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
