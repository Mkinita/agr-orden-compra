import useSWR from 'swr'
import axios from 'axios'
import LayoutOrdenCompra from "../layout/LayoutOrdenCompra"
import ImprimirOrden from '../components/ImprimirOrden'



export default function Admin() {

    const fetcher = () => axios('/api/ordenes-emitidas-pdf').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/ordenes-emitidas-pdf',fetcher,{refreshInterval: 100} )

    
     

    return(
        <LayoutOrdenCompra pagina={'OC-PDF'}>

            {data && data.length ? data.map(orden =>
                <div className=''>
                <ImprimirOrden

                    orden={orden}
                />
                </div>
            ):<p className='text-center'>No Hay Ordenes Pendientes</p>}

        </LayoutOrdenCompra>
    )
}