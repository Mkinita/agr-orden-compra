import React from 'react'
import {formatiarFecha} from "helpers/fecha"
import axios from 'axios';
import QRGenerator from '../components/QRGenerator';
import { useRouter } from 'next/router'
import { toast } from "react-toastify"
import Link from 'next/link';
import {formatoNumero} from "helpers/formato"


const Etiquetas = ({orden}) => {



    const {nombre,id,pedido,cliente,fecha} = orden;

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
                  <h3 className='text-lg font-bold'>{oc.detalle}</h3>
                  <p className='text-sm font-bold'>{nombre}</p>
                  <p className='text-sm font-bold'>{cliente}</p>
                  <p className='text-sm font-bold'>{formatiarFecha(fecha)}</p>
                  <div className='py-1'>
      <QRGenerator orden={('https://control-produccion-production.up.railway.app/etiqueta/')+ ('/')+(id)} />
      <p className='text-sm font-bold py-1'>N°: {id}</p>
      <p className="text-sm text-gray-700 mt-2 font-bold">Volumen</p>
      <p className="text-sm text-gray-700 mt-2 font-bold">{formatoNumero(oc.espesor * oc.ancho * oc.largo * oc.piezas *oc.cantidad / 1000000 )}</p>
    </div>
          
        </div>
        
      ))}

<button
                className="mt-2 md:mt-0 uppercase font-bold rounded-xl"
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