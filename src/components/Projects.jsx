import React from "react";
import data from "../data/Repositorios.json";
import githubImage from "../assets/githubImage.png";
import calculadora from "../assets/calculadora.png";
import clauvanaModa from "../assets/clauvanaModa.png";



const images = {
  "githubImage.png": githubImage,
  "calculadora.png": calculadora,
  "clauvanaModa.png": clauvanaModa,
};

function Projects() {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        padding: "250px 0px",
        overflow: "hidden"
      }}
    >
      <div
        className="projects"
        style={{
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(350px, 1fr))",
          gap: "30px",
          width: "90%",
          translateX: "50px"
        }}
      >
        {data.map((project) => (
          <div
            key={project.id}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "100%",
              alignItems: "center",
              flexWrap: "wrap"
            }}
          >
            <div
              style={{ position: "relative", display: "inline-block" }}
              className="img-container"
              onMouseEnter={(e) =>
                (e.currentTarget.lastChild.style.opacity = 1)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.lastChild.style.opacity = 0)
              }
            >
              <img
                src={images[project.image]}
                alt={project.title}
                className="img-project"
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  display: "flex",
                  gap: "20px",
                  opacity: 0,
                  transition: "opacity 0.3s ease"
                }}
              >
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <button className="btn-img">Ir a la página</button>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn-img">Ver en codigo</button>
                </a>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "5px"
              }}
            >
              <h2 style={{ color: "#fff" }}>{project.title}</h2>
              <span style={{ color: "#fff" }}>{project.description}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="stoneProjectOne"></div>
      <div className="stoneProjectTwo"></div>
    </div>
  );
}

export default Projects;
