import React from 'react'
import {formatiarFecha} from "helpers/fecha"
import axios from 'axios';
import QRGenerator from './QRGenerator';
import { useRouter } from 'next/router'
import { toast } from "react-toastify"
import Link from 'next/link';


const Etiquetas = ({saldo}) => {



    const {id,pedido,espesor,ancho , largo , piezas ,cantidad,calidad,fecha} = saldo;

    const router = useRouter()



    const espesor1 = espesor;
  const ancho1 = ancho;
  const largo1 = largo;
  const piezas1 = piezas;
  const cantidad1 = cantidad
  const Volumen = (espesor1) * (ancho1) * (largo1) * (piezas1) *(cantidad1) / 1000000

  


    
    const myNumber = id;

    console.log(myNumber)
  return (

    <div className="w-full h-full">
      
      <div className='text-center'>
                  <p className='text-lg font-bold '>{espesor}xVx{largo}</p>
                  <p className='text-sm font-bold '>{calidad}</p>
                  <p className='text-sm font-bold'>{formatiarFecha(fecha)}</p>
                  <div className='py-1'>
      <QRGeneratorSaldo saldo={('https://control-produccion-production.up.railway.app/etiquetasaldo/')+ ('/')+(id)} />
      <p className='text-sm font-bold py-1'>N°: {id}</p>
      <p className="text-sm text-gray-700 mt-2 font-bold">{formatoNumero(espesor * ancho * largo * piezas *1 / 1000000 )} m³</p>
    </div>
    </div>
    </div>



  )
}

export default Etiquetas