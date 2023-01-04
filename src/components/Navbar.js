import React, { useState } from "react";
import Mathu from "../assets/mathu.jpg";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => setNav((p) => !p);

  return (
    <div className="w-full fixed h-[80px] bg-[#0a192f] flex justify-between items-center px-3 text-white">
      <div className="flex gap-2 items-center z-20">
        <img
          src={Mathu}
          alt="Mathu"
          className="object-cover w-14 h-14 rounded-full"
        />
        <span className="text-2xl">Sivammathu</span>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex md:items-center">
        <li className="px-4 cursor-pointer hover:text-yellow-500 text-lg">
          Home
        </li>
        <li className="px-4 cursor-pointer hover:text-yellow-500 text-lg">
          About
        </li>
        <li className="px-4 cursor-pointer hover:text-yellow-500 text-lg">
          Skills
        </li>
        <li className="px-4 cursor-pointer hover:text-yellow-500 text-lg">
          Work
        </li>
        <li className="px-4 cursor-pointer hover:text-yellow-500 text-lg">
          Contact
        </li>
      </ul>

      {/* Mobile Menu */}
      <div onClick={handleNav} className="flex z-20 md:hidden">
        {nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>
      <ul
        className={
          !nav
            ? "flex flex-col items-center justify-center absolute top-[0px] left-0 h-screen w-full bg-[#0a192f] ease-in-out duration-500"
            : "fixed -left-[320px]"
        }
      >
        <li className="py-4 cursor-pointer hover:text-yellow-500 text-lg">
          Home
        </li>
        <li className="py-4 cursor-pointer hover:text-yellow-500 text-lg">
          About
        </li>
        <li className="py-4 cursor-pointer hover:text-yellow-500 text-lg">
          Skills
        </li>
        <li className="py-4 cursor-pointer hover:text-yellow-500 text-lg">
          Work
        </li>
        <li className="py-4 cursor-pointer hover:text-yellow-500 text-lg">
          Contact
        </li>
      </ul>

      {/* Social Iconcs */}
      <ul className="hidden fixed left-0 top-[35%] lg:flex flex-col">
        <li className="bg-blue-500 w-[160px] h-[60px] px-5 py-4 ml-[-100px] hover:ml-[-10px] duration-300 cursor-pointer text-gray-100">
          <a className="flex gap-3 items-center justify-between">
            LinkedIn
            <FaLinkedin size={30} />
          </a>
        </li>
        <li className="bg-gray-500 w-[160px] h-[60px] px-5 py-4 ml-[-100px] hover:ml-[-10px] duration-300 cursor-pointer text-gray-100">
          <a className="flex gap-3 items-center justify-between">
            Github
            <FaGithub size={30} />
          </a>
        </li>
        <li className="bg-blue-900 w-[160px] h-[60px] px-5 py-4 ml-[-100px] hover:ml-[-10px] duration-300 cursor-pointer text-gray-100">
          <a className="flex gap-3 items-center justify-between">
            Email Me
            <HiOutlineMail size={30} />
          </a>
        </li>
        <li className="bg-violet-500 w-[160px] h-[60px] px-5 py-4 ml-[-100px] hover:ml-[-10px] duration-300 cursor-pointer text-gray-100">
          <a className="flex gap-3 items-center justify-between">
            Resume
            <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
