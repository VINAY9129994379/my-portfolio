import { Routes, Route } from "react-router-dom";

import Home from "../../pages/Home";
import AboutPage from "../../pages/AboutPage";
import ProjectsPage from "../../pages/ProjectsPage";
import ContactPage from "../../pages/ContactPage";
import ProjectDetail from "../../pages/ProjectDetail";
import ResumeSection from "../about/ResumeSection";

import AdminLayout from "../AdminLayout";
import AdminDashboard from "../AdminDashboard";
import AddProjects from "../AddProjects";
import Messages from "../Messages";
import DeleteProject from "../DeleteProject";
import AdminRoute from "./AdminRoute";

export default function AppRoutes() {
  return (
    <Routes>

      {/* PUBLIC ROUTES */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/resume" element={<ResumeSection />} />

      {/* ADMIN ROUTES (PROPER NESTING) */}
      <Route path="/admin" element={<AdminRoute><AdminLayout /></AdminRoute>}>
        <Route index element={<AdminDashboard />} />
        <Route path="add-project" element={<AddProjects />} />
        <Route path="delete-project" element={<DeleteProject />} />
        <Route path="messages" element={<Messages />} />

      </Route>

    </Routes>
  );
}