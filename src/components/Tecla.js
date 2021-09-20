import React from 'react'
import teclas from '../teclas.json'




export default function Tecla() {
  return (
    <div className='>Teclas'>
      <button
        className='Tecla'
      >
        {teclas.nombre}
      </button>
    </div>
  );
};
