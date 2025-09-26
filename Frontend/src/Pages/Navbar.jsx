import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-neutral-900 text-white px-6 shadow-lg">
      <div className="flex justify-between items-center h-16 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#81C784] flex items-center gap-2">
          <svg className="h-8 w-8 text-[#81C784]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h11l4-4m0 8l-4-4H3m3 4h5" />
          </svg>
          EcoSphere
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-lg">
          <NavLink to="/" text="Home" location={location} />
          <NavLink to="/dashboard" text="HeatMap" location={location} />
          <NavLink to="/charts" text="Analytics" location={location} />
          <NavLink to="/ai_predictor" text="Recyclability Analyzer" location={location} />
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none">
          {isOpen ? (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-neutral-800 px-4 pt-2 pb-4 space-y-2 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <NavLink to="/" text="Home" location={location} mobile />
        <NavLink to="/dashboard" text="HeatMap" location={location} mobile />
        <NavLink to="/charts" text="Analytics" location={location} mobile />
        <NavLink to="/ai_predictor" text="Recyclability Analyzer" location={location} mobile />
      </div>
    </nav>
  );
}

function NavLink({ to, text, location, mobile }) {
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      className={`block ${mobile ? "py-2 text-lg" : "hover:text-[#81C784] transition-colors"} ${
        isActive ? "text-[#81C784] font-semibold" : "text-gray-300"
      }`}
    >
      {text}
    </Link>
  );
}

export default Navbar;
