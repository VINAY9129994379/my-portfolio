
import { NavLink } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#07080f]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold tracking-wide">
          VinayTech<span className="text-[#7c6dfa]">.</span>
        </NavLink>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <NavLink to="/" className={({ isActive }) =>
            isActive ? "text-[#7c6dfa]" : "text-gray-300 hover:text-white"
          }>
            Home
          </NavLink>

          <NavLink to="/about" className={({ isActive }) =>
            isActive ? "text-[#7c6dfa]" : "text-gray-300 hover:text-white"
          }>
            About
          </NavLink>

          <NavLink to="/projects" className={({ isActive }) =>
            isActive ? "text-[#7c6dfa]" : "text-gray-300 hover:text-white"
          }>
            Projects
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) =>
            isActive ? "text-[#7c6dfa]" : "text-gray-300 hover:text-white"
          }>
            Contact
          </NavLink>
        </div>

        {/* CTA + AUTH */}
        <div className="flex items-center gap-3">

          {/* Resume */}
          <NavLink
            to="/resume"
            className="px-5 py-2.5 bg-[#1a1732] rounded-lg text-sm font-semibold hover:bg-[#6a5ae0] transition"
          >
            Resume
          </NavLink>

          {/* Hire Me */}
          <NavLink
            to="/contact"
            className="px-5 py-2.5 bg-[#7c6dfa] rounded-lg text-sm font-semibold hover:bg-[#6a5ae0] transition"
          >
            Hire Me
          </NavLink>

          {/* 🔥 LOGIN / USER */}
          <SignedOut>
            <SignInButton>
              <button className="px-4 py-2 border border-white/20 rounded-lg text-sm hover:bg-white/10 transition">
                Login
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

        </div>

      </div>
    </nav>
  );
}
