import useSWR from 'swr'
import axios from 'axios'
import LayoutCarlos from "../layout/LayoutCarlos"
import Link from 'next/link'
import GavinoPendientes from '../components/GavinoPendientes'
import GavinoPendientesOrdenes from '../components/GavinoPendientesOrdenes'



export default function Admin() {

    const fetcher = () => axios('/api/pendientes-carlos').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/pendientes-carlos',fetcher,{refreshInterval: 100} )

    const fetcherOrden = () => axios('/api/autorizar-ordenes-oc-carlos').then(datos => datos.data)
    const { data:dataOrden, error:errorOrden, isLoading:isLoadingOrden } = useSWR('/api/autorizar-ordenes-oc-carlos',fetcherOrden,{refreshInterval: 100} )

    
     

    return(
        <LayoutCarlos pagina={'Pendientes'}>

            <h1 className="text-xl font-semibold text-center py-8 pb-4">Solicitudes Pendientes</h1>
            <div className='grid gap-4 grid-cols-1 max-w-3xl mx-auto my-2 bg-white p-8 rounded-xl shadow shadow-slate-300'>
                <table className="w-full text-xs border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent">
                    <tbody>
                        <tr className="font-bold">
                            <td className="px-2 py-2 pb-1 w-1/5 text-center">Nº</td>
                            <td className="px-2 py-2 pb-1 w-1/5 text-center">Vista</td>
                            <td className="px-2 py-2 pb-1 w-1/5 text-center">Cotizacion</td>
                            <td className="px-2 py-2 pb-1 w-1/5 text-center">O.C.</td>
                            <td className="px-2 py-2 pb-1 w-1/5 text-center">Recepcion</td>
                        </tr>
                    </tbody>
                </table>  
                {data && data.length ? data.map(solicitud =>
                    <div className=''>
                    <GavinoPendientes
                        key={solicitud.id}
                        solicitud={solicitud}
                    />
                    </div>
                ):<p className='text-center'>No Hay Solicitudes Pendientes</p>}
                
            </div>

            {/* <div className='grid grid-cols-1 py-4'>

            <Link href="/notificacion-revision" className="w-1/2 m-auto rounded-2xl text-center border-b-4 border-b-amber-600 bg-amber-400 py-3 font-bold text-white hover:bg-amber-500 active:translate-y-[0.125rem] active:border-b-amber-400">
                <span className="">Notificar Revicion</span>
            </Link>
            </div> */}

            <h1 className="text-xl font-semibold text-center py-8 pb-4">Ordenes Por Autorizar</h1>
            <div className='grid gap-4 grid-cols-1 max-w-3xl mx-auto my-2 bg-white p-2 rounded-xl shadow shadow-slate-300'>
            <div>
                <table className="w-full text-xs border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent">
                    <tbody>
                        <tr className="font-bold">
                            <td className="px-2 py-2 pb-1 w-1/3 text-center">Nº</td>
                            <td className="px-2 py-2 pb-1 w-1/3 text-center">Estado</td>
                            <td className="px-2 py-2 pb-1 w-1/3 text-center">Detalle</td>
                        </tr>
                    </tbody>
                </table>  
                {dataOrden && dataOrden.length ? dataOrden.map(solicitud =>
                    <div className=''>
                    <GavinoPendientesOrdenes
                        key={solicitud.id}
                        solicitud={solicitud}
                    />
                    </div>
                ):<p className='text-center'>Sin Ordenes Pendientes</p>}
                
            </div>
                
            </div>


            



        </LayoutCarlos>
    )
}