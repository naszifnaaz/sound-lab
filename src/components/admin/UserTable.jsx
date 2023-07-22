import { changeUserRole, deactivateUser } from "../../redux/actions/admin";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserTable = ({ users }) => {
  const dispatch = useDispatch();

  return (
    <div class="relative  shadow-md sm:rounded-lg ml-64 ">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" class="px-6 py-3">
              Fullname
            </th>
            <th scope="col" class="px-6 py-3">
              Email
            </th>
            <th scope="col" class="px-6 py-3">
              Role
            </th>
            <th scope="col" class="px-6 py-3">
              Switch Role
            </th>
            <th scope="col" class="px-6 py-3">
              Deactivate
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr
                className={
                  index % 2 === 0 ? "bg-white border-b" : "bg-gray-50 border-b"
                }
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {user.fullname}
                </th>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.role}</td>
                <td className="px-6 py-4">
                  <button
                    className="font-medium text-blue-600  hover:underline"
                    onClick={() =>
                      dispatch(
                        changeUserRole(
                          user._id,
                          user.role === "user" ? "admin" : "user"
                        )
                      )
                    }
                  >
                    {user.role === "user" ? "Admin Access" : "Revoke Access"}
                  </button>
                </td>
                <td class="px-6 py-4">
                  <button
                    className={`font-medium text-blue-600  hover:underline ${
                      user.role === "admin"
                        ? "text-slate-300"
                        : "text- blue-600"
                    }`}
                    onClick={() => dispatch(deactivateUser(user._id))}
                    disabled={user.role === "admin" ? true : false}
                  >
                    Deactivate
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};
