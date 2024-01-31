import React from 'react';
import GetAppIcon from '@mui/icons-material/GetApp';

const Cv = () => {
  return (
    <div
    style={{
      padding: '20px 20px 100px 0px',
      display:'inline-block',
      width: '30%',
    }}>
      <a
        className='cvItem'
        href="/JuanIgnacio_MarcosMerlo_CV.pdf"
        download="JuanIgnacio_MarcosMerlo_CV.pdf"
        style={{
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          padding: '5px 10px',
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
