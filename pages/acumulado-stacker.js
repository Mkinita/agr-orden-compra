import useSWR from 'swr'
import axios from 'axios'
import Layout from "../layout/Layout"
import Produccion from '../components/Produccion'
import React, { useState, useEffect } from 'react';
import {formatoNumero} from "helpers/formato";




export default function AdminProducciones() {

  const fetcher = () => axios('/api/produccion-empalillado').then(datos => datos.data)
  const { data, error, isLoading } = useSWR('/api/produccion-empalillado',fetcher,{refreshInterval: 100} )



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
  const URL = '/api/produccion-empalillado'
  
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
  const results = !search ? users : users.filter((dato)=> JSON.stringify(dato.fecha).toLowerCase().includes(search.toLowerCase()))
   useEffect( ()=> {
    showData()
  }, [])

  let totalVolumens = 0;
  let totalIngreso = 0;

  results.forEach((producciones) => {
    totalVolumens += parseFloat(producciones.volumen);
    totalIngreso += parseFloat(producciones.ingreso);
  });

  





  return(
    <Layout pagina={'Listado-OC'}>
      <p className="text-2xl my-10"></p>
      <div className='flex flex-col items-center justify-center'>
        <h2 className="text-2xl font-black text-center">Stacker</h2>
        <input value={search} onChange={searcher} type="text" placeholder='Filtrar Por Fecha 🔍' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 
      </div>

     
          <div className="grid gap-1 grid-cols-3 md:grid-cols-4 2xl:grid-cols-4 text-center uppercase font-bold text-sm">
            <div>Fecha</div>
            <div className="hidden md:block">Ingreso</div>
            <div>Produccion</div>
            <div className="">%</div>
          </div>

          {data && data.length ? results.map(producciones =>
            <Produccion
              key={producciones.id}
              producciones={producciones} 
            />
            ):
            <p className='text-center m-10'>Sin Produccion</p>
          }
          <div className="grid gap-1 grid-cols-3 md:grid-cols-4 2xl:grid-cols-4 text-center uppercase font-bold text-sm py-2">
            <div>Total</div>
            <div className="hidden md:block">{formatoNumero(totalIngreso)}</div>
            <div>{formatoNumero(totalVolumens)}</div>
            <div className="">{formatoNumero(totalVolumens / totalIngreso * 100)}%</div>
          </div>
        
      

      

        
 
    </Layout>
  ) 
}