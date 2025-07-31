import { MapPin } from "lucide-react";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { useCart } from "../context/CartContext";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

function Navbar({location,getLocation,openDropdown,setOpenDropdown}) {
  const {cartItem} = useCart()
  const [openNav, setOpenNav] = useState(false)
  
  const toggleDropdown = ()=>{
    setOpenDropdown(!openDropdown)
  }


  return (
    <div className="bg-white p-3 shadow-2xl px-4 md:px-0">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* logosection */}
        <div className="flex gap-7 items-center">
          <Link to={"/"}>
            <h1 className="font-bold text-3xl">
              <span className="text-blue-500 font-serif">Gear</span>House
            </h1>
          </Link>
          <div className="md:flex gap-1 cursor-pointer text-grey-700 item-center hidden">
            <MapPin className="text-blue-500" />
            <span className="font-semibold ">
              {location ? <div className="-space-x-2">
                <p>{location.county}</p>
                <p>{location.state}</p>
              </div> : "Add Address"}
            </span>
            <FaCaretDown onClick={toggleDropdown} className="text-xl" />
          </div>
          {
            openDropdown ? <div className="w-[250px] h-max shadow-2xl z-50 bg-white top-16 left-60 border-2 p-5 border-gray-100 rounded-md">
              <h1 className="fonts-semibold mb-4 text-xl flex justify-between">Change Location
                <span onClick={toggleDropdown} className="cursor-pointer"><CgClose/></span>
              </h1>
              <button onClick={getLocation} className="bg-blue-500 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-blue-400">Detect my location</button>
            </div> : null
          }
        </div>
        {/* menu section */}
        <nav className="flex gap-7 items-center">
          <ul className="md:flex gap-7 items-center text-xl font-semibold hidden">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "border-b-4 transition-all border-blue-500"
                  : "text-black"
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                isActive
                  ? "border-b-4 transition-all border-blue-500"
                  : "text-black"
              }
            >
              <li>Products</li>
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive
                  ? "border-b-4 transition-all border-blue-500"
                  : "text-black"
              }
            >
              <li>About</li>
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive
                  ? "border-b-4 transition-all border-blue-500"
                  : "text-black"
              }
            >
              <li>Contact</li>
            </NavLink>
          </ul>
          <Link to={"/cart"} className="relative">
            <IoCartOutline className="h-7 w-7" />
            <span className="bg-blue-500 px-2 rounded-full absolute -top-3 -right-3 text-white">
              {cartItem.length}
            </span>
          </Link>
          <div className="hidden md:block">
            <SignedOut>
              <SignInButton className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700  text-white px-3 py-2 rounded-md cursor-pointer"/>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          {
            openNav ? <HiMenuAlt3 onClick={()=>setOpenNav(false)} className="h-7 w-7 md:hidden"/>:
            <HiMenuAlt1 onClick={()=>setOpenNav(true)} className="h-7 w-7 md:hidden"/>
          }
        </nav>
      </div>
      <ResponsiveMenu openNav={openNav} setOpenNav= {setOpenNav}/>
    </div>
  );
}

export default Navbar;
