import React from "react";
import Cv from "./Cv";

function About() {
  return (
    <div 
    className="containerAbout"
    style={{
      overflow: "hidden",
      position: "relative",
      padding: "20px",
      display: "flex",
    }}
    >
      <div style={{zIndex:'1'}}>
      <h2
      style={{
        fontSize: ".85rem",
      }}>Juan Ignacio Marcos Merlo</h2>
      <h3
      style={{
        fontSize: "1.5rem",
        fontWeight: "600",
        padding:'5px 0 40px 0'
      }}>
        Desarrollador <span className="spanTextTitle" >Full Stack</span>
      </h3>
      <div style={{
        width: "70%",
        textWrap: "balance",
      }}>
        <p
        >
          Bienvenidos a mi porfolio mi nombre es Juan Ignacio Marcos Merlo,
          tengo 30 años y actualemente vivo en la localidad de Temperley, partido de Lomas de Zamora,
           Buenos Aires, Argentina.
        </p>
        <p>
          Comence hace un año como desarrollador web en CoderHouse y luego me
          dedique a estudiar de forma autodidacta, desarrollando habilidades en
          logica y resolucion de problemas. Y actualmente estoy haciendo la
          carrera de Programacion en la Universidad Nacional Guillermo Brown,
          Unab, de Adrogue.
        </p>
      <Cv />
      </div>
      </div>
      <div className="stoneAboutOne"></div>
      <div className="stoneAboutTwo"></div>

    </div>
  );
}

export default About;
