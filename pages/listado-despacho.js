import useSWR from 'swr'
import axios from 'axios'
import AdminLayoutInforme from "../layout/AdminLayoutInforme"
import ProduccionDespacho from '../components/ProduccionDespacho'
import React, { useState, useEffect } from 'react';
import {formatoNumero} from "helpers/formato";
import { Bar } from 'react-chartjs-2';
import Link from 'next/link'
import  ProduccionesEncabezado from '../components/ProduccionesEncabezado'




export default function AdminProducciones() {

  const fetcher = () => axios('/api/produccion-despacho').then(datos => datos.data)
  const { data, error, isLoading } = useSWR('/api/produccion-despacho',fetcher,{refreshInterval: 100} )



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
  const URL = '/api/produccion-despacho'
  
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
  let totalIngreso01 = 0;
  let totaldespachos = 0;

  results.forEach((producciones) => {
    totalVolumens += parseFloat(producciones.volumen);
    totalIngreso += parseFloat(producciones.ingreso);
    totalIngreso01 += parseFloat(producciones.ingreso01);
    totaldespachos += parseFloat(producciones.ingreso01)+parseFloat(producciones.volumen)+parseFloat(producciones.ingreso)
  });


  
  const [currentMonth, setCurrentMonth] = useState('');

  useEffect(() => {
    const date = new Date();
    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    setCurrentMonth(monthNames[date.getMonth()]);
  }, []);


 

  


  return(
    <AdminLayoutInforme pagina={'Listado-OC'}>
      
      <ProduccionesEncabezado/>
      <p className="text-2xl my-10"></p>
      <div className='flex flex-col items-center justify-center'>
        <h2 className="text-2xl font-black text-center">Despacho</h2>
        <input value={search} onChange={searcher} type="text" placeholder='Filtrar Por Fecha 🔍' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 
      </div>

     
        <div class="grid gap-1 grid-cols-5 md:grid-cols-5 2xl:grid-cols-5 text-center uppercase font-bold text-sm">
        <div class="px-1 md:px-2 py-2">Fecha</div>
        <div class="px-1 md:px-2 py-2">Seco</div>
        <div class="px-1 md:px-2 py-2">Verde</div>
        <div class="px-1 md:px-2 py-2">Servicio</div>
        <div class="px-1 md:px-2 py-2">Total</div>
        </div>


          {data && data.length ? results.map(producciones =>
            <ProduccionDespacho
              key={producciones.id}
              producciones={producciones} 
            />
            ):
            <p className='text-center m-10'>Sin Produccion</p>
          }
          <div className="grid gap-1 grid-cols-5 md:grid-cols-5 2xl:grid-cols-5 text-center uppercase font-bold text-sm py-2">
            <div>Total</div>
            <div className="">{formatoNumero(totalIngreso)}</div>
            <div className="">{formatoNumero(totalIngreso01)}</div>
            <div>{formatoNumero(totalVolumens)}</div>
            <div className="">{formatoNumero(totaldespachos)}</div>
          </div>
        

      

            
 
    </AdminLayoutInforme>
  ) 
}