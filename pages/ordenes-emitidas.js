import useSWR from 'swr'
import axios from 'axios'
import LayoutOrdenCompra from "../layout/LayoutOrdenCompra"
import OrdenesEmitidas from '../components/OrdenesEmitidas'



export default function Admin() {

    const fetcher = () => axios('/api/ordenes-emitidas-auz').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/ordenes-emitidas-auz',fetcher,{refreshInterval: 100} )

    
     

    return(
        <LayoutOrdenCompra pagina={'Ordenes Emitidas'}>

            <h1 className="text-2xl font-black text-center py-8">Estado De Ordenes Emitidas</h1>
            <p className="text-2xl my-5"></p>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-3 2xl:grid-cols-3'>
                {data && data.length ? data.map(solicitud =>
                    <div className=''>
                    <OrdenesEmitidas
                        key={solicitud.id}
                        solicitud={solicitud}
                    />
                    </div>
                ):<p className='text-center'>No Hay Ordenes Pendientes</p>}
            </div>

        </LayoutOrdenCompra>
    )
}