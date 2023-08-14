import useSWR from 'swr'
import axios from 'axios'
import LayoutOrdenCompraSolicitud from "../layout/LayoutOrdenCompraSolicitud"
import Cotizacion from '../components/Cotizacion'
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router';



export default function Admin() {

    const fetcher = () => axios('/api/cotizar').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/cotizar',fetcher,{refreshInterval: 100} )

//     const [ users, setUsers ] = useState([])
//     const [ search, setSearch ] = useState("")

//     //función para traer los datos de la API
//     const URL = '/api/cotizar'

//     const showData = async () => {
//         const response = await fetch(URL)
//         const data = await response.json()
//         //console.log(data)
//         setUsers(data)
//     }
//     //función de búsqueda
//     const searcher = (e) => {
//         setSearch(e.target.value)
//     }
//     //metodo de filtrado 2
//     const results = !search
//   ? users
//   : users.filter(dato => String(dato.id).toLowerCase().includes(search.toLowerCase()));


//     useEffect( ()=> {
//         showData()
//     }, [])


const [users, setUsers] = useState([]);
const [search, setSearch] = useState("");
const router = useRouter();

const URL = '/api/cotizar';

const showData = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  setUsers(data);
};

const searcher = (e) => {
  setSearch(e.target.value);
};

const results = !search
  ? users
  : users.filter(dato => String(dato.id).toLowerCase().includes(search.toLowerCase()));

useEffect(() => {
  // Intenta obtener el valor de búsqueda del localStorage al cargar la página
  const storedSearch = localStorage.getItem('searchValue');
  if (storedSearch) {
    setSearch(storedSearch);
  }
  showData();
}, []);

useEffect(() => {
  localStorage.setItem('searchValue', search);
}, [search]);

// Almacenar y recuperar valor de búsqueda en URL
useEffect(() => {
  if (search) {
    
  }
}, [search, router]);



    return(
        <LayoutOrdenCompraSolicitud pagina={'Cotizaciones'}>

            <p className='text-2xl mx-5 my-3 font-bold py-8 pb-2'>Seleccione Una Solicitud</p>
            <div className='mt-auto'>
                <input value={search} onChange={searcher} type="text" placeholder='Buscar' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 🔍
            </div>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-3 2xl:grid-cols-3'>
                {data && data.length ? results.map(solicitud =>
                <div className=''>

                    <Cotizacion
                        key={solicitud.id}
                        solicitud={solicitud}
                    />
                    </div>

                ):<p>No Hay Solicitudes Cotizadas</p>}

            </div>

        </LayoutOrdenCompraSolicitud>
    )
}