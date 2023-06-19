import { BiMenu } from "react-icons/bi";
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
      <div className="flex items-center justify-between py-2 lg:p-4 lg:ml-40 lg:mr-40">
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
              <p className="mr-3 text-xl font-semibold hover:underline hover:text-red-400">
                {item.text}
              </p>
            );
          })}
        </div>
        <div className="flex items-center justify-center mr-5">
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
  {
    text: "Grooming",
  },
];
