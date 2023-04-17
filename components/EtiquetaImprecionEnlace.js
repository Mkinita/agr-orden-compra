import React from 'react'
import {formatiarFecha} from "helpers/fecha"

import axios from 'axios';
import QRGenerator from '../components/QRGenerator';
import { useRouter } from 'next/router'
import { toast } from "react-toastify"
import Link from 'next/link';


const Etiquetas = ({orden}) => {



    const {nombre,id,pedido,cliente,fecha} = orden;

    const router = useRouter()

  


    
    const myNumber = id;

    console.log(myNumber)
  return (
    <div className="w-full h-full border p-10">
      
      <div className='text-center border'>
        
        {pedido.map(oc => (
                <div key={oc.id}>
                  <h3 className='text-xl font-bold'>{oc.detalle}</h3>
                  <p className='text-lg font-bold py-1'>{nombre}</p>
                  <p className='text-lg font-bold py-1'>{cliente}</p>
                  <p className='text-lg font-bold py-1'>{formatiarFecha(fecha)}</p>
                  <div className='py-2'>
      {/* <QRGenerator orden={('-Calidad:')+ nombre + ('/')+ oc.detalle +('/Cliente:')+ cliente +('/N°:')+(id)} /> */}
      <QRGenerator orden={('https://control-produccion-production.up.railway.app/etiqueta/')+ ('/')+(id)} />
      <p className='text-sm font-bold py-1'>N°: {id}</p>
      <p className="text-sm text-gray-700 mt-2 font-bold">Volumen</p>
      <p className="text-sm text-gray-700 mt-2 font-bold">{oc.espesor * oc.ancho * oc.largo * oc.piezas *oc.cantidad / 1000000 }</p>
    </div>
          
        </div>
        
      ))}


        
        
    </div>
    

      
    </div>



  )
}

export default Etiquetas