"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
const SideBarElement = ({ icon, title, path, numbers }) => {
  const pathname = usePathname();

  return (
    <>
      <Link
        className="hover:bg-mainGray7 py-2  pl-8 flex justify-between items-center w-[15vw]"
        href={path}
      >
        <div className="flex gap-6">
          <div
            className={`w-5 ${
              path == pathname ? " fill-primary " : " fill-mainGray2 "
            }`}
          >
            {icon}
          </div>
          <div className="flex gap-2  items-center">
            <p
              className={`${
                path == pathname ? "text-primary font-medium" : "text-mainGray2"
              }`}
            >
              {title}
            </p>
            {numbers && (
              <div className="text-white bg-mainRed rounded-full flex items-center justify-center text-xs w-5 h-5">
                {numbers}
              </div>
            )}
          </div>
        </div>

        {path == pathname && (
          <div className="h-8 w-[4.5px] bg-blue-600 rounded-tl-lg rounded-bl-lg" />
        )}
      </Link>
    </>
  );
};

export default SideBarElement;
