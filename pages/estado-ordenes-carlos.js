import useSWR from 'swr'
import axios from 'axios'
import LayoutCarlos from "../layout/LayoutCarlos"
import Link from 'next/link'
import EstadoOrdenes from '../components/EstadoOrdenes'



export default function Admin() {

    const fetcher = () => axios('/api/ordenes-autorizadas-sup-carlos').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/ordenes-autorizadas-sup-carlos',fetcher,{refreshInterval: 100} )

    
    return(
        <LayoutCarlos pagina={'Pendientes'}>

            <h1 className="text-xl font-semibold text-center py-8 pb-4">Estado De Ordenes</h1>
            <div className='grid gap-4 grid-cols-1 max-w-3xl mx-auto my-2 bg-white p-8 rounded-xl shadow shadow-slate-300'>
                <table className="w-full text-xs border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent">
                    <tbody>
                        <tr className="font-bold">
                            <td className="px-2 py-2 pb-1 w-1/6 text-center">Nº</td>
                            <td className="px-2 py-2 pb-1 w-1/6 text-center">Autorizada</td>
                            <td className="px-2 py-2 pb-1 w-1/6 text-center">Proveedor</td>
                            <td className="px-2 py-2 pb-1 w-1/6 text-center">Recepcion</td>
                            <td className="px-2 py-2 pb-1 w-1/6 text-center">Proveedor</td>
                            <td className="px-2 py-2 pb-1 w-1/6 text-center">Detalle</td>
                        </tr>
                    </tbody>
                </table>  
                {data && data.length ? data.map(solicitud =>
                    <div className=''>
                    <EstadoOrdenes
                        key={solicitud.id}
                        solicitud={solicitud}
                    />
                    </div>
                ):<p className='text-center'>No Hay Solicitudes Pendientes</p>}
                
            </div>

        </LayoutCarlos>
    )
}