import useSWR from 'swr'
import axios from 'axios'
import LayoutOrdenCompra from "../layout/LayoutOrdenCompra"
import Solicitudes from '../components/Solicitudes'



export default function Admin() {

    const fetcher = () => axios('/api/solicitudes').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/solicitudes',fetcher,{refreshInterval: 100} )

    
     

    return(
        <LayoutOrdenCompra pagina={'Solicitudes'}>

            <h1 className="text-2xl font-black text-center py-8">Solicitudes</h1>
            <p className="text-2xl my-5"></p>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-3 2xl:grid-cols-3'>
                {data && data.length ? data.map(solicitud =>
                    <div className=''>
                    <Solicitudes
                        key={solicitud.id}
                        solicitud={solicitud}
                    />
                    </div>
                ):<p className='text-center'>No Hay Solicitudes Pendientes</p>}
            </div>

        </LayoutOrdenCompra>
    )
}