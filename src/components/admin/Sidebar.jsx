import logo from "../../assets/sound-lab-white.svg";
import { FiUsers, FiSettings, FiDatabase } from "react-icons/fi";
import { AiOutlineCreditCard } from "react-icons/ai";
import { TbDeviceAnalytics } from "react-icons/tb";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <>
      <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700 fixed">
        <a href="#" className="mx-auto">
          <img className="w-auto h-12 sm:h-12" src={logo} alt="Sound Lab" />
        </a>
        <div className="flex flex-col items-center mt-6 -mx-2">
          <img
            className="object-cover w-24 h-24 mx-2 rounded-full"
            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="avatar"
          />
          <h4 className="mx-2 mt-2 font-medium  dark:text-gray-200">Admin</h4>
          <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
            admin@soundlab.com
          </p>
        </div>

        <div className="flex flex-col items-center flex-1 mt-6">
          {/* Start */}
          {SidebarItems.map((item, index) => {
            return (
              <Link
                to={`/admin/${item.title.toLowerCase()}`}
                key={index}
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              >
                <item.icon />
                <span className="mx-4 font-medium">{item.title}</span>
              </Link>
            );
          })}
          {/* End */}
        </div>
      </aside>
    </>
  );
};

const SidebarItems = [
  {
    title: "Users",
    icon: FiUsers,
  },
  {
    title: "Products",
    icon: FiDatabase,
  },
  {
    title: "Orders",
    icon: AiOutlineCreditCard,
  },
  {
    title: "Analytics",
    icon: TbDeviceAnalytics,
  },
  {
    title: "Logout",
    icon: FiSettings,
  },
];
