"use client";
import logo from "@assets/sidebar/Logo.svg";
import overview from "@assets/sidebar/chart";
import project from "@assets/sidebar/projects";
import organisation from "@assets/sidebar/organisation";
import profile from "@assets/sidebar/profile";
import alert from "@assets/sidebar/info";
import chat from "@assets/sidebar/chat";
import setting from "@assets/sidebar/settings";
import logout from "@assets/sidebar/logout.svg";
import Image from "next/image";
import SideBarElement from "./SideBarElement";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function SideBar() {
  const [userRole, setRole] = useState(null);

  useEffect(() => {
    // Check if window is defined to ensure code is running on the client side
    if (typeof window !== "undefined") {
      const storedRole = localStorage.getItem("role");
      setRole(storedRole);
      console.log(storedRole);
    }
  }, []);

  return (
    <>
      {userRole && (
        <section className="flex">
          <div className="w-[16vw] pt-12 pb-8 h-screen flex flex-col justify-between">
            <section className="space-y-16">
              <Image className="ml-8" alt="logo" src={logo} />
              <section className="flex flex-col ">
                {userRole === "admin" && (
                  <SideBarElement
                    icon={overview()}
                    path={"/overview"}
                    title={"Overview"}
                  />
                )}

                <SideBarElement
                  icon={project()}
                  path={userRole === "admin" ? "/projects/admin" : "/projects"}
                  title={"Projects"}
                />
                {userRole === "admin" && (
                  <SideBarElement
                    icon={overview()}
                    path={"/employees"}
                    title={"Employees"}
                  />
                )}
                <SideBarElement
                  icon={alert()}
                  path={"/report-issue"}
                  title={"Report issue"}
                />
                {userRole === "admin" && (
                  <SideBarElement
                    icon={organisation()}
                    path={"/my-organisation"}
                    title={"My organisation"}
                    numbers={1}
                  />
                )}
              </section>
            </section>

            <section className="flex flex-col ">
              <SideBarElement
                icon={profile()}
                path={"/profile"}
                title={"Profile"}
              />
              <SideBarElement
                icon={setting()}
                path={"/settings"}
                title={"Settings"}
              />
              <SideBarElement
                icon={alert()}
                path={"/help"}
                title={"Help center"}
              />
              <SideBarElement
                icon={chat()}
                path={"/contact"}
                title={"Contact us"}
              />
              <Link
                onClick={() => {
                  localStorage.clear();
                }}
                className="pl-9 pt-2 flex justify-between items-center w-[15vw]"
                href={"/"}
              >
                <div className="flex gap-5">
                  <Image src={logout} alt="logout" />

                  <p className={`text-mainRed font-medium`}>Logout</p>
                </div>
              </Link>
            </section>
          </div>
          <div className="h-[85vh] mt-20 w-[1.5px] bg-mainGray7" />
        </section>
      )}
    </>
  );
}
