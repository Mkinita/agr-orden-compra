import React from 'react'
import axios from 'axios';
import QRGenerator from '../components/QRGenerator';
import { useRouter } from 'next/router'
import { toast } from "react-toastify"

const Etiquetas = ({orden}) => {



    const {nombre,id,pedido,cliente} = orden;

    const router = useRouter()

    const completarOc = async () => {

      try {

         await axios.post(`/api/editaretiqueta/${id}`)
          toast.success('🏠')
          setTimeout(() =>{
            router.push('/')
        },1000)
      } catch (error) {
          console.log(error)
      }
  }


    
    const myNumber = id;

    console.log(myNumber)
  return (
    <div className="w-full h-full">
      
      <div className='text-center'>
        
        {pedido.map(oc => (
                <div key={oc.id}>
                  <h3 className='text-xl font-bold'>{oc.detalle}</h3>
                  <p className='text-lg font-bold py-1'>{nombre}</p>
                  <p className='text-lg font-bold py-1'>{cliente}</p>
                  <div className='py-2'>
      <QRGenerator orden={('-Calidad:')+ nombre + ('/')+ oc.detalle +('/Cliente:')+ cliente +('/N°:')+(id)} />
      <p className='text-sm font-bold py-1'>N°: {id}</p>
      <p className="text-sm text-gray-700 mt-2 font-bold">Volumen</p>
      <p className="text-sm text-gray-700 mt-2 font-bold">{oc.espesor * oc.ancho * oc.largo * oc.piezas *oc.cantidad / 1000000 }</p>
    </div>
          
        </div>
        
      ))}

<button
                className="mt-2 md:mt-0  px-1 uppercase font-bold rounded-xl"
                type="button"
                onClick={completarOc}
                >
                    ➕

                </button>
        
        
    </div>
    

      
    </div>



  )
}

export default Etiquetas