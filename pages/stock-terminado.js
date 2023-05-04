import useSWR from 'swr'
import axios from 'axios'
import AdminLayout from "../layout/AdminLayout"
import StockTerminado from '../components/StockTerminado'
import TablaTerminado from '@/components/TablaTerminado'
import * as XLSX from 'xlsx';
import {useState, useEffect} from 'react'

export default function AdminProducciones() {

    const fetcher = () => axios('/api/stock').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/stock',fetcher,{refreshInterval: 100} )


    

// Mostrar notificación cuando se recibe una respuesta de la API
useEffect(() => {
  if (data) {
    const notification = new Notification('Nueva información agregada', {
      body: 'Se ha agregado nueva información a la API'
    })
  }
}, [data])

    


    

    const [ users, setUsers ] = useState([])
  const [ search, setSearch ] = useState("")
  
    //función para traer los datos de la API
    const URL = '/api/stock'
  
    const showData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
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
        <AdminLayout pagina={'Produccion-fecha'}>

            <h1 className="text-3xl font-black text-center">Stock Terminado</h1>
            <p className="text-2xl my-10"></p>
            <div className='mt-auto'>
                <input value={search} onChange={searcher} type="text" placeholder='Buscar Por Fecha' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 🔍
            </div>
            <TablaTerminado/>
            {data && data.length ? results.map(orden =>
                
                <StockTerminado
                    key={orden.id}
                    orden={orden}
                />

                ):
                <p className='text-center m-10'>Sin Produccion</p>
            }

        </AdminLayout>

        
    )

    
}