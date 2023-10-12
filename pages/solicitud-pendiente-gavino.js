import useSWR from 'swr'
import axios from 'axios'
import Layout from "../layout/Layout"
import SolicitudGavino from '../components/SolicitudGavino'
import {useState, useEffect} from 'react'



export default function Admin() {

    const fetcher = () => axios('/api/solicitud-nueva-gavino').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/solicitud-nueva-gavino',fetcher,{refreshInterval: 100} )

    const [ users, setUsers ] = useState([])
    const [ search, setSearch ] = useState("")

    //función para traer los datos de la API
    const URL = '/api/solicitud-nueva-gavino'

    const showData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        //console.log(data)
        setUsers(data)
    }   
    //función de búsqueda
    const searcher = (e) => {
        setSearch(e.target.value)   
    }
    //metodo de filtrado 2   
    const results = !search
    ? users
    : users.filter((dato) =>
        dato.id.toString().toLowerCase().includes(search.toLowerCase())
      );
    
    useEffect( ()=> {
        showData()
    }, [])
     

    return(
        <Layout pagina={'Solicitudes'}>

            <h1 className="text-xl font-black text-center">Estado De Solicitud</h1>
            <p className='text-lg mx-5 my-3 font-bold py-4 pb-2 text-center'>Seleccione Una Solicitud</p>
            <div className='mt-auto'>
                <input value={search} onChange={searcher} type="text" placeholder='Buscar' className='shadow rounded-lg text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 🔍
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2'>
                {data && data.length ? results.map(solicitud =>
                    <div className='pb-14'>
                    <SolicitudGavino
                        key={solicitud.id}
                        solicitud={solicitud}
                    />
                    </div>
                    

                ):<p>No Hay Ordenes Pendientes</p>}
            </div>

        </Layout>
    )
}