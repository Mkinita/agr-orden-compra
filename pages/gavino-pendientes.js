import useSWR from 'swr'
import axios from 'axios'
import Layout from "../layout/Layout"
import Link from 'next/link'
import GavinoPendientes from '../components/GavinoPendientes'
import EstadoOrdenes from '../components/EstadoOrdenes'



export default function Admin() {

    const fetcher = () => axios('/api/pendientes').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/pendientes',fetcher,{refreshInterval: 100} )

    const fetcherOrden = () => axios('/api/ordenes-autorizadas-sup').then(datos => datos.data)
    const { data:dataOrden, error:errorOrden, isLoading:isLoadingOrden } = useSWR('/api/ordenes-autorizadas-sup',fetcherOrden,{refreshInterval: 100} )

    
     

    return(
        <Layout pagina={'Pendientes'}>

            <h1 className="text-xl font-semibold text-center py-8 pb-4">Solicitudes Pendientes</h1>
            <div className='grid gap-4 grid-cols-1 max-w-3xl mx-auto my-2 bg-white p-8 rounded-xl shadow shadow-slate-300'>
                <table className="w-full text-xs border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent">
                    <tbody>
                        <tr className="font-bold">
                            <td className="px-2 py-2 pb-1 w-1/5 text-center">Nº</td>
                            <td className="px-2 py-2 pb-1 w-1/5 text-center">Fecha</td>
                            <td className="px-2 py-2 pb-1 w-1/5 text-center">Vista</td>
                            <td className="px-2 py-2 pb-1 w-1/5 text-center">Cotizacion</td>
                            <td className="px-2 py-2 pb-1 w-1/5 text-center">O.C.</td>
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
                {dataOrden && dataOrden.length ? dataOrden.map(solicitud =>
                    <div className=''>
                    <EstadoOrdenes
                        key={solicitud.id}
                        solicitud={solicitud}
                    />
                    </div>
                ):<p className='text-center'>No Hay Solicitudes Pendientes</p>}
                
            </div>

            

            
            


            



        </Layout>
    )
}