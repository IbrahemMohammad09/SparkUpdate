import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/image/logo.webp";

const links = [
  { name: "Home", to: "/" },
  { name: "Our Services", to: "/services" },
  { name: "Our Project", to: "/projects" },
  { name: "Our App", to: "/app" },
  { name: "Contact US", to: "/contact_us" },
  { name: "Our Team", to: "/team" },
  { name: "About Us", to: "/about_us" },
];

// Variants for underline
const underlineVariantsDesktop = {
  rest: { scaleX: 0, x: "-100%" },
  hover: { scaleX: 1, x: "0%" },
};

const underlineVariantsMobile = {
  rest: { scaleX: 0 },
  hover: { scaleX: 1 },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const activeClass = "text-[#1a92ce]";
  const defaultClass = "text-gray-600";

  return (
    <nav className="bg-white shadow-md w-full z-50 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <img src={logo} alt="Logo Spark" className="w-8 lg:w-15" />
            <span className="font-roboto-serif text-lg lg:text-2xl text-gray-800">
              SPARK
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {links.map((link) => (
              <div key={link.name} className="relative inline-block">
                <NavLink to={link.to}>
                  {({ isActive }) => (
                    <motion.div
                      className="py-2 px-1 cursor-pointer"
                      initial="rest"
                      animate="rest"
                      whileHover="hover"
                    >
                      <span
                        className={`font-medium font-roboto-serif transition-colors duration-200 ${
                          isActive ? activeClass : defaultClass
                        }`}
                      >
                        {link.name}
                      </span>
                      <motion.div
                        className="absolute bottom-0 left-0 h-1 bg-[#1a92ce] origin-left"
                        style={{ width: "100%" }}
                        variants={underlineVariantsDesktop}
                        transition={{ duration: 0.15, ease: "easeInOut" }}
                      />
                    </motion.div>
                  )}
                </NavLink>
              </div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="focus:outline-none cursor-pointer"
            >
              {isOpen ? (
                <HiX size={28} className="text-gray-700" />
              ) : (
                <HiMenu size={28} className="text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden bg-white shadow-lg absolute top-full left-0 w-full z-40"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col items-center px-4 pt-4 pb-6 space-y-4">
              {links.map((link) => (
                <div
                  key={link.name}
                  className="relative w-full text-center inline-block"
                >
                  <NavLink to={link.to} onClick={() => setIsOpen(false)}>
                    {({ isActive }) => (
                      <motion.div
                        className="px-6 py-3 rounded-md cursor-pointer"
                        initial="rest"
                        animate="rest"
                        whileHover="hover"
                        variants={{
                          rest: { backgroundColor: "transparent" },
                          hover: { backgroundColor: "#E6F7FF" },
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <span
                          className={`font-medium text-lg ${
                            isActive ? activeClass : defaultClass
                          }`}
                        >
                          {link.name}
                        </span>
                        <motion.div
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 bg-[#1a92ce]"
                          style={{ width: "25%", transformOrigin: "center" }}
                          variants={underlineVariantsMobile}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                      </motion.div>
                    )}
                  </NavLink>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
