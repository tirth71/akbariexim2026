import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
// import LanguageSelector from "./LanguageSelector";
import logo from "@/assets/logo/20260329_193535.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Certificates", to: "/certificates" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] bg-background/80 backdrop-blur-xl border-b border-border overflow-visible">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="AkbariExim Logo"
              className="h-20 w-auto object-contain"
            />

            <span className="font-bold text-lg">
              AKBARI <span className="text-green-600">EXIM</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-lg text-sm ${location.pathname === link.to
                  ? "bg-green-100 text-green-700"
                  : "text-gray-600 hover:bg-gray-100"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex flex-col items-end">

            <div id="google_translate_element"></div>

            <div className="text-[13px] text-gray-500 mt-1 flex items-center gap-1 cursor-pointer"
              onClick={() => window.open("https://translate.google.com", "_blank")}
            >
              <span>Powered by</span>
              <img
                src="https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_74x24dp.png"
                alt="Google"
                className="h-3"
              />
              <span>Translate</span>
            </div>

          </div>
          {/* 🌐 Translate */}
          {/* <div className="translate-widget flex items-center gap-2 bg-white border border-gray-300 rounded-xl px-3 py-1.5 shadow-sm hover:border-green-600 transition-all">
            <Globe className="w-4 h-4 text-green-600" />
            <div id="google_translate_element"></div>
          </div> */}

          {/* <LanguageSelector /> */}

          {/* CTA */}
          {/* <Button className="bg-green-600 text-white rounded-xl px-4">
              <Link to="/contact">Get Quote</Link>
            </Button> */}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-white p-4 space-y-2"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="block p-3 rounded-lg hover:bg-gray-100"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Translate */}
            <div className="translate-widget flex items-center gap-2 border rounded-lg p-2">
              <Globe className="w-4 h-4 text-green-600" />
              {/* <div id="google_translate_element"></div> */}
            </div>

            <Button className="w-full bg-green-600 text-white mt-2">
              <Link to="/contact">Get Quote</Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;