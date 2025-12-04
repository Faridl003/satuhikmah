import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navigate = useNavigate();

  const navigation = [
    { name: "Beranda", href: "#home" },
    {
      name: "Program",
      href: "#program",
      // dropdown: [
      //   { name: "Pelatihan", href: "#program-pelatihan" },
      //   { name: "Mentori  ng", href: "#program-mentoring" },
      // ],
    },
    {
      name: "Produk",
      href: "#produk",
      // dropdown: [
      //   { name: "E-Book", href: "#produk-ebook" },
      //   { name: "Kelas Online", href: "#produk-kelas" },
      // ],
    },
    { name: "5 Core Tes", href: "/quiz/1" },
    { name: "Tim Kami", href: "#team" },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/" + href);
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }

    setIsOpen(false);
    setOpenDropdown(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";

      navigation.forEach((item) => {
        // SKIP jika bukan anchor #
        if (!item.href || !item.href.startsWith("#")) return;

        const section = document.querySelector(item.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            currentSection = item.href;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
            <img
              src="/lovable-uploads/d6604ed3-4ec7-4ef7-bc70-c7c7008ab589.png"
              alt="SatuHikmah Logo"
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-[#1E3A5F]">SatuHikmah</span>
          </Link>

          {/* Menu Tengah */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-8">
            {navigation.map((item) => {
              const isActive = activeSection === item.href;

              if (item.dropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-1 text-sm font-medium ${
                        isActive ? "text-[#1E3A5F] font-semibold" : "text-black"
                      } hover:text-[#1E3A5F] transition-colors`}
                    >
                      {item.name}
                      <ChevronDown size={16} />
                    </button>

                    {/* Dropdown yang diperbaiki */}
                    <div
                      className={`absolute left-0 top-full mt-0 w-44 bg-white shadow-lg rounded-md border border-gray-100 py-2 z-[9999] transition-all duration-150 ease-out ${
                        openDropdown === item.name
                          ? "opacity-100 visible translate-y-1"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.dropdown.map((sub) => (
                        <button
                          key={sub.name}
                          onClick={() => handleNavClick(sub.href)}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        >
                          {sub.name}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              }

              // Item biasa
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-sm font-medium relative transition-colors ${
                    isActive
                      ? "text-[#1E3A5F] font-semibold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-[#1E3A5F]"
                      : "text-black hover:text-[#1E3A5F]"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>

          {/* Tombol kanan */}
          <div className="hidden md:flex">
            <Button
              onClick={() => handleNavClick("#contact")}
              className="bg-[#1E3A5F] hover:bg-[#1E4A7A] text-white text-sm font-medium rounded-md px-5 py-2"
            >
              Kontak Kami
            </Button>
          </div>

          {/* Tombol mobile */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          {navigation.map((item) => (
            <div key={item.name} className="px-4 py-2">
              {item.dropdown ? (
                <details>
                  <summary className="cursor-pointer text-gray-800 font-medium flex items-center justify-between">
                    {item.name}
                    <ChevronDown size={16} />
                  </summary>
                  <div className="mt-2 ml-4 space-y-2">
                    {item.dropdown.map((sub) => (
                      <button
                        key={sub.name}
                        onClick={() => handleNavClick(sub.href)}
                        className="block text-left text-sm text-gray-600 hover:text-[#1E3A5F]"
                      >
                        {sub.name}
                      </button>
                    ))}
                  </div>
                </details>
              ) : (
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="block text-left text-gray-800 font-medium hover:text-[#1E3A5F]"
                >
                  {item.name}
                </button>
              )}
            </div>
          ))}
          <div className="px-4 py-3">
            <Button
              onClick={() => handleNavClick("#contact")}
              className="w-full bg-[#1E3A5F] hover:bg-[#1E4A7A] text-white font-medium rounded-md"
            >
              Kontak Kami
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
