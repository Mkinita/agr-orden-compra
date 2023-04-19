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



    const [ users, setUsers ] = useState([])
  const [ search, setSearch ] = useState("")
    


    const [data1, setData1] = useState([]);
    useEffect(() => {
        async function fetchData() {
        const response1 = await fetch('/api/listado-saldo');
        const data1 = await response1.json();
        setData1(data1);
        }

    fetchData();
  }, []);


  //función para traer los datos de la API
  const URL = '/api/listado-producciones'
  
  const showData = async () => {
      const response = await fetch(URL)
      const data = await response.json()
      console.log(data)
      setUsers(data)
    }   
     //función de búsqueda
  const searcher = (e) => {
      setSearch(e.target.value)   
  }
  //  metodo de filtrado 2   
  const results = !search ? users : users.filter((dato)=> JSON.stringify(dato.pedido).toLowerCase().includes(search.toLowerCase()))


  
  

   useEffect( ()=> {
    showData()
  }, [])



  

    






    
    return(
        <Layout pagina={'Listado-OC'}>

            <h1 className="text-3xl font-black text-center"> Produccion Actual</h1>
            <p className="text-2xl my-10"></p>
            <div className='mt-auto'>
                <input value={search} onChange={searcher} type="text" placeholder='Buscar Por Escuadría' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 🔍
            </div>
            <Tabla/>
            {data && data.length ? results.map(orden =>
                
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


