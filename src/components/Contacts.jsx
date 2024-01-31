import React from 'react'
import Networks from './Networks'

function Contacts() {
  return (
    <div style={{
      padding: '50px 20px 100px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      flexWrap: 'wrap',
      color: '#fff'
    }}>
      <Networks />
      <h3>Gracias por visitar mi porfolio</h3>
      <span>Copyright © 2023 Juan Ignacio Marcos Merlo. All rights reserved.</span>
    </div>
  )
}

export default Contacts