import React from "react";
import { Link, NavLink } from "react-router";
import "./navbar.css";
import logo from "../../assets/logo.png";
import git from '../../assets/git.png'

export default function Navbar() {
  const navLinks = [
    <li key='1'>
      <NavLink to="/">Home</NavLink>
    </li>,
    <li key='2'>
      <NavLink to="/apps">Apps</NavLink>
    </li>,
    <li key='3'>
      <NavLink to="/installation">Installation</NavLink>
    </li>,
  ];
  const textColor = "bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent";
  return (
    <div className="max-w-[1600px] mx-auto shadow-sm">
      <div className="navbar max-w-[1440px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-6 md:w-10 h-6 md:h-10" />
            <Link to={'/'} className={`text-base font-bold ${textColor}`}>HERO.IO</Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-md font-semibold ">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to={'https://github.com/asemrashed'} className="btn btn-sm md:btn-md md:px-6 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] border-0 hover:from-[#5328D1] hover:to-[#8A52D9] transition-all duration-200 text-white">
            <img src={git} alt="git" />
            Contribute
          </Link>
        </div>
      </div>
    </div>
  );
}
