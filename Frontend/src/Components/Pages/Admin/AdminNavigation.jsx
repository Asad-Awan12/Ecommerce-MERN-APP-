import React from "react";
import { NavLink } from "react-router-dom";

export const AdminNavigation = () => {
  return (
    <div className="space-y-5 bg-white md:h-[calc(100vh-98px)] flex flex-col justify-between">
     
      <div>
      <div className="mb-5 flex justify-center mt-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            clipRule="evenodd"
          />
        </svg>
        <p className="font-semibold">Admin</p>

      </div>
      <hr/>
      {/* DashBoard nav Bar */}
      <ul className="space-y-5 pt-5 ml-2">
        <li>
            <NavLink to="/dashboard" className={({isActive})=>isActive ? "text-blue-600 font-bold" : "text-black" }>DashBoard</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/add-new-posts" className={({isActive})=>isActive ? "text-blue-600 font-bold" : "text-black" }>Add New Posts</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/manage-posts" className={({isActive})=>isActive ? "text-blue-600 font-bold" : "text-black" }>Manage Posts</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/users" className={({isActive})=>isActive ? "text-blue-600 font-bold" : "text-black" }>Users</NavLink>
        </li>
      </ul>
      </div>
      <div className="mb-3">
        <hr />
        <button className="text-white bg-red-500 font-medium px-5 py-1 ml-2 mt-2 mb-2 rounded-sm">Logout</button>
      </div>
    </div>
  );
};
