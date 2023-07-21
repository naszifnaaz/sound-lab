import { Sidebar } from "./Sidebar";
import { TbDeviceAnalytics } from "react-icons/tb";

export const Analytics = () => {
  return (
    <div>
      <Sidebar />
      <div className="ml-64 p-5 flex items-center justify-center bg-slate-100 ">
        <TbDeviceAnalytics size={36} />
        <h1 className="font-bold text-3xl ml-3">ANALYTICS</h1>
      </div>
    </div>
  );
};
