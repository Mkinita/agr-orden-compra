import React from 'react'
import Image from "next/image";
import useCombustible from '../hooks/useCombustible';
import QRGenerator from '../components/QRGenerator';

const Etiquetas = ({orden}) => {


  

    const {handlesetEquipo, handleChangeModal} =useCombustible()
    const {nombre,id,pedido,cliente} = orden;


    
    const myNumber = id;

    console.log(myNumber)
  return (
    <div className="border p-3 w-full h-full">
      
      <div className='p-5 text-center border'>
        
        {pedido.map(oc => (
                <div key={oc.id}>
                  <h3 className='text-xl font-bold'>{oc.detalle}</h3>
                  <p className='text-lg font-bold py-1'>{nombre}</p>
                  <p className='text-lg font-bold py-1'>{cliente}</p>
                  <div className='py-2'>
      <QRGenerator orden={('-Calidad:')+ nombre + ('/')+ oc.detalle +('/Cliente:')+ cliente +('/N°:')+(id)} />
      <p className='text-sm font-bold py-1'>N°: {id}</p>
    </div>
          
        </div>
        
      ))}
        
        
    </div>
        <button
            type='button'
            className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font bold'
            onClick={()=> {
            //   handleChangeModal();
            //   handlesetEquipo(equipo)
            }}
        >
            Imprimir
        </button>
      
    </div>
  )
}

export default Etiquetas