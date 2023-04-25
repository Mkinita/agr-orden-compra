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

  


//  // Agrupar los datos por calidad
// const produccionesesPorCalidad = results.reduce((acumulador, producciones) => {
//   const { nombre, cantidad } = producciones;
//   if (!acumulador[nombre]) {
//     acumulador[nombre] = 0;
//   }
//   acumulador[nombre] += cantidad;
//   return acumulador;
// }, {});

// // Crear un array con los nombres de las calidades y los totales de ventas
// const nombresCalidades = Object.keys(produccionesesPorCalidad);
// const totalVentasPorCalidad = nombresCalidades.map(nombre => produccionesesPorCalidad[nombre]);

// // Crear el objeto de datos para el gráfico
// const data2 = {
//   labels: nombresCalidades,
//   datasets: [
//     {
//       label: 'Ventas',
//       // data: results.map((producciones) => producciones.cantidad),
//       data:[totalCantidad],
//       backgroundColor: 'rgba(255, 99, 132, 0.2)',
//       borderColor: 'rgba(255, 99, 132, 1)',
//       borderWidth: 1,
//     },
//   ],
// };


function calcularVolumen() {
  sumarVolumenes();
  sumarCantidades();
}

  
  

    return(
    <AdminLayoutInforme pagina={'Listado-OC'}>
{/* <Bar data={data2} /> */}
          <h1 className="text-3xl font-black text-center">Informe Produccion</h1>
            <p className='py-2 text-center'>Fecha: {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'numeric', year: 'numeric' })}</p>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-5 2xl:grid-cols-5 text-center uppercase font-bold text-sm py-2">
            <div class="p-2 font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase w-full">
                    <Link href="/agregar-producciones">
                    <span class="ml-3">Aserradero</span>
                    </Link>
                </div>
                <div class="p-2 font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase w-full">
                    <Link href="/agregar-producciones">
                    <span class="ml-3">Staker</span>
                    </Link>
                </div>
                <div class="p-2 font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase w-full">
                    <Link href="/agregar-producciones">
                    <span class="ml-3">Secado</span>
                    </Link>
                </div>
                <div class="p-2 font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase w-full">
                    <Link href="/listado-clasificado">
                    <span class="ml-3">Clafificado</span>
                    </Link>
                </div>
                <div class="p-2 font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase w-full">
                    <Link href="/agregar-producciones">
                    <span class="ml-3">Despacho</span>
                    </Link>
                </div>
            </div>
              
 
    </AdminLayoutInforme>

        
    )

    
}


