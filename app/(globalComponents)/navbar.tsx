"use client";

import Link from "next/link";
import { UserProfileResponse } from "../_type/type";
import { logout } from "../_service/logout";

interface NavbarProps {
  profile: UserProfileResponse | null;
}





export default function Navbar({ profile }:  NavbarProps ) {
  const user: UserProfileResponse | null= profile;
  console.log("user",user?.data)

  return (
    <div className="navbar    max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Navbar Start - Logo and Mobile Menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
           
            <li>
              <Link href="/contact-us">Contact</Link>
            </li>
          </ul>
        </div>
        {/* left side logo image  */}
        <div className="h-20 w-20">
          <img src="/logo.jpeg" alt="" className=" rounded-full " />
        </div>
      </div>

      {/* Navbar Center - Desktop Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about-us">About us</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact us</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>

      {/* Navbar End - Profile Picture Dropdown */}
     {user?.success? <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar placeholder"
          >
            <div className="bg-neutral text-neutral-content w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <span className="text-xs font-bold">UI</span>
            </div>
          </div>
          <ul
            tabIndex={-1}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow"
          >  <p className="font-bold ml-3">{user?.data?.name}</p>
             <p className="font-bold ml-3">{user?.data.email}</p>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link href="/settings">Settings</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className="font-bold text-red-600" onClick={()=>{logout()}}>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>:<Link className="navbar-end font-bold text-primary" href={"/login"}>Login</Link>}
    </div>
  );
}
