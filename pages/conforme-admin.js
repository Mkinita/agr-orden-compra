import useSWR from 'swr'
import axios from 'axios'
import LayoutAutorizar from "../layout/LayoutAutorizar"
import ListaConformeAdmin from '../components/ListaConformeAdmin'
import {useState, useEffect} from 'react'






export default function Admin() {

    const fetcher = () => axios('/api/conforme').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/conforme',fetcher,{refreshInterval: 100} )

    const [ datos, setDatos ] = useState([])
    const [ buscar, setBuscar ] = useState("")
  
    //función para traer los datos de la API
    const URL = '/api/conforme'
  
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
        <LayoutAutorizar pagina={'ordenes-compra'}>

            <h1 className="text-2xl font-black text-center">Recepcion Conforme</h1>
            <p className="text-2xl my-4"></p>
            <div className='flex justify-center mt-auto'>
                <input value={buscar} onChange={buscador} type="number" placeholder='Filtra Por Nº O.C. 🔍' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400 shadow rounded-lg'/> 
            </div>
            <table className="table-auto w-full text-center bg-white text-gray-700">
            
                <tbody>
                    <tr className="bg-white border-b text-sm font-bold">
                        <td className="px-6 py-2 w-3/4 text-center border border-amber-400">Recibe Conforme</td>
                        <td className="px-6 py-2 w-1/4 text-center border border-amber-400">PDF</td>
                    </tr>
                </tbody>
            </table> 

            <div className=''>
            
                {data && data.length ? results.map(orden =>
                    
                    <ListaConformeAdmin
                        key={orden.id}
                        orden={orden}
                    />

                    ):
                    <p>Sin Recepcion</p>
                }
                

            </div>

        

        </LayoutAutorizar>

        
    )

    
}
