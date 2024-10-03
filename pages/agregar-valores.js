import useSWR from 'swr'
import axios from 'axios'
import LayoutOrdenCompraSolicitud from "../layout/LayoutOrdenCompraSolicitud"
import EditarSolicitud from '../components/EditarSolicitud'
import {useState, useEffect} from 'react'

export default function Admin() {

    const fetcher = () => axios('/api/cotizar').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/cotizar', fetcher, { refreshInterval: 100 })

    const [datos, setDatos] = useState([])
    const [buscar, setBuscar] = useState("")

    // función para traer los datos de la API
    const URL = '/api/cotizar'

    const showData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setDatos(data)
    }

    // función de búsqueda
    const buscador = (e) => {
        setBuscar(e.target.value)
    }

    const results = !buscar ? [] : datos.filter((dato) => {
        const id = typeof dato.id === 'string' ? dato.id : String(dato.id);
        return id.toLowerCase().includes(buscar.toLowerCase());
    });

    useEffect(() => {
        showData()
    }, [])

    return (
        <LayoutOrdenCompraSolicitud pagina={'EditarSolicitudes'}>
            <div className="flex flex-col md:h-56 bg-white rounded-lg shadow-lg overflow-hidden md:flex-row my-5">
                <div className="md:flex items-center justify-center md:w-1/2 md:bg-gray-50">
                    <div className="py-6 px-8 md:py-0">
                        <h2 className="text-black text-2xl font-bold">Seleccione Una Solicitud</h2>
                        <p className="mt-2 text-black md:text-black">Agrega los Valores a la Solicitud</p>
                        <p className="mt-2 text-black md:text-black">Nº: {buscar}</p>
                    </div>
                </div>
                <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2 bg-gray-50">
                    <div>
                        <div className="flex flex-col rounded-lg overflow-hidden sm:flex-row">
                            <input value={buscar} onChange={buscador} type="text" placeholder='Filtra Por Nº O.C.' className='py-3 px-4 bg-gray-200 text-gray-800 border-gray-300 border-2 outline-none placeholder-gray-500 focus:bg-gray-100' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mostrar resultados solo si el usuario ha ingresado algo en el buscador */}
            {buscar ? (
                data && data.length ? (
                    results.map(solicitud => (
                        <EditarSolicitud
                            key={solicitud.id}
                            solicitud={solicitud}
                        />
                    ))
                ) : (
                    <p>No Hay Ordenes Autorizadas</p>
                )
            ) : (
                <p className='text-center'>Por favor, ingrese un número para buscar una solicitud.</p>
            )}

        </LayoutOrdenCompraSolicitud>
    )
}
