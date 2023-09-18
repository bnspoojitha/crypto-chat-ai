import "./index.css";
import React from "react";
import Image from "next/image";
import Avatar from "@/app/Assets/Avatar.png";
import { RiHomeLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";

type Props = {};

export default function sidebar({}: Props) {
  return (
    // <div className="sidebar flex items-cemnter justify-center">Side Bar </div>
    <div className="sidebar text-[#343333]  p-4 flex flex-col justify-between">
      <div>
        {/* Sidebar Header */}
        <div className="mb-6">
          <Image
            src={Avatar}
            alt="User Avatar"
            className="w-20 h-20 rounded-full mx-auto"
          />
          <h2 className="text-2xl text-center mt-2">User Name</h2>
        </div>

        <div className="divider"></div>
        <div className="flex flex-col justify-start items-center w-full">
          {/* Sidebar Links */}
          <ul className="space-y-2  w-full">
            <li>
              <a href="#" className="text-white  w-full">
                <div className="button-sidebar flex gap-4 p-2 justify-center  items-center w-full h-full ">
                  <RiHomeLine size={32} p-2 />
                  Home
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="text-white ">
                <div className="button-sidebar flex gap-4 p-2 justify-center  items-center ">
                  <CgProfile size={32} />
                  Profile
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="text-white ">
                <div className="button-sidebar flex gap-2 p-2 justify-center  items-center ">
                  <FiSettings size={32} />
                  Settings
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Sign Out Button */}
      <div className="divider"></div>
      <div className="mt-auto">
        <button className="button-sidebar text-white py-2 px-4 rounded w-full">
          Sign Out
        </button>
      </div>
    </div>
  );
}
