import useSWR from 'swr'
import axios from 'axios'
import Layout from "../layout/Layout"
import EmpalilladoActual from '../components/EmpalilladoActual'
import Tabla from '@/components/Tabla'
import React, { useState, useEffect } from 'react';
import {formatoNumero} from "helpers/formato";

export default function AdminProducciones() {

  const fetcher = () => axios('/api/empalillado-actual').then(datos => datos.data)
  const { data, error, isLoading } = useSWR('/api/empalillado-actual',fetcher,{refreshInterval: 100} )



  const [ users, setUsers ] = useState([])
  const [ search, setSearch ] = useState("")

    
  const [data1, setData1] = useState([]);
    useEffect(() => {
      async function fetchData() {
      const response1 = await fetch('/api/empalillado-actual');
      const data1 = await response1.json();
      setData1(data1);
    }

    fetchData();
  }, []);


  //función para traer los datos de la API
  const URL = '/api/empalillado-actual'
  
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


  const [totalVolumen, setTotalVolumen] = useState(0);
  const [totalCantidad, setTotalCantidad] = useState(0);

  

  const sumarVolumenes = () => {
    let suma = 0;
    results.forEach((emp) => {
        suma += emp.espesor * emp.ancho * emp.largo * emp.piezas * emp.cantidad / 1000000;
      
    });
    setTotalVolumen(suma);
};


  const sumarCantidades = () => {
    let suma = '';
    results.forEach((emp) => {
        suma += emp.cantidad;
      
    });
  setTotalCantidad(suma);
  };

  


function calcularVolumen() {
  sumarVolumenes();
  sumarCantidades();
}

  
  

    return(
    <Layout pagina={'Listado-OC'}>
          <h1 className="text-3xl font-black text-center">Produccion Actual</h1>
            <p className='py-2 text-center'>Fecha: {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'numeric', year: 'numeric' })}</p>

            <p className="text-2xl my-10"></p>
            <div className='mt-auto'>
                <input value={search} onChange={searcher} type="text" placeholder='Buscar Por Escuadría' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 🔍
            </div>
            <Tabla/>
            {data && data.length ? results.map(emp =>
                
                <EmpalilladoActual
                    key={emp.id}
                    emp={emp}
                    
                />

                ):
                <p className='text-center m-10'>Sin Produccion</p>
            }


                
            <div className='flex justify-center items-center gap-2'>
              <button className="my-4 py-2 px-4 text-black " onClick={calcularVolumen}>Calcular Volumen</button>
              <p className="">{formatoNumero(totalVolumen)}m³</p>
              <p className="">Cantidad {formatoNumero(totalCantidad)}</p>
            </div>
 
    </Layout>

        
    )

    
}

