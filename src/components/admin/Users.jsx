import { Sidebar } from "./Sidebar";
import { FiUsers } from "react-icons/fi";
import { UserTable } from "./UserTable";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/actions/admin";

export const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.admin.users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div>
      <Sidebar />
      <div className="ml-64 p-5 flex items-center justify-center bg-slate-100 ">
        <FiUsers size={36} />
        <h1 className="font-bold text-3xl ml-3">USERS ({users.length})</h1>
      </div>
      <UserTable users={users} />
    </div>
  );
};
