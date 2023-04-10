import useSWR from 'swr'
import axios from 'axios'
import AdminLayout from "../layout/AdminLayout"
import ControlPedidos from '../components/ControlPedidos'
import TablaControl from '@/components/TablaControl'
import * as XLSX from 'xlsx';
import {useState, useEffect} from 'react'

export default function AdminProducciones() {

    const fetcher = () => axios('/api/pedidos').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/pedidos',fetcher,{refreshInterval: 100} )


    const [ users, setUsers ] = useState([])
  const [ search, setSearch ] = useState("")
  
    //función para traer los datos de la API
    const URL = '/api/pedidos'
  
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
    const results = !search ? users : users.filter((dato)=> dato.cliente.toLowerCase().includes(search.toLocaleLowerCase()))

     useEffect( ()=> {
      showData()
    }, [])

    return(
        <AdminLayout pagina={'Produccion-fecha'}>

            <h1 className="text-3xl font-black text-center">Control Pedidos</h1>
            <p className="text-2xl my-10"></p>
            <div className='m-auto'>
                <input value={search} onChange={searcher} type="text" placeholder='Buscar Por Fecha' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 🔍
            </div>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-3 2xl:grid-cols-3'>
            {data && data.length ? results.map(pedidos =>
                
                <ControlPedidos
                    key={pedidos.id}
                    pedidos={pedidos}
                />

                ):
                <p className='text-center m-10'>Sin Produccion</p>
            }
            </div>

        </AdminLayout>

        
    )

    
}