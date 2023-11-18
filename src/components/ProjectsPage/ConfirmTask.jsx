"use client";
import React, { useEffect, useRef, useState } from "react";
import Input from "../Global/Input";

const ConfirmTask = ({ isOpen, onClose }) => {
  const [priority, setPriority] = useState("high");
  const [type, setType] = useState("no");
  const changePriority = (value) => {
    setPriority(value);
  };
  const changeType = (value) => {
    setType(value);
  };
  const popupRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto"; // Cleanup event listeners and restore scrolling
    };
  }, [isOpen, onClose]);

  return (
    <div className="">
      <div
        ref={popupRef}
        className={`z-10 ${
          !isOpen ? "hidden" : "fixed"
        }   bg-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-4 p-8 rounded-lg w-[25rem]`}
      >
        <div className="text-black font-semibold text-lg pb-4">
          Add new task
        </div>
        <p className="text-mainGray2 text-md pb-2">Select priority</p>
        <div className="flex gap-4 pb-4">
          <div
            onClick={() => {
              changePriority("high");
            }}
            className={`px-4 py-2 border-2 border-primary text-xs rounded-xl transition-all duration-700 hover:cursor-pointer  ${
              priority == "high"
                ? "bg-primary text-white"
                : "bg-transparent text-black"
            }`}
          >
            High priority
          </div>
          <div
            onClick={() => {
              changePriority("medium");
            }}
            className={`px-4 py-2 border-2 border-primary text-xs rounded-xl transition-all duration-700 hover:cursor-pointer ${
              priority == "medium"
                ? "bg-primary text-white"
                : "bg-transparent text-black"
            }`}
          >
            Low priority
          </div>
          <div
            onClick={() => {
              changePriority("low");
            }}
            className={`px-4 py-2 border-2 border-primary text-xs rounded-xl transition-all duration-700 hover:cursor-pointer ${
              priority == "low"
                ? "bg-primary text-white"
                : "bg-transparent text-black"
            }`}
          >
            Low priority
          </div>
        </div>
        <p className="text-mainGray2 text-md pb-2">Select Type</p>
        <div className="flex gap-4 pb-4">
          <div
            onClick={() => {
              changeType("no");
            }}
            className={`px-4 py-2 border-2 border-primary text-sm rounded-xl transition-all duration-700 hover:cursor-pointer ${
              type == "no"
                ? "bg-primary text-white"
                : "bg-transparent text-black"
            }`}
          >
            No documents
          </div>
          <div
            onClick={() => {
              changeType("yes");
            }}
            className={`px-4 py-2 border-2 border-primary text-sm rounded-xl transition-all duration-700 hover:cursor-pointer ${
              type == "yes"
                ? "bg-primary text-white"
                : "bg-transparent text-black"
            }`}
          >
            With documents
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col gap-4">
            <div className="text-mainGray2">User Email</div>
            <p className="text-gray-300 text-sm">user@gmail.com</p>
          </div>

          <button
            onClick={onClose}
            className="bg-transparent w-full  rounded-md text-primary self-end"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmTask;
