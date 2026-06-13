import { useLocation } from "react-router-dom";

import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import AppRoutes from "./components/routes/AppRoutes";

export default function App() {
  const location = useLocation();

  const hideLayout =
    location.pathname.startsWith("/admin");

  return (
    <div className="bg-[#07080f] text-white min-h-screen">
      {!hideLayout && <Navbar />}

      <AppRoutes />

      {!hideLayout && <Footer />}
    </div>
  );
}