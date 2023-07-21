import { Sidebar } from "./Sidebar";
import { AiOutlineCreditCard } from "react-icons/ai";

export const Orders = () => {
  return (
    <div>
      <Sidebar />
      <div className="ml-64 p-5 flex items-center justify-center bg-slate-100 ">
        <AiOutlineCreditCard size={36} />
        <h1 className="font-bold text-3xl ml-3">ORDERS</h1>
      </div>
    </div>
  );
};
