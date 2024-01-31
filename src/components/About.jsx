import React from "react";
import Cv from "./Cv";

function About() {
  return (
    <div
      className="containerAbout"
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        padding: "20px",
        display: "flex"
      }}
    >
      <div
        style={{
          width:'100%',
        }}
      >
        <h2
          style={{
            fontSize: ".85rem"
          }}
        >
          Juan Ignacio Marcos Merlo
        </h2>
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            padding: "5px 0 40px 0"
          }}
        >
          Desarrollador <span className="spanTextTitle">Full Stack</span>
        </h3>
        <div
          style={{
            width: "70%",
            textWrap: "balance",
            padding:'0 0 20px 0'
          }}
        >
          <p>
            Bienvenidos a mi porfolio. Mi nombre es Juan Ignacio Marcos Merlo,
            tengo 30 años y actualemente vivo en la localidad de Temperley,
            partido de Lomas de Zamora, Buenos Aires, Argentina.
          </p>
          <p>
            Comencé hace un año como desarrollador web en CoderHouse y luego me
            dediqué a estudiar de forma autodidacta, desarrollando habilidades
            en lógica y resolución de problemas. Actualmente me encuentro
            cursando la carrera de Programacion en la Universidad Nacional
            Guillermo Brown (Unab), de Adrogue.
          </p>
        </div>
        <Cv />
      </div>
      <div className="stoneAboutOne"></div>
      <div className="stoneAboutTwo"></div>
    </div>
  );
}

export default About;
