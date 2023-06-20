import useSWR from 'swr'
import axios from 'axios'
import LayoutOrdenCompra from "../layout/LayoutOrdenCompra"
import Cotizacion from '../components/Cotizacion'



export default function Admin() {

    const fetcher = () => axios('/api/cotizar').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/cotizar',fetcher,{refreshInterval: 100} )

    
     

    return(
        <LayoutOrdenCompra pagina={'Cotizaciones'}>

            <h1 className="text-2xl font-black text-center py-8"></h1>
            <p className="text-2xl my-5"></p>
            <div className='grid gap-4 grid-cols-1 px-48'>
                {data && data.length ? data.map(solicitud =>
                <div className=''>
                        
                    <Cotizacion
                        key={solicitud.id}
                        solicitud={solicitud}
                    />
                    </div>
                    
                ):<p>No Hay Solicitudes Pendientes</p>}
                
            </div>

        </LayoutOrdenCompra>
    )
}