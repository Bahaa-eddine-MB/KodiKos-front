"use client";
import React, { useEffect, useRef } from "react";
import Input from "../Global/Input";

const ConfirmTask = ({ isOpen, onClose }) => {
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
        }   bg-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-4 p-8 rounded-r-lg rounded-tl-lg w-[25rem]`}
      >
        <div className="flex">
          <Input inputProps={{ placeholder: "User Email" }} />

          <button
            onClick={onClose}
            className="bg-transparent w-full py-3 rounded-md text-primary self-end"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmTask;
