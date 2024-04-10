"use client";

import { Square3Stack3DIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="border-r-[.6px] border-gray-500 h-full w-full sticky top-0">
      <header className="py-4 px-2">
        <h3>General</h3>
      </header>
      <ul className="list-none w-3/5 overflow-hidden mx-auto md:w-full flex justify-between bg-gray-200 md:bg-white rounded-lg md:rounded-none md:block">
        <li className="flex-1">
          <Link
            href="/dashboard"
            className={`${
              pathname === "/dashboard" ? "bg-primary text-white" : ""
            } flex items-center gap-2 p-3 hover:backdrop-brightness-75 cursor-pointer`}
          >
            <Square3Stack3DIcon className="w-4" /> <h6> Dashboard</h6>
          </Link>
        </li>
        <li className="flex-1">
          <Link
            href="/employees"
            className={`${
              pathname === "/employees" ? "bg-primary text-white" : ""
            } flex items-center gap-2 p-3 hover:backdrop-brightness-75 cursor-pointer`}
          >
            <UserGroupIcon className="w-4" /> <h6> Employees</h6>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
