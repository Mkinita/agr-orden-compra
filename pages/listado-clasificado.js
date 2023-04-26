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

  const fetcher = () => axios('/api/producciones-clasificado').then(datos => datos.data)
  const { data, error, isLoading } = useSWR('/api/producciones-clasificado',fetcher,{refreshInterval: 100} )



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
  const URL = '/api/producciones-clasificado'
  
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


  let totalVolumens = 0;
  let totalIngreso = 0;

  results.forEach((producciones) => {
    totalVolumens += parseFloat(producciones.volumen);
    totalIngreso += parseFloat(producciones.ingreso);
  });


  

  


 

  const data2 = {
    labels: results.map((producciones) => producciones.fecha),
    datasets: [
      {
        label: 'Produccion Clasificado',
        data: results.map((producciones) => producciones.volumen),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        barPercentage: 0.3, // Ancho de las barras
        categoryPercentage: 1, // Espacio entre barras
      },
    ],
  };

  


  
  


function calcularVolumen() {
  sumarVolumenes();
  sumarCantidades();
}



const [isVisibleproveedor, setIsVisibleproveedor] = useState(false);
      
        const toggleVisibilityproveedor = () => {
          setIsVisibleproveedor(!isVisibleproveedor);
        };

  
  

    return(
    <AdminLayoutInforme pagina={'Listado-OC'}>
    
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
                    <span class="ml-3">Clasificado</span>
                    </Link>
                </div>
                <div class="p-2 font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase w-full">
                    <Link href="/agregar-producciones">
                    <span class="ml-3">Despacho</span>
                    </Link>
                </div>
            </div>
            <p className="text-2xl my-10"></p>
            <div className='flex flex-col items-center justify-center'>
              <h2 className="text-2xl font-black text-center">Clasificado</h2>
              <input value={search} onChange={searcher} type="text" placeholder='Filtrar Por Fecha 🔍' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 
            </div>


            <div className={`${isVisibleproveedor ? 'hidden' : ''}`}>
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
              <div className="hidden md:block">{totalIngreso}</div>
              <div>{totalVolumens}</div>
              <div className="">{formatoNumero(totalVolumens / totalIngreso * 100)}%</div>
            </div>
            </div>



            


            <button
                            className="font-bold text-sm py-10"
                            onClick={toggleVisibilityproveedor}
                            
                        >
                            {isVisibleproveedor ? '➖' : 'Generar Gafico 📊'}
                        </button>


            


            {isVisibleproveedor && ( 
            <div className='flex justify-center items-center gap-2'>
            <div className='w-1/2 p-2 m-auto items-center'>
              <Bar className='' data={data2} />
            </div>
            </div>
            )}
 
    </AdminLayoutInforme>

        
    )

    
}