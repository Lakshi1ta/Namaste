import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const section = document.getElementById(id);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 300);
    } else {
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }

    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-sm">

      <div className="container-custom">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}

          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src="/logo.png"
              alt="Logo"
              className="w-12 h-12 object-contain"
            />
            
            <div>
              
              <h2 className="text-lg font-semibold text-white">
                Namaste
              </h2>

              <p className="text-[10px] tracking-[3px] text-gray-300">
                CAFE & BISTRO
              </p>
            </div>
          </div>

          {/* Desktop Menu */}

          <ul className="hidden md:flex items-center gap-8 text-white text-sm">

            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-[#d4a24c] transition"
              >
                Home
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-[#d4a24c] transition"
              >
                About
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToSection("gallery")}
                className="hover:text-[#d4a24c] transition"
              >
                Gallery
              </button>
            </li>

            <li>
              <button
                onClick={() => navigate("/menu")}
                className="hover:text-[#d4a24c] transition"
              >
                Menu
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-[#d4a24c] transition"
              >
                Contact
              </button>
            </li>

          </ul>

          {/* Order Button */}

          <button
            onClick={() => navigate("/menu")}
            className="hidden md:block bg-[#d4a24c] text-black px-5 py-2 rounded-md font-medium hover:opacity-90 transition"
          >
            Order Online →
          </button>

          {/* Mobile Menu Button */}

          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="md:hidden bg-[#111] text-white p-6">

          <div className="flex flex-col gap-5">

            <button
              onClick={() => scrollToSection("home")}
              className="text-left"
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection("about")}
              className="text-left"
            >
              About
            </button>

            <button
              onClick={() => navigate("/menu")}
              className="text-left"
            >
              Menu
            </button>

            <button
              onClick={() => scrollToSection("gallery")}
              className="text-left"
            >
              Gallery
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-left"
            >
              Contact
            </button>

          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;