import {formatiarFecha} from "helpers/fecha"
import {formatoNumero} from "helpers/formato"
import axios  from 'axios'
import { toast } from "react-toastify"
import React, { useState } from 'react';
import EditarPedido from "./EditarPedido";
import Link from "next/link";
import { useRouter } from 'next/router'




const ControlPedidos = ({pedidos}) => {
    const {id,cliente,solicitud,despacho,imagen,oc,producto,tipo} = pedidos



    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post(`/api/stock/${pedidos.id}`);
          console.log(res.data);
        } catch (err) {
          console.error(err);
        }
      };

      

      const [isVisible, setIsVisible] = useState(false);

      const toggleVisibility = () => {
        setIsVisible(!isVisible);
      };


      const router = useRouter()

    const completarOc = async () => {

      try {

         await axios.post(`/api/pedidorematado/${id}`)
          toast.success('🏠')
          setTimeout(() =>{
            router.push('/control-pedidos-informe')
        },1000)
      } catch (error) {
          console.log(error)
      }
  }


  return (
    
    <>
    


<div className="border p-3 w-full h-full">
      
      <div className='p-5 text-center'>
        <h3 className='text-2xl font-bold'>{cliente}</h3>
        <p className='mt-1 font-black text-sm text-black'>{producto}</p>
        <p className='mt-1 font-black text-sm text-black'>{tipo}</p>
        <p className='mt-1 font-black text-sm text-black'>N° {oc}</p>
        
      

        <button
            className="bg-lime-400 hover:bg-lime-500 text-white w-full mt-5 p-3 uppercase font bold"
            onClick={toggleVisibility}
                            
            >
               {isVisible ? '➖ Ajustar' : '✏️Ajustar✏️'}
            </button>
            <div className="">
            
                {isVisible && (
            <div className="p-2 space-y-1">
              <p className='mt-1 font-black text-sm text-black'>{solicitud}</p>
              <p className='mt-1 font-black text-sm text-black'>{despacho}</p>
              <p className="mt-1 font-black text-sm text-black">Saldo: {formatoNumero(solicitud - despacho)} m³</p>
              <div><EditarPedido key={pedidos.id} pedidos={pedidos} />Despacho </div>
              <button
            type='button'
            className='bg-red-400 hover:bg-red-500 text-white w-full mt-5 p-1 uppercase font bold'
            onClick={completarOc}
            
        >
            ⚠️Rematar⚠️
        </button>
              

               
            </div>
            
                )}

               </div>
      </div>
    </div>




        

    </>
  )
}

export default ControlPedidos




