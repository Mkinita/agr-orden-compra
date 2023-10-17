import useSWR from 'swr'
import axios from 'axios'
import LayoutOrdenCompraSolicitud from "../layout/LayoutOrdenCompraSolicitud"
import EditarSolicitudNueva from '../components/EditarSolicitudNueva'
import {useState, useEffect, useCallback} from 'react'



export default function Admin() {

    const fetcher = () => axios('/api/cotizar').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/cotizar',fetcher,{refreshInterval: 100} )

    

    
     

    return(
        <LayoutOrdenCompraSolicitud pagina={'EditarSolicitud'}>  
            <div className='grid gap-4 grid-cols-1 md:grid-cols-1 2xl:grid-cols-1 shadow px-2 rounded-lg'>
            
                <header class="mb-3 text-1xl font-semibold text-center p-2">Editar Detalle</header>
                {data && data.length ? data.map(solicitud =>
                <div className=''>
                        
                    <EditarSolicitudNueva
                        key={solicitud.id}
                        solicitud={solicitud}
                    />
                    </div>
                    
                ):<p>No Hay Solicitudes Cotizadas</p>}
                
            </div>
        </LayoutOrdenCompraSolicitud>
    )
}