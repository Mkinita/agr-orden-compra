import useSWR from 'swr'
import axios from 'axios'
import LayoutOrdenCompraSolicitud from "../layout/LayoutOrdenCompraSolicitud"
import EditarSolicitud from '../components/EditarSolicitud'
import {useState, useEffect, useCallback} from 'react'



export default function Admin() {

    const fetcher = () => axios('/api/cotizar').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/cotizar',fetcher,{refreshInterval: 100} )

    // const [users, setUsers] = useState([]);
    // const [search, setSearch] = useState("");

    // // función para traer los datos de la API
    // const URL = '/api/cotizar';

    // const showData = async () => {
    //     const response = await fetch(URL);
    //     const data = await response.json();
    //     setUsers(data);
    // };

    // // función de búsqueda
    // const searcher = (e) => {
    //     setSearch(e.target.value);
    // };

    // // método de filtrado
    // const filteredUsers = search
    //     ? users.filter(dato => String(dato.id).toLowerCase().includes(search.toLowerCase()))
    //     : [];

    // useEffect(() => {
    //     showData();
    // }, []);

    const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  
  // Función para traer los datos de la API
  const URL = '/api/cotizar';

  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setUsers(data);
  };

  // Función de búsqueda
  const searcher = (e) => {
    setSearch(e.target.value);
  };

  // Método de filtrado
  const filteredUsers = search
    ? users.filter(dato => String(dato.id).toLowerCase().includes(search.toLowerCase()))
    : [];

  useEffect(() => {
    // Al cargar la página, intenta obtener el valor de búsqueda del localStorage
    const storedSearch = localStorage.getItem('searchValue');
    if (storedSearch) {
      setSearch(storedSearch);
    }
    showData();
  }, []);

  useEffect(() => {
    // Almacenar el valor de búsqueda en localStorage cuando cambie
    localStorage.setItem('searchValue', search);
  }, [search]);



    // const comprobarPedido = useCallback(() => {
    //     return pedido.length === 0 || area === "" || area.length <2 ;
        
    // },[pedido, area])


    // useEffect(() => {
    //     comprobarPedido()
    // },[pedido, comprobarPedido])

    
     

    return(
        <LayoutOrdenCompraSolicitud pagina={'EditarSolicitudes'}>
            
                <div class="flex flex-col  md:h-56 bg-white rounded-lg shadow-lg overflow-hidden md:flex-row my-5">
                        <div class="md:flex items-center justify-center md:w-1/2 md:bg-gray-50">
                            <div class="py-6 px-8 md:py-0">
                                <h2 class="text-black text-2xl font-bold">Seleccione Una Solicitud</h2>
                                <p class="mt-2 text-black md:text-black">Agrega los Valores a la Solicitud</p>
                                <p class="mt-2 text-black md:text-black">Nº: {search}</p>
                            </div>
                        </div>
                        <div class="flex items-center justify-center pb-6 md:py-0 md:w-1/2 bg-gray-50">
                            <form>
                                <div class="flex flex-col rounded-lg overflow-hidden sm:flex-row">
                                <input className='py-3 px-4 bg-gray-200 text-gray-800 border-gray-300 border-2 outline-none placeholder-gray-500 focus:bg-gray-100' type="text" onChange={searcher} placeholder="Buscar..." />
                            <ul>
                                {filteredUsers.map(user => (
                                    <li key={user.id}>{user.name}</li>
                                ))}
                            </ul>
                                    
                                </div>
                            </form>
                        </div>
                    </div>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-1 2xl:grid-cols-1 shadow px-2 rounded-lg'>
                {data && data.length ? filteredUsers.map(solicitud =>
                <div className=''>
                        
                    <EditarSolicitud
                        key={solicitud.id}
                        solicitud={solicitud}
                    />
                    </div>
                    
                ):<p>No Hay Solicitudes Cotizadas</p>}
                
            </div>

        </LayoutOrdenCompraSolicitud>
    )
}