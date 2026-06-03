import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Button from "../ui/Button";

const dropdownData = {
  platform: [
    { label: "AI IT Troubleshooting", href: "/platform#ai-troubleshooting" },
    { label: "Network Monitoring", href: "/platform#network-monitoring" },
    {
      label: "Printer & Device Monitoring",
      href: "/platform#printer-device-monitoring",
    },
    { label: "Support Ticket System", href: "/platform#support-ticket-system" },
    { label: "Monthly Reports", href: "/platform#monthly-reports" },
  ],
  services: [
    {
      label: "AI-Assisted IT Troubleshooting",
      href: "/services#ai-troubleshooting",
    },
    { label: "Internet & Wi-Fi Monitoring", href: "/services#wifi-monitoring" },
    {
      label: "Printer Troubleshooting",
      href: "/services#printer-troubleshooting",
    },
    {
      label: "Device Connectivity Support",
      href: "/services#device-connectivity",
    },
    { label: "Technology Health Reports", href: "/services#health-reports" },
    { label: "Onboarding & Setup Support", href: "/services#onboarding-setup" },
  ],
  industries: [
    { label: "Dental Clinics", href: "/industries#dental-clinics" },
    { label: "Law Firms", href: "/industries#law-firms" },
    { label: "Accounting Firms", href: "/industries#accounting-firms" },
    { label: "Medical Offices", href: "/industries#medical-offices" },
    { label: "Real Estate Offices", href: "/industries#real-estate-offices" },
    { label: "Small Businesses", href: "/industries#small-businesses" },
  ],
};

function DropdownMenu({ label, items, to }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center gap-1 px-3 py-2 font-display font-semibold text-[15px] transition-colors relative group ${
            isActive ? "text-brand" : "text-ink hover:text-brand"
          }`
        }
        aria-expanded={isOpen}
      >
        {({ isActive }) => (
          <>
            {label}
            <ChevronDown
              size={16}
              className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
            {isActive && (
              <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent"></span>
            )}
          </>
        )}
      </NavLink>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-card border border-slate/10 py-2 z-50"
          >
            {items.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="block px-5 py-3 text-[15px] text-ink hover:text-brand hover:bg-cloud/50 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileMenu({ isOpen, onClose }) {
  const [expandedMenu, setExpandedMenu] = useState(null);
  const navigate = useNavigate();

  const toggleSubmenu = (menu) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  const handleNavigation = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-white border-t border-slate/10 overflow-hidden"
        >
          <div className="container-x py-6 space-y-2">
            {/* Home */}
            <button
              onClick={() => handleNavigation("/")}
              className="block w-full text-left px-4 py-3 font-display font-semibold text-ink hover:text-brand hover:bg-cloud/50 rounded-lg transition-colors"
            >
              Home
            </button>

            {/* Platform Dropdown */}
            <div>
              <button
                onClick={() => toggleSubmenu("platform")}
                className="flex items-center justify-between w-full px-4 py-3 font-display font-semibold text-ink hover:text-brand hover:bg-cloud/50 rounded-lg transition-colors"
                aria-expanded={expandedMenu === "platform"}
              >
                Platform
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    expandedMenu === "platform" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {expandedMenu === "platform" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden pl-4"
                  >
                    {dropdownData.platform.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleNavigation(item.href)}
                        className="block w-full text-left px-4 py-2 text-[15px] text-slate hover:text-brand transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services Dropdown */}
            <div>
              <button
                onClick={() => toggleSubmenu("services")}
                className="flex items-center justify-between w-full px-4 py-3 font-display font-semibold text-ink hover:text-brand hover:bg-cloud/50 rounded-lg transition-colors"
                aria-expanded={expandedMenu === "services"}
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    expandedMenu === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {expandedMenu === "services" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden pl-4"
                  >
                    {dropdownData.services.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleNavigation(item.href)}
                        className="block w-full text-left px-4 py-2 text-[15px] text-slate hover:text-brand transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Dropdown */}
            <div>
              <button
                onClick={() => toggleSubmenu("industries")}
                className="flex items-center justify-between w-full px-4 py-3 font-display font-semibold text-ink hover:text-brand hover:bg-cloud/50 rounded-lg transition-colors"
                aria-expanded={expandedMenu === "industries"}
              >
                Industries
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    expandedMenu === "industries" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {expandedMenu === "industries" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden pl-4"
                  >
                    {dropdownData.industries.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleNavigation(item.href)}
                        className="block w-full text-left px-4 py-2 text-[15px] text-slate hover:text-brand transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* About */}
            <button
              onClick={() => handleNavigation("/about")}
              className="block w-full text-left px-4 py-3 font-display font-semibold text-ink hover:text-brand hover:bg-cloud/50 rounded-lg transition-colors"
            >
              About
            </button>

            {/* CTA Buttons */}
            <div className="pt-4 space-y-3">
              <Button
                variant="outline"
                size="lg"
                to="/contact"
                className="w-full"
                onClick={onClose}
              >
                Contact Us
              </Button>
              <Button
                variant="secondary"
                size="lg"
                to="/get-a-quote"
                className="w-full"
                onClick={onClose}
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white border-b border-slate/10 transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container-x">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src="/logo.png" alt="Innovexa Softwares" className="h-10" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 font-display font-semibold text-[15px] transition-colors relative ${
                  isActive ? "text-brand" : "text-ink hover:text-brand"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Home
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent"></span>
                  )}
                </>
              )}
            </NavLink>

            <DropdownMenu
              label="Platform"
              items={dropdownData.platform}
              to="/platform"
            />

            <DropdownMenu
              label="Services"
              items={dropdownData.services}
              to="/services"
            />

            <DropdownMenu
              label="Industries"
              items={dropdownData.industries}
              to="/industries"
            />

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 font-display font-semibold text-[15px] transition-colors relative ${
                  isActive ? "text-brand" : "text-ink hover:text-brand"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  About
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent"></span>
                  )}
                </>
              )}
            </NavLink>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="md" to="/contact">
              Contact Us
            </Button>
            <Button variant="secondary" size="md" to="/get-a-quote">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-ink hover:text-brand transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}
