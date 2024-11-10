import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import icon from "../assets/navbar-icon.png";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header({ background }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="header"
      style={{
        overflow: "hidden",
        zIndex: '3',
        width: "100%",
        position: "fixed",
        backgroundColor: scrollPosition > 50 ? "#000" : "transparent",
        backgroundImage: scrollPosition > 50 ? "none" : background,
        transition: "background-color 1.5s ease, background-image 1.5s ease"
      }}
    >
      <img
        className="firstTitle"
        alt="Galaxy"
        src={icon}
        style={{
          width: "60px",
          height: "60px"
        }}
      />
      <nav className="linksItems">
        <button className={`menu-button ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CloseIcon className="closeIcon"/> : <MenuIcon className="openIcon" />}
        </button>
        <ul
          className={`navLinks ${isOpen ? 'open' : ''}`}
          style={{
            listStyle: "none",
            color: "#fff",
            gap: "30px"
          }}
        >
          <li className="linkItem">
            <Link
              className="textLinkItem"
              to="Home"
              smooth={true}
              duration={1000}
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Home
            </Link>
          </li>
          <li className="linkItem">
            <Link
              className="textLinkItem"
              to="Projects"
              smooth={true}
              duration={1000}
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Proyectos
            </Link>
          </li>
          <li className="linkItem">
            <Link
              className="textLinkItem"
              to="About"
              smooth={true}
              duration={1000}
              style={{
                textDecoration: "none",
                color: "#fff",
                display: "inline-block"
              }}
            >
              Sobre Mi
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;