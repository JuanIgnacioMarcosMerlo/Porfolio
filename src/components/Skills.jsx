import React from 'react';
import lang from '../data/Language.json'

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
      <div style={{width: '60vw', overflow: 'hidden'}}>
        <ul style={{
          listStyle:'none',
          display:'flex',
          alignItems:'baseline',
          gap:'40px',
          animation: 'scroll 20s linear infinite',
          whiteSpace: 'nowrap'
          }}>
          {Object.entries(lang).map(([key, value], index) => (
            <li key={index} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              {value && <img src={import.meta.env.BASE_URL + "src/assets/" + value} alt={key} />}
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