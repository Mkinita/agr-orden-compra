import React from 'react'
import Image from "next/image";
import useCombustible from '../hooks/useCombustible';
import QRGenerator from './QRGenerator';
import { useRouter } from 'next/router'
import { toast } from "react-toastify"
import axios from 'axios';

const EtiquetaStock = ({orden}) => {


  

   
    const {nombre,id,pedido,cliente} = orden;

    const router = useRouter()

    const completarOc = async () => {

      try {

         await axios.post(`/api/eliminarstock/${id}`)
          toast.success('🏠')
          setTimeout(() =>{
            router.push('/stock-terminado')
        },1000)
      } catch (error) {
          console.log(error)
      }
  }


    
    const myNumber = id;

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
            className='bg-lime-400 hover:bg-lime-500 text-white w-full mt-5 p-3 uppercase font bold'
            onClick={completarOc}
            
        >
            Eliminar
        </button>
      
    </div>
  )
}

export default EtiquetaStock