import useSWR from 'swr'
import axios from 'axios'
import AdminLayoutInforme from "../layout/AdminLayoutInforme"
import Produccion from '../components/Produccion'
import Tabla from '@/components/Tabla'
import React, { useState, useEffect } from 'react';
import {formatoNumero} from "helpers/formato";
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import Link from 'next/link'
import  ProduccionesEncabezado from '../components/ProduccionesEncabezado'




export default function AdminProducciones() {

  const fetcher = () => axios('/api/producciones').then(datos => datos.data)
  const { data, error, isLoading } = useSWR('/api/producciones',fetcher,{refreshInterval: 100} )



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
  const URL = '/api/producciones'
  
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


  const [totalVolumen, setTotalVolumen] = useState(0);
  const [totalCantidad, setTotalCantidad] = useState(0);

  const sumarVolumenes = () => {
    let suma = 0;
    results.forEach((producciones) => {
      producciones.pedido.forEach((oc) => {
        suma += oc.espesor * oc.ancho * oc.largo * oc.piezas * oc.cantidad / 1000000;
      });
    });
  setTotalVolumen(suma);
  };


  const sumarCantidades = () => {
    let suma = 0;
    results.forEach((producciones) => {
      producciones.pedido.forEach((oc) => {
        suma += oc.cantidad;
      });
    });
  setTotalCantidad(suma);
  };

  





function calcularVolumen() {
  sumarVolumenes();
  sumarCantidades();
}

  
  

    return(
    <AdminLayoutInforme pagina={'Listado-OC'}>
{/* <Bar data={data2} /> */}
          <h1 className="text-3xl font-black text-center">Informe Produccion</h1>
            <p className='py-2 text-center'>Fecha: {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'numeric', year: 'numeric' })}</p>
            <ProduccionesEncabezado/>
              
 
    </AdminLayoutInforme>

        
    )

    
}


