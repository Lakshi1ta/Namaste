import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const section = document.getElementById(id);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
          });
        }
      }, 300);
    } else {
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <footer className="bg-[#0f0f0f] py-12 md:py-16 mt-10">
      <div className="container-custom">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}

          <div>
            <div className="flex items-center gap-2">
                <img
              src="/logo.png"
              alt="Logo"
              className="w-12 h-12 mb-2 object-contain"
            />
            <h2 className="text-2xl mb-4 font-semibold text-white">
              Namaste
            </h2>
            </div>

            <p className="text-gray-400 text-sm leading-7">
              Premium coffee, delicious food and
              unforgettable moments.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="gold mb-4 font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <button
                  onClick={() => goToSection("home")}
                  className="hover:text-[#d4a24c] transition"
                >
                  Home
                </button>
              </li>

              <li>
                <button
                  onClick={() => goToSection("about")}
                  className="hover:text-[#d4a24c] transition"
                >
                  About
                </button>
              </li>

              <li>
                <button
                  onClick={() => goToSection("gallery")}
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

            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="gold mb-4 font-semibold">
              Contact
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <a href="tel:+919876543210">
                  +91 9876543210
                </a>
              </li>

              <li>
                <a href="mailto:hello@namastecafe.com">
                  hello@namastecafe.com
                </a>
              </li>

              <li>
                Dehradun, India
              </li>

            </ul>
          </div>

          {/* Social */}

          <div>
            <h3 className="gold mb-4 font-semibold">
              Follow Us
            </h3>

            <div className="flex gap-4 text-xl">

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#d4a24c] transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#d4a24c] transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#d4a24c] transition"
              >
                <FaTwitter />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#d4a24c] transition"
              >
                <FaYoutube />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2025 Namaste Cafe & Bistro. All Rights Reserved.
        </div>
        <div className=" border-gray-800 mt-2 text-center text-gray-500 text-sm">
            Made with ❤️
        </div>

      </div>
    </footer>
  );
};

export default Footer;