import { Sidebar } from "./Sidebar";
import { FiDatabase } from "react-icons/fi";

export const Products = () => {
  return (
    <div>
      <Sidebar />
      <div className="ml-64 p-5 flex items-center justify-center bg-slate-100 ">
        <FiDatabase size={36} />
        <h1 className="font-bold text-3xl ml-3">PRODUCTS</h1>
      </div>
    </div>
  );
};
