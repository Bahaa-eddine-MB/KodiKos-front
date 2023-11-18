"use client";
import React, { useEffect, useRef } from "react";
import DrobDownMenu from "../Global/DropDownMenu";

const TroubleShoot = ({ title, name, type, description, isOpen, onClose }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose(); // Run the callback when clicked outside the popup
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose(); // Run the callback when the "Escape" key is pressed
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Disable scrolling when the popup is open
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto"; // Enable scrolling when the popup is closed
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto"; // Cleanup event listeners and restore scrolling
    };
  }, [isOpen, onClose]);

  return (
    <div className="">
      {isOpen && <div className="fixed inset-0 bg-opacity-75 bg-black z-10" />}
      <div
        ref={popupRef}
        className={`z-10 ${
          !isOpen ? "hidden" : "absolute"
        }   bg-white left-8 bottom-8 space-y-4 p-8 rounded-r-lg rounded-tl-lg w-[25rem]`}
      >
        <div className="flex justify-between pb-2">
          <div className="text-black font-semibold text-lg">{title}</div>
          <div className="text-primary font-medium text-lg">{name}</div>
        </div>
        <p className="font-semibold text-lg">{type}</p>
        <p className="text-mainGray2">{description}</p>
        <DrobDownMenu list={["use x", "user y", "user z"]} />
        <button onClick={onClose} className="bg-primary w-full py-3 rounded-md text-white">
          Submit
        </button>
      </div>
    </div>
  );
};

export default TroubleShoot;
