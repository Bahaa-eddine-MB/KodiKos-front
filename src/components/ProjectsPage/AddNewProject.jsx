import Image from "next/image";

import addIcon from "../../../public/assets/ProjectsPage/ProjectCard/add-icon.svg";

export default function AddNewProject() {
  return (
    <div className="bg-mainGra10 w-fit  rounded-[20px] p-10 flex flex-col gap-3 justify-center items-center transition-all duration-700 group hover:cursor-pointer hover:bg-primary hover:bg-opacity-50">
      <div className="w-6 h-6 fill-primary group-hover:fill-white duration-700">
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.25 11.5C0.25 5.28663 5.28663 0.25 11.5 0.25C17.7134 0.25 22.75 5.28663 22.75 11.5C22.75 17.7134 17.7134 22.75 11.5 22.75C5.28663 22.75 0.25 17.7134 0.25 11.5ZM11.5 2.5C9.11305 2.5 6.82387 3.44821 5.13604 5.13604C3.44821 6.82387 2.5 9.11305 2.5 11.5C2.5 13.887 3.44821 16.1761 5.13604 17.864C6.82387 19.5518 9.11305 20.5 11.5 20.5C13.887 20.5 16.1761 19.5518 17.864 17.864C19.5518 16.1761 20.5 13.887 20.5 11.5C20.5 9.11305 19.5518 6.82387 17.864 5.13604C16.1761 3.44821 13.887 2.5 11.5 2.5Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.625 5.875C12.625 5.57663 12.5065 5.29048 12.2955 5.07951C12.0845 4.86853 11.7984 4.75 11.5 4.75C11.2016 4.75 10.9155 4.86853 10.7045 5.07951C10.4935 5.29048 10.375 5.57663 10.375 5.875V10.375H5.875C5.57663 10.375 5.29048 10.4935 5.07951 10.7045C4.86853 10.9155 4.75 11.2016 4.75 11.5C4.75 11.7984 4.86853 12.0845 5.07951 12.2955C5.29048 12.5065 5.57663 12.625 5.875 12.625H10.375V17.125C10.375 17.4234 10.4935 17.7095 10.7045 17.9205C10.9155 18.1315 11.2016 18.25 11.5 18.25C11.7984 18.25 12.0845 18.1315 12.2955 17.9205C12.5065 17.7095 12.625 17.4234 12.625 17.125V12.625H17.125C17.4234 12.625 17.7095 12.5065 17.9205 12.2955C18.1315 12.0845 18.25 11.7984 18.25 11.5C18.25 11.2016 18.1315 10.9155 17.9205 10.7045C17.7095 10.4935 17.4234 10.375 17.125 10.375H12.625V5.875Z"
          />
        </svg>
      </div>
      <p className="text-primary font-medium duration-700 group-hover:text-white">
        Create a New Project
      </p>
    </div>
  );
}
