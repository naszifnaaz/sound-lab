import { BiMenu, BiUser } from "react-icons/bi";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import sound_lab_black from "../assets/sound-lab-black.svg";
import { useState } from "react";

export const NavBar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  console.log(mobileNav);
  return (
    <div>
      {/* Pre NavBar */}
      <div className="bg-blue-50">
        <p className="text-center text-xs p-2 font-semibold lg:text-sm">
          Where Sound Meets Imagination!
        </p>
      </div>
      {/* Navbar */}
      <div className="flex items-center justify-between py-2 lg:p-4">
        <div className="flex items-center justify-center ml-5 ">
          {mobileNav ? (
            <AiOutlineClose
              className="text-3xl mr-1 cursor-pointer lg:hidden"
              onClick={() => setMobileNav((prev) => !prev)}
            />
          ) : (
            <BiMenu
              className="text-3xl mr-1 cursor-pointer lg:hidden"
              onClick={() => setMobileNav((prev) => !prev)}
            />
          )}

          <img
            src={sound_lab_black}
            className="w-40 lg:w-52 cursor-pointer"
            alt="sound-lab-logo-black"
          />
        </div>
        <div className="hidden lg:flex ">
          {NavItems.map((item, index) => {
            return (
              <p
                key={index}
                className="mr-4 text-lg font-light    link link-underline link-underline-black text-black"
              >
                {item.text}
              </p>
            );
          })}
        </div>
        <div className="hidden lg:flex">
          <input
            type="text"
            placeholder='Search "Headphones..."'
            className="bg-gray-200 py-2 px-6 rounded-full w-80"
          />
        </div>
        <div className="flex items-center justify-center mr-5">
          <BiUser className="text-3xl mr-3 cursor-pointer" />
          <AiOutlineSearch className="text-3xl mr-3 cursor-pointer" />
          <BsBag className="text-3xl cursor-pointer" />
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={mobileNav ? "block lg:hidden" : "hidden lg:hidden"}>
        <h1 className="font-semibold m-3 text-lg">Categories</h1>
        <div className="grid grid-cols-3 m-4">
          <div className="p-5 flex flex-col items-center justify-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_100x.png?v=1684827062"
              alt="nav-item"
            />
            <p className="text-xs text-center">Wireless Earbuds</p>
          </div>
          <div className="p-5 flex flex-col items-center justify-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Neckbands_06214c1a-5e30-48ea-ac14-4a6bff679f48_100x.png?v=1684828287"
              alt="nav-item"
            />
            <p className="text-xs text-center">Neckbands</p>
          </div>
          <div className="p-5 flex flex-col items-center justify-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Rockerz_100x.png?v=1684827714"
              alt="nav-item"
            />
            <p className="text-xs text-center">Wireless Headphones</p>
          </div>
          <div className="p-5 flex flex-col items-center justify-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/box-5_100x.png?v=1684827751"
              alt="nav-item"
            />
            <p className="text-xs text-center">Wireless Speakers</p>
          </div>
          <div className="p-5 flex flex-col items-center justify-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/bassheads-Wired-Headphones_0877b292-85ab-42ed-a055-26e1c246be73_100x.png?v=1684827787"
              alt="nav-item"
            />
            <p className="text-xs text-center">Wired Headphones</p>
          </div>
          <div className="p-5 flex flex-col items-center justify-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/latest_background_b4f773ca-05d9-41cc-a7cf-3104993ae895_100x.png?v=1684827816"
              alt="nav-item"
            />
            <p className="text-xs text-center">Wired Earphones</p>
          </div>
          <div className="p-5 flex flex-col items-center justify-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Collections_5baef8f1-a67a-40a5-a537-4258c6caae6a_100x.png?v=1684827849"
              alt="nav-item"
            />
            <p className="text-xs text-center">Soundbars</p>
          </div>
          <div className="p-5 flex flex-col items-center justify-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Immortal_category_Image_100x.png?v=1684827903"
              alt="nav-item"
            />
            <p className="text-xs text-center">Gaming Headphones</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavItems = [
  {
    text: "Earphones",
  },
  {
    text: "Headphones",
  },
  {
    text: "Speakers",
  },
];
