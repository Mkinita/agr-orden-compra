import useSWR from 'swr'
import axios from 'axios'
import Layout from "../layout/Layout"
import ListadoProduccion from '../components/ListadoProduccion'
import Tabla from '@/components/Tabla'
import ListadoSaldosFecha from '@/components/ListadoSaldosFecha'
import React, { useState, useEffect } from 'react';


export default function AdminProducciones() {


    

    const fetcher = () => axios('/api/listado-producciones').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/listado-producciones',fetcher,{refreshInterval: 100} )




    


    const [data1, setData1] = useState([]);
    useEffect(() => {
        async function fetchData() {
        const response1 = await fetch('/api/listado-saldo');
        const data1 = await response1.json();
        setData1(data1);
        }

    fetchData();
  }, []);



  

    






    
    return(
        <Layout pagina={'Listado-OC'}>

            <h1 className="text-3xl font-black text-center"> Produccion Actual</h1>
            <p className="text-2xl my-10"></p>
            <Tabla/>
            {data && data.length ? data.map(orden =>
                
                <ListadoProduccion
                    key={orden.id}
                    orden={orden}
                    
                />

                ):
                <p className='text-center m-10'>Sin Produccion</p>
            }



            {data1 && data1.length ? data1.map(saldo =>
                
                <ListadoSaldosFecha
                    key={saldo.id}
                    saldo={saldo}
                />

                ):
                <p className='text-center m-10'>Sin Reprocesos</p>
            }




            
        </Layout>

        
    )

    
}


