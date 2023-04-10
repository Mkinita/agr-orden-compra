import React from 'react'
import Image from "next/image";
import useCombustible from '../hooks/useCombustible';

const Equipo = ({equipo}) => {


  

    const {handlesetEquipo, handleChangeModal} =useCombustible()
    const { espesor, ancho, largo, piezas, detalle } = equipo;
  return (
    <div className="border p-3 w-full h-full">
      
      <div className='p-5 text-center'>
        <h3 className='text-2xl font-bold'>{detalle}</h3>
        
        <button
            type='button'
            className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font bold'
            onClick={()=> {
              handleChangeModal();
              handlesetEquipo(equipo)
            }}
        >
            Agregar
        </button>
      </div>
    </div>
  )
}

export default Equipo