import React from 'react'
import teclas from '../teclas.json'

export default function Tecla() {
  return (
    <div>
      <button
        className='tecla'
      >
        {teclas.Nombre}
      </button>
    </div>
  );
};
