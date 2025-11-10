import logo from "../assets/logo.png";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavigation = (sectionId: string) => {
    if (location.pathname === "/gallery") {
      // Si estamos en gallery, navegar a home primero
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Si estamos en la página principal, hacer scroll directo
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    closeMenu();
  };

  return (
    <>
      <div className="relative bg-white">
        <div className="flex justify-between items-center px-5 py-5 md:px-20 md:py-5 font-semibold text-lg shadow-md">
          {/* Logo y nombre */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={logo} alt="logo" className="max-h-14 object-contain" />
            <div className="text-sm md:text-lg">GIOVANA RODRIGUEZ</div>
          </div>

          {/* Menu hamburguesa (solo móvil) */}
          <div
            className={`hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Menu desktop */}
          <div className="desktop-menu hidden md:flex">
            <ul className="flex gap-24">
              <li
                className="navbar-link"
                onClick={() => handleNavigation("home")}
              >
                HOME
              </li>
              <li
                className="navbar-link"
                onClick={() => handleNavigation("about")}
              >
                ABOUT
              </li>
              <li
                className="navbar-link"
                onClick={() => handleNavigation("projects")}
              >
                PROJECTS
              </li>
            </ul>
          </div>
        </div>

        {/* Menu móvil */}
        <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li onClick={() => handleNavigation("home")}>HOME</li>
            <li onClick={() => handleNavigation("about")}>ABOUT</li>
            <li onClick={() => handleNavigation("projects")}>PROJECTS</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
