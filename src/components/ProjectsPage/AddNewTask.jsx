"use client";
import React, { useEffect, useRef, useState } from "react";
import DrobDownMenu from "../Global/DropDownMenu";
import Input from "../Global/Input";
import InputTextArea from "../Global/inputTextArea";
import ConfirmTask from "./confirmTask";

const AddNewTask = ({ isOpen, onClose }) => {
  const [open, setOpen] = useState(false);
  const popupRef = useRef(null);
  const closeOpen = () => {
    setOpen(false);
  };
  const openOpen = () => {
    setOpen(true);
  };
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
      {open ? (
        <ConfirmTask isOpen={open} onClose={onClose} />
      ) : (
        <div
          ref={popupRef}
          className={`z-10 ${
            !isOpen ? "hidden" : "fixed"
          }   bg-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-4 p-8 rounded-r-lg rounded-tl-lg w-[25rem]`}
        >
          <Input inputProps={{ placeholder: "Task Title" }} />
          <DrobDownMenu list={["use x", "user y", "user z"]} />
          <DrobDownMenu list={["use x", "user y", "user z"]} />
          <InputTextArea
            label={"Task Description"}
            inputProps={{ placeholder: "Task description" }}
          />
          <button
            onClick={() => {
              openOpen();
            }}
            className="bg-primary w-full py-3 rounded-md text-white self-end"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default AddNewTask;
