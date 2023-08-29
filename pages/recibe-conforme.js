import useSWR from 'swr'
import axios from 'axios'
import Layout from "../layout/Layout"
import RecepcionConforme from '../components/RecepcionConforme'
import {useState, useEffect} from 'react'






export default function Admin() {

    const fetcher = () => axios('/api/recibe-conforme').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/recibe-conforme',fetcher,{refreshInterval: 100} )

    const [ datos, setDatos ] = useState([])
    const [ buscar, setBuscar ] = useState("")
  
    //función para traer los datos de la API
    const URL = '/api/recibe-conforme'
  
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
        <Layout pagina={'ordenes-compra'}>

            <h1 className="text-2xl font-black text-center">Recibe Conforme</h1>
            <p className="text-2xl my-4"></p>
            <div className='flex justify-center mt-auto'>
                <input value={buscar} onChange={buscador} type="number" placeholder='Filtra Por Nº O.C. 🔍' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400 shadow rounded-lg'/> 
            </div>

            <div className='grid gap-2 grid-cols-1 md:grid-cols-2 2xl:grid-cols-2'>
            
                {data && data.length ? results.map(orden =>
                    
                    <RecepcionConforme
                        key={orden.id}
                        orden={orden}
                    />

                    ):
                    <p>No Hay Ordenes Pendientes</p>
                }
                

            </div>

        

        </Layout>

        
    )

    
}
