import useSWR from 'swr'
import axios from 'axios'
import LayoutOrdenCompra from "../layout/LayoutOrdenCompra"
import Entrega from '../components/Entrega'
import {useState, useEffect} from 'react'






export default function Admin() {

    const fetcher = () => axios('/api/ordenes-autorizadas-false').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/ordenes-autorizadas-false',fetcher,{refreshInterval: 100} )

    const [ datos, setDatos ] = useState([])
    const [ buscar, setBuscar ] = useState("")
  
    //función para traer los datos de la API
    const URL = '/api/ordenes-autorizadas'
  
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
    
    const results = !buscar ? datos : datos.filter((dato) => {
        const id = typeof dato.id === 'string' ? dato.id : String(dato.id);
        return id.toLowerCase().includes(buscar.toLowerCase());
      });
      
     useEffect( ()=> {
      showData()
    }, [])


    return(
        <LayoutOrdenCompra pagina={'ordenes-compra'}>

            <h1 className="text-2xl font-black text-center">Recepcion</h1>
            <p className="text-2xl my-4"></p>
            <div className='flex justify-center mt-auto'>
                <input value={buscar} onChange={buscador} type="number" placeholder='Filtra Por Nº O.C. 🔍' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 
            </div>

            <div className='grid gap-4 grid-cols-2 md:grid-cols-4 2xl:grid-cols-4'>
            
                {data && data.length ? results.map(orden =>
                    
                    <Entrega
                        key={orden.id}
                        orden={orden}
                    />

                    ):
                    <p>No Hay Ordenes Pendientes</p>
                }

            </div>

        

        </LayoutOrdenCompra>

        
    )

    
}
