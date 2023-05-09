import useSWR from 'swr'
import axios from 'axios'
import Layout from "../layout/Layout"
import CamarasSecado from '../components/CamarasSecado'
import React, { useState, useEffect } from 'react';
import {formatoNumero} from "helpers/formato";

export default function AdminProducciones() {

  const fetcher = () => axios('/api/camara1').then(datos => datos.data)
  const { data, error, isLoading } = useSWR('/api/camara1',fetcher,{refreshInterval: 100} )


  const [totalVolumen, setTotalVolumen] = useState(0);



  const sumarVolumenes = () => {
    let suma = 0;
    data.forEach((emp) => {
        suma += emp.espesor * emp.ancho * emp.largo * emp.piezas * emp.cantidad / 1000000;
      
    });
    setTotalVolumen(suma);
    };


    const fetcherCamara2 = () => axios('/api/camara2').then(datos => datos.data)
    const { data: dataCamara2, error: errorCamara2, isLoading: isLoadingCamara2 } = useSWR('/api/camara2',fetcherCamara2,{refreshInterval: 100} )

  


    const [totalVolumen01, setTotalVolumen01] = useState(0);



    const sumarVolumenes01 = () => {
        let suma = 0;
        dataCamara2.forEach((seco) => {
            suma += seco.espesor * seco.ancho * seco.largo * seco.piezas * seco.cantidad / 1000000;
        
        });
        setTotalVolumen01(suma);



    };



    const fetcherCamara3 = () => axios('/api/camara3').then(datos => datos.data)
    const { data: dataCamara3, error: errorCamara3, isLoading: isLoadingCamara3 } = useSWR('/api/camara3',fetcherCamara3,{refreshInterval: 100} )

  


    const [totalVolumen02, setTotalVolumen02] = useState(0);



    const sumarVolumenes02 = () => {
        let suma = 0;
        dataCamara3.forEach((seco) => {
            suma += seco.espesor * seco.ancho * seco.largo * seco.piezas * seco.cantidad / 1000000;
        
        });
        setTotalVolumen02(suma);
    };


  

  


function calcularVolumen() {
  sumarVolumenes();
  sumarVolumenes01();
  sumarVolumenes02();
}

  
  

    return(
    <Layout pagina={'Listado-OC'}>
          <h1 className="text-3xl font-black text-center">Dentro Camaras</h1>
            <p className='py-2 text-center'>Fecha: {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'numeric', year: 'numeric' })}</p>
            <div className='flex justify-center items-center gap-2 '>
                
              <button className="rounded-xl py-2 px-4 text-black border border-solid border-lime-500 hover:scale-110" onClick={calcularVolumen}>Calcular Volumen</button>
              
            </div>
            <p className="text-2xl my-10"></p>
            
            

                


            <div className='grid gap-2 grid-cols-1 md:grid-cols-2 2xl:grid-cols-2'>  
                <div className="border border-solid border-lime-500 rounded-xl">
                    <p className="text-center uppercase font-bold text-xl">Camara 1</p>
                    <div className='grid gap-2 grid-cols-5 md:grid-cols-5 2xl:grid-cols-5 py-2'>
                        <p className="text-center uppercase font-bold text-xs">Ingreso</p>
                        <p className="text-center uppercase font-bold text-xs ">Detalle</p>
                        <p className="text-center uppercase font-bold text-xs">Cantidad</p>
                        <p className="text-center uppercase font-bold text-xs">Calidad</p>
                        <p className="text-center uppercase font-bold text-xs">m³</p>
                    </div>  
                    
                    
                    

            {data && data.length ? data.map(seco =>
                
                <CamarasSecado
                
                    key={seco.id}
                    seco={seco}
                    
                    
                />
                

                ):
                <p className='text-center m-10'>Sin Produccion</p>
            }
            <p className="text-center text-lg font-bold py-2">{formatoNumero(totalVolumen)} m³</p>
                </div>

                <div className="border border-solid border-lime-500 rounded-xl">
                    <p className="text-center uppercase font-bold text-xl">Camara 2</p>
                    <div className='grid gap-2 grid-cols-5 md:grid-cols-5 2xl:grid-cols-5 py-2'>
                        <p className="text-center uppercase font-bold text-xs">Ingreso</p>
                        <p className="text-center uppercase font-bold text-xs ">Detalle</p>
                        <p className="text-center uppercase font-bold text-xs">Cantidad</p>
                        <p className="text-center uppercase font-bold text-xs">Calidad</p>
                        <p className="text-center uppercase font-bold text-xs">m³</p>
                    </div> 
                    
                    

            {dataCamara2 && dataCamara2.length ? dataCamara2.map(seco =>
                
                <CamarasSecado
                
                    key={seco.id}
                    seco={seco}
                    
                    
                />
                

                ):
                <p className='text-center m-10'>Sin Produccion</p>
            }
            <p className="text-center text-lg font-bold py-2">{formatoNumero(totalVolumen01)} m³</p>
                </div>
                           
                <div className="border border-solid border-lime-500 rounded-xl">
                    <p className="text-center uppercase font-bold text-xl">Camara 3</p>
                    <div className='grid gap-2 grid-cols-5 md:grid-cols-5 2xl:grid-cols-5 py-2'>
                        <p className="text-center uppercase font-bold text-xs">Ingreso</p>
                        <p className="text-center uppercase font-bold text-xs ">Detalle</p>
                        <p className="text-center uppercase font-bold text-xs">Cantidad</p>
                        <p className="text-center uppercase font-bold text-xs">Calidad</p>
                        <p className="text-center uppercase font-bold text-xs">m³</p>
                    </div> 
                    
                    

            {dataCamara3 && dataCamara3.length ? dataCamara3.map(seco =>
                
                <CamarasSecado
                
                    key={seco.id}
                    seco={seco}
                    
                    
                />
                

                ):
                <p className='text-center m-10'>Sin Produccion</p>
            }
            <p className="text-center text-lg font-bold py-2">{formatoNumero(totalVolumen02)} m³</p>
                </div>
                           
            </div>


            


                
            
 
    </Layout>

        
    )

    
}
