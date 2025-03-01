import SidebarItem from "./SidebarItem";

import { FaUserAlt , FaBook } from "react-icons/fa";
import { RiRecordCircleFill } from "react-icons/ri";

export default function Sidebar() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side shadow-xl border-r-[0.5px] border-[#ccc] font-[poppins]">
        <h1 className="text-2xl font-bold text-center p-4 bg-primary">E-Library Admin</h1>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 gap-6">
          <SidebarItem icon={<FaUserAlt />} link="users" text="Users" />
          <SidebarItem icon={<RiRecordCircleFill/>} link="borrowRecords" text="Borrow Records" />
          <SidebarItem icon={<FaBook/>} link="books" text="Books" />
        </ul>
      </div>
    </div>
  );
}
