import React from 'react';
import Networks from './Networks';






function Home() { 
    return (
        <div className='presentationPortal'>
            <h1 
                style={{ color: '#fff', fontSize: '2rem', fontWeight:'600' }}>
                Juan Ignacio Marcos Merlo / FrontEnd React Full Stack 
            </h1>
            <Networks />
        </div>)
    }
export default Home