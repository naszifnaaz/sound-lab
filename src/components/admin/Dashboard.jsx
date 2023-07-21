import { Sidebar } from "./Sidebar";
import { RxDashboard } from "react-icons/rx";

export const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <div className="ml-64 p-5 flex items-center justify-center bg-slate-100 ">
        <RxDashboard size={36} />
        <h1 className="font-bold text-3xl ml-3">DASHBOARD</h1>
      </div>
    </div>
  );
};
