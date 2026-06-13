import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0c14] mt-10">

      <div className="max-w-6xl mx-auto px-6 py-12 ">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              VinayTech<span className="text-[#7c6dfa]">.com</span>
            </h2>

            <p className="text-gray-400 text-sm mt-3 max-w-sm">
              Full Stack Developer focused on building modern web apps using
              React, Node.js, PostgreSQL and AI integrations.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-10">

            <div>
              <h3 className="text-white font-semibold mb-3">Navigation</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/" className="hover:text-white">Home</Link></li>
                <li><Link to="/projects" className="hover:text-white">Projects</Link></li>
                <li><Link to="/about" className="hover:text-white">About</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3">Projects</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <Link to="/projects">
                <li className="hover:text-white cursor-pointer">AI SaaS App</li>
                <li className="hover:text-white cursor-pointer">Movie Booking</li>
                </Link>

                <Link to="/"> <li className="hover:text-white cursor-pointer">Portfolio</li></Link>
              </ul>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Vinay. All rights reserved.
          </p>

          <div className="flex gap-4 text-sm text-gray-400">
            <a href="https://github.com/VINAY9129994379/" target="_blank" className="hover:text-white">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/vinay-kumar-b66504272/" target="_blank" className="hover:text-white">
              LinkedIn
            </a>
            <a href="mailto:vinay2272001@email.com" className="hover:text-white">
              Email
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}