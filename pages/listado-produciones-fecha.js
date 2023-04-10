import useSWR from 'swr'
import axios from 'axios'
import AdminLayout from "../layout/AdminLayout"
import ListadoProduccionFecha from '../components/ListadoProduccionFecha'
import Tabla from '@/components/Tabla'
import * as XLSX from 'xlsx';
import {useState, useEffect} from 'react'

export default function AdminProducciones() {

    const fetcher = () => axios('/api/listado-produccion-fecha').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/listado-produccion-fecha',fetcher,{refreshInterval: 100} )


    const [ users, setUsers ] = useState([])
  const [ search, setSearch ] = useState("")
  
    //función para traer los datos de la API
    const URL = 'http://localhost:3000/api/listado-produccion-fecha'
  
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
    const results = !search ? users : users.filter((dato)=> dato.fecha.toLowerCase().includes(search.toLocaleLowerCase()))

     useEffect( ()=> {
      showData()
    }, [])

    return(
        <AdminLayout pagina={'Produccion-fecha'}>

            <h1 className="text-3xl font-black text-center">BUSCAR PRODUCCION POR FECHA</h1>
            <p className="text-2xl my-10"></p>
            <div className='mt-auto'>
                <input value={search} onChange={searcher} type="text" placeholder='Buscar Por Fecha' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 🔍
            </div>
            <Tabla/>
            {data && data.length ? results.map(orden =>
                
                <ListadoProduccionFecha
                    key={orden.id}
                    orden={orden}
                />

                ):
                <p className='text-center m-10'>Sin Produccion</p>
            }

        </AdminLayout>

        
    )

    
}