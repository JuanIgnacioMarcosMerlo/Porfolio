import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import icon from "../assets/navbar-icon.png";

function Header({ background }) {
  const [scrollPosition, setScrollPosition] = useState(0);

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
        zIndex: '2',
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
      <nav>
        <ul
          className="navLinks"
          style={{
            display: "flex",
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
