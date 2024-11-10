import React from 'react';
import lang from '../data/Language.json';
import reactVite from "../assets/react-vite.png";
import reactCra from "../assets/react-cra.png";
import nodejs from "../assets/nodejs.png";
import mysql from "../assets/mysql.png";
import javascript from "../assets/javascript.png";
import sass from "../assets/sass.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import css from "../assets/css.png";
import html from "../assets/html.png";
import firebase from "../assets/firebase.png";
import npm from "../assets/npm.png";
import git from "../assets/git.png";



const images = {
  "react-vite.png": reactVite,
  "react-cra.png": reactCra,
  "nodejs.png": nodejs,
  "mysql.png": mysql,
  "javascript.png": javascript,
  "sass.png": sass,
  "tailwind.png": tailwind,
  "bootstrap.png": bootstrap,
  "css.png": css,
  "html.png": html,
  "firebase.png": firebase,
  "npm.png": npm,
  "git.png": git,
};

function Skills() {
  return (
    <div style={{
      margin:'150px 0px 150px 0px',
      display:'flex',
      flexDirection:'column',
      alignItems: 'center',
      gap:'20px',
      flexWrap:'wrap'
      }}>
      <h2
      style={{textAlign:'center',
      color:'#fff',
      fontSize:'2.5rem'}}>Skills</h2>
      <div style={{width: '60vw', overflow: 'hidden',}}>
        <ul style={{
          listStyle:'none',
          display:'flex',
          alignItems:'baseline',
          gap:'40px',
          animation: 'scroll 20s linear infinite',
          whiteSpace: 'nowrap',
          
          }}>
          {Object.entries(lang).map(([key, value], index) => (
            <li key={index} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <img src={images[value]} alt={key} />
              <span style={{
                color: '#fff',
                fontSize: '.85rem',
              }}>{key}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Skills