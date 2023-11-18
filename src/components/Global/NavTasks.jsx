"use client";
import calender from "../../../public/assets/ProjectsPage/tasks/calender.svg";
import wierd from "../../../public/assets/ProjectsPage/tasks/2-lines.svg";
import Image from "next/image";
import plus from "../../../public/assets/ProjectsPage/ProjectCard/add-icon.svg";
import { useState } from "react";
import AddNewTask from "../ProjectsPage/AddNewTask";

export default function NavTasks() {
  const [selectTitle, setSelectedTitle] = useState("All Tasks");
  const [open, setOpen] = useState(false);
  const closeOpen = () => {
    setOpen(false);
  };
  const openOpen = () => {
    setOpen(true);
  };

  return (
    <div className="flex justify-between ml-7 mb-4 ">
      {open && <AddNewTask isOpen={open} onClose={closeOpen} />}
      <div className="w-1/2">
        <ul className="flex justify-between">
          <li
            onClick={() => setSelectedTitle("All Tasks")}
            className={`pb-5 hover:cursor-pointer transition duration-200 ease-in-out ${
              selectTitle === "All Tasks"
                ? "border-b-primary text-primary border-b-2"
                : "text-[#6C717B"
            }`}
          >
            All Tasks
          </li>
          <li
            onClick={() => setSelectedTitle("On Going")}
            className={`pb-5 hover:cursor-pointer transition duration-200 ease-in-out ${
              selectTitle === "On Going"
                ? "border-b-primary text-primary border-b-2"
                : "text-[#6C717B"
            }`}
          >
            On Going
          </li>
          <li
            onClick={() => setSelectedTitle("Completed")}
            className={`pb-5 hover:cursor-pointer transition duration-200 ease-in-out  ${
              selectTitle === "Completed"
                ? "border-b-primary text-primary border-b-2"
                : "text-[#6C717B"
            }`}
          >
            Completed
          </li>
          <li
            onClick={() => setSelectedTitle("Upcoming")}
            className={`pb-5 hover:cursor-pointer transition duration-200 ease-in-out  ${
              selectTitle === "Upcoming"
                ? "border-b-primary text-primary border-b-2"
                : "text-[#6C717B"
            }`}
          >
            Upcoming
          </li>
          <li
            onClick={() => setSelectedTitle("Paused")}
            className={`pb-5  hover:cursor-pointer transition duration-200 ease-in-out ${
              selectTitle === "Paused"
                ? "border-b-primary text-primary border-b-2"
                : "text-[#6C717B"
            }`}
          >
            Paused
          </li>
        </ul>
      </div>
      <div className="flex  gap-4">
        <div onClick={openOpen} className="h-10 w-10 rounded-xl bg-mainGra10 relative hover:cursor-pointer">
          <Image
           
            src={plus}
            className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div className="h-10 w-10 rounded-xl bg-mainGra10 relative">
          <Image
            src={calender}
            className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div className="w-10 h-10 rounded-xl bg-mainGra10 relative">
          <Image
            src={wierd}
            className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </div>
  );
}
