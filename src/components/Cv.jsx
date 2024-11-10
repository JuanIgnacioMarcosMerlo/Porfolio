import React from 'react';
import GetAppIcon from '@mui/icons-material/GetApp';

const Cv = () => {
  return (
    <div
    className='cvContainer'
    style={{
      width: '20%',
    }}>
      <a
        className='cvItem'
        href="/Juan-Ignacio-Marcos-Merlo_CV-MERN.pdf"
        download="Juan-Ignacio-Marcos-Merlo_CV-MERN.pdf"
        style={{
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          backgroundColor: 'rgba(96,56,144,1)',
          borderRadius: '5px',
          textDecoration: 'none'
        }}
        >
        <span style={{
          color: '#fff',
          fontSize: '1rem',
          fontWeight: '600'
          }}>
          Descargar Aqui
        </span>
        <GetAppIcon sx={{ fontSize: 20, color: "#fff" }} className='downloadIcon' />
      </a>
    </div>
  );
};

export default Cv;
