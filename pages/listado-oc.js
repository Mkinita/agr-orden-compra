import useSWR from 'swr'
import axios from 'axios'
import AdminLayout from "../layout/AdminLayout"
import ListadoOc from '../components/ListadoOc'
import Tabla from '@/components/Tabla'
import * as XLSX from 'xlsx';
import {useState, useEffect} from 'react'






export default function Admin() {

    const fetcher = () => axios('/api/listado-ordenes').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/listado-ordenes',fetcher,{refreshInterval: 100} )



    const exportTo = (orden) => {
        const ws = XLSX.utils.json_to_sheet(orden)
        const wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')
        XLSX.writeFile(wb, 'table-data.xlsx')
    }

    const [ datos, setDatos ] = useState([])
    const [ buscar, setBuscar ] = useState("")
  
    //función para traer los datos de la API
    const URL = 'http://localhost:3000/api/listado-ordenes'
  
    const showData = async () => {
      const response = await fetch(URL)
      const data = await response.json()
      //console.log(data)
      setDatos(data)
    }   
     //función de búsqueda
    const buscador = (e) => {
        setBuscar(e.target.value)   
    }
    //  metodo de filtrado 2   
     const results = !buscar ? datos : datos.filter((dato) => dato.pedido.some((pedido) => pedido.patente.toLowerCase().includes(buscar.toLowerCase())))



     
      


     
    
     useEffect( ()=> {
      showData()
    }, [])



    console.log(datos)


    
      

    
    
      
      
      
    
     

    return(
        <AdminLayout pagina={'Listado-OC'}>

            <h1 className="text-3xl font-black text-center"> Listado OC</h1>
            <p className="text-2xl my-10"></p>
            <div className='mt-auto'>
                <input value={buscar} onChange={buscador} type="text" placeholder='Buscar Por Patente' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 🔍
            </div>
            <Tabla/>
            {data && data.length ? results.map(orden =>
                
                <ListadoOc
                    key={orden.id}
                    orden={orden}
                />

                ):
                <p>No Hay Ordenes Pendientes</p>
            }

            <div  className="text-center m-10">
                <button onClick={() => exportToExcel(data)}>📥 Exportar a Excel</button>
            </div>

        </AdminLayout>

        
    )

    
}


