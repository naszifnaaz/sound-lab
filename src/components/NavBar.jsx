import { BiMenu, BiUser } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import sound_lab_black from "../assets/sound-lab-black.svg";

export const NavBar = () => {
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
          <BiMenu className="text-3xl mr-1 cursor-pointer lg:hidden" />
          <img
            src={sound_lab_black}
            className="w-40 lg:w-52 cursor-pointer"
            alt="sound-lab-logo-black"
          />
        </div>
        <div className="hidden lg:flex ">
          {NavItems.map((item, index) => {
            return (
              <p className="mr-4 text-lg font-light hover:underline hover:text-red-400 hover:font-semibold">
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
