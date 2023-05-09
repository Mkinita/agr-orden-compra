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


  

  


function calcularVolumen() {
  sumarVolumenes();
  sumarVolumenes01();
}

  
  

    return(
    <Layout pagina={'Listado-OC'}>
          <h1 className="text-3xl font-black text-center">Dentro Camaras</h1>
            <p className='py-2 text-center'>Fecha: {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'numeric', year: 'numeric' })}</p>

            <p className="text-2xl my-10"></p>
            
            

                


            <div className='grid gap-2 grid-cols-1 md:grid-cols-2 2xl:grid-cols-2'>  
                <div className="border border-solid border-lime-500">
                    <p className="text-center uppercase font-bold text-xl">Camara 1</p>
                    
                    

            {data && data.length ? data.map(seco =>
                
                <CamarasSecado
                
                    key={seco.id}
                    seco={seco}
                    
                    
                />
                

                ):
                <p className='text-center m-10'>Sin Produccion</p>
            }
            <p className="text-center text-lg font-bold">{formatoNumero(totalVolumen)} m³</p>
                </div>

                <div className="border border-solid border-lime-500">
                    <p className="text-center uppercase font-bold text-xl">Camara 2</p>
                    
                    

            {dataCamara2 && dataCamara2.length ? dataCamara2.map(seco =>
                
                <CamarasSecado
                
                    key={seco.id}
                    seco={seco}
                    
                    
                />
                

                ):
                <p className='text-center m-10'>Sin Produccion</p>
            }
            <p className="text-center text-lg font-bold">{formatoNumero(totalVolumen01)} m³</p>
                </div>
                           
            </div>

            


                
            <div className='flex justify-center items-center gap-2'>
                
              <button className="my-4 py-2 px-4 text-black " onClick={calcularVolumen}>Calcular Volumen</button>
              
            </div>
 
    </Layout>

        
    )

    
}
