import { useState } from "react";

const DrobDownMenu = ({ label, className, list, callBack, required }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    toggleDropdown();
    callBack(option); // Callback function to handle the selected option
  };

  return (
    <div className={`group ${className}`}>
      <label className={`text-primaryColor flex pb-2 text-mainGray2`}>
        {label}
        <span className={`${required ? "block text-mainRed pl-2" : "hidden"}`}>
          *
        </span>
      </label>
      <div
        className={`relative  w-full px-3 py-3 border-2 rounded-md ${
          isOpen ? "border-primary" : "border-gray-300 "
        }  `}
      >
        <div
          className="flex justify-between items-center   cursor-pointer"
          onClick={toggleDropdown}
        >
          <span className="text-gray-300">{selectedOption || "Select an option"}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-transform transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"}
            />
          </svg>
        </div>

        {isOpen && (
          <ul className="absolute z-10 mt-4 py-2 bg-white w-full  shadow-lg">
            {list?.map((option) => (
              <li
                key={option}
                className="cursor-pointer px-4 py-2 hover:bg-mainGray7 "
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DrobDownMenu;
