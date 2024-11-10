import React from "react";
import Cv from "./Cv";

function About() {
  return (
    <div className="aboutContainer">
        
        <div className="informationMe">
          <p className="name">Juan Ignacio Marcos Merlo</p>
          <h2 className="aboutTitle">Desarrollador <span className="gradientMern">MERN</span></h2>
          <p className="aboutMe"> 
          Mi nombre es Juan Ignacio Marcos Merlo, tengo 30 años y actualmente vivo en la localidad de Temperley, partido
          de Lomas de Zamora, Buenos Aires, Argentina. Soy padre de familia y, como tal, comprendo la importancia de la
          gestión del tiempo y la dedicación tanto en el ámbito personal como profesional.
          <br />

          Mi especialización está en el stack MERN (MongoDB, Express, React, Node.js), que considero fundamental para
          desarrollar aplicaciones web escalables y de alto rendimiento. Además, cuento con sólidos conocimientos en
          estructuras de datos, programación orientada a objetos (POO) y algoritmos, habilidades esenciales para crear
          soluciones eficientes y optimizadas en diversos entornos de desarrollo. Estas competencias me permiten abordar
          problemas complejos de manera estructurada y optimizar el rendimiento de mis aplicaciones.
          <br />

          Me propongo generar un buen clima en el ámbito del trabajo en equipo y soy deseoso de aprender nuevas
          habilidades y conocimientos. Me autodefino como una persona proactiva, trabajadora, ambiciosa, colaboradora,
          decidida, seria, prudente y capaz de trabajar solo o en equipo para lograr mis objetivos. Mi mayor fortaleza
          reside en mi predisposición para resolver conflictos y/o sortear obstáculos.
          </p>
          <Cv className="aboutCv"/>
        </div>
        <div className="stoneAboutOne"></div>
        <div className="stoneAboutTwo"></div>
    </div>
  );
}

export default About;
