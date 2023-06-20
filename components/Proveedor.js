import React from 'react'
import useCombustible from '../hooks/useCombustible';

const Proveedor = ({proveedor}) => {

  const {handlesetProveedor, handleChangeModal} =useCombustible()
  const { nombreproveedor,rut } = proveedor;
  return (

    <div className="border p-1 w-full h-full">
      <div className='p-2 text-center'>
        <h3 className='text-lg font-bold'>{nombreproveedor}</h3>
        <p className='mt-1 font-bold text-lg'>{rut}</p>
        <button
            type='button'
            className='bg-amber-400 hover:bg-amber-500 text-white w-full mt-5 p-3 uppercase font bold text-sm'
            onClick={()=> {
              handleChangeModal();
              handlesetProveedor(proveedor)
            }}
        >
            Generar O.C.
        </button>
      </div>
    </div>
  )
}

export default Proveedor