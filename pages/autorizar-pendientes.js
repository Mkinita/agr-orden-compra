import useSWR from 'swr'
import axios from 'axios'
import LayoutAutorizar from "../layout/LayoutAutorizar"
import Link from 'next/link'
import EstadoOrdenesRoberto from '../components/EstadoOrdenesRoberto'
import Head from 'next/head'



export default function Admin() {

    const fetcher = () => axios('/api/ordenes-autorizadas-sup').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/ordenes-autorizadas-sup',fetcher,{refreshInterval: 100} )

    
    return(
        <LayoutAutorizar pagina={'Pendientes'}>
        <Head>
        <meta name="description" content="Carlos Jerez" />
        <link rel="icon" href="/AGRF.png"/>
        <title>Solicitud AGR</title>
      </Head>

            <h1 className="text-xl font-semibold text-center py-8 pb-4">Estado De Ordenes</h1>
            <div className='grid gap-4 grid-cols-1 max-w-full mx-auto my-2 bg-white p-8 rounded-xl shadow shadow-slate-300'>
                <table className="w-full text-xs border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent">
                    <tbody>
                        <tr className="font-bold">
                            <td className="px-2 py-2 pb-1 w-1/5 text-center">Nº</td>
                            <td className="px-2 py-2 pb-1 w-1/5 text-center">Autorizada</td>
                            <td className="px-2 py-2 pb-1 w-1/5 text-center">Proveedor</td>
                            <td className="px-2 py-2 pb-1 w-1/5 text-center">Recepcion</td>
                            <td className="px-2 py-2 pb-1 w-1/5 text-center">Detalle</td>
                        </tr>
                    </tbody>
                </table>  
                {data && data.length ? data.map(solicitud =>
                    <div className=''>
                    <EstadoOrdenesRoberto
                        key={solicitud.id}
                        solicitud={solicitud}
                    />
                    </div>
                ):<p className='text-center'>No Hay Solicitudes Pendientes</p>}
                
            </div>

        </LayoutAutorizar>
    )
}