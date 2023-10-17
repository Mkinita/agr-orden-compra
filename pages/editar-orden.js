import useSWR from 'swr'
import axios from 'axios'
import LayoutOrdenCompraSolicitud from "../layout/LayoutOrdenCompraSolicitud"
import EditarSolicitudNueva from '../components/EditarSolicitudNueva'
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router';



export default function Admin() {

    const fetcher = () => axios('/api/cotizar').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/cotizar',fetcher,{refreshInterval: 100} )



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
        <LayoutOrdenCompraSolicitud pagina={'EditarSolicitud'}>  
            <div className='grid gap-4 grid-cols-1 md:grid-cols-1 2xl:grid-cols-1 shadow px-2 rounded-lg'>
            
                <header class="mb-3 text-1xl font-semibold text-center p-2">Editar Detalle</header>
                <div className='mt-auto'>
                <input value={search} onChange={searcher} type="text" placeholder='Buscar' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 🔍
            </div>
                {data && data.length ? results.map(solicitud =>

                <div className=''>
                        
                    <EditarSolicitudNueva
                        key={solicitud.id}
                        solicitud={solicitud}
                    />
                    </div>
                    
                ):<p>No Hay Solicitudes Cotizadas</p>}
                
            </div>
        </LayoutOrdenCompraSolicitud>
    )
}