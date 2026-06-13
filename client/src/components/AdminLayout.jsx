
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen">

      <AdminSidebar />

      <div className="flex-1">
        <AdminNavbar />

        <main className="p-6">
          <Outlet />
        </main>
      </div>

    </div>
  );
}