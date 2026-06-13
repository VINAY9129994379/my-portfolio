
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  PlusSquare,
  Mail,
  LogOut,
} from "lucide-react";
import { useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";


export default function AdminSidebar() {
   const { signOut } = useClerk();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate("/"); // home page
  };
  return (
    <aside className="w-64 h-screen bg-[#161724] border-r border-white/10 p-5">

      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold">
          VinayTech<span className="text-[#7c6dfa]">Admin</span>
        </h1>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-2">

        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
              isActive
                ? "bg-[#7c6dfa] text-white"
                : "text-gray-400 hover:bg-white/5"
            }`
          }
        >
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>


        <NavLink
          to="/admin/add-project"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
              isActive
                ? "bg-[#7c6dfa] text-white"
                : "text-gray-400 hover:bg-white/5"
            }`
          }
        >
          <PlusSquare size={18} />
          Add Project
        </NavLink>

        

        <NavLink
          to="/admin/delete-project"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
              isActive
                ? "bg-[#7c6dfa] text-white"
                : "text-gray-400 hover:bg-white/5"
            }`
          }
        >
          <PlusSquare size={18} />
          Delete Project
        </NavLink>

        <NavLink
          to="/admin/messages"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
              isActive
                ? "bg-[#7c6dfa] text-white"
                : "text-gray-400 hover:bg-white/5"
            }`
          }
        >
          <Mail size={18} />
          Messages
        </NavLink>

       

      </nav>

      {/* Logout */}
       <div className="absolute bottom-5">
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 text-red-400 hover:text-red-300"
      >
        <LogOut size={18} />
        Logout
      </button>
    </div>
    </aside>
  );
}