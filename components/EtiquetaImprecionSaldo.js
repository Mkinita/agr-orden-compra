import React from 'react'
import axios from 'axios';
import QRGenerator from '../components/QRGenerator';
import { useRouter } from 'next/router'
import { toast } from "react-toastify"
import {formatoNumero} from "helpers/formato"

const EtiquetasSaldo = ({saldo}) => {



    const {id,pedido,espesor,ancho , largo , piezas ,cantidad,calidad} = saldo;

    const router = useRouter()

    const completarOc = async () => {

      try {

         await axios.post(`/api/editarsaldo/${id}`)
          toast.success('🏠')
          setTimeout(() =>{
            router.push('/')
        },1000)
      } catch (error) {
          console.log(error)
      }
  }


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
                  <p className='text-lg font-bold py-1'>{espesor}xVx{largo}</p>
                  <p className='text-lg font-bold py-1'>{calidad}</p>
                  <div className='py-2'>
      <QRGenerator saldo={calidad +('-Calidad:')+  ('/')+ ('/espesor:')+ espesor +('/N°:')+(id)} />
      <p className='text-sm font-bold py-1'>N°: {id}</p>
      <p className="text-sm text-gray-700 mt-2 font-bold">Volumen</p>
      <p className="text-sm text-gray-700 mt-2 font-bold">{formatoNumero(espesor * ancho * largo * piezas *1 / 1000000 )}</p>
    </div>
          
        
        
      

<button
                className=" mt-2 md:mt-0  px-1 uppercase font-bold rounded-xl"
                type="button"
                onClick={completarOc}
                >
                    ➕

                </button>
        
        
    </div>
    

      
    </div>



  )
}

export default EtiquetasSaldo