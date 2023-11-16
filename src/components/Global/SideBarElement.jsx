"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
const SideBarElement = ({ icon, title, path }) => {
  const pathname = usePathname();

  return (
    <>
      <Link className="hover:bg-mainGray7 py-2  pl-8 flex justify-between items-center w-[15vw]" href={path}>
        <div className="flex gap-6">
          <div
            className={`w-5 ${
              path == pathname
                ? " fill-primary "
                : " fill-mainGray2 "
            }`}
          >
            {icon}
          </div>
          <p
            className={`${
              path == pathname ? "text-primary" : "text-mainGray2"
            }`}
          >
            {title}
          </p>
        </div>

        {path == pathname && (
          <div className="h-8 w-[4.5px] bg-blue-600 rounded-tl-lg rounded-bl-lg" />
        )}
      </Link>
    </>
  );
};

export default SideBarElement;
