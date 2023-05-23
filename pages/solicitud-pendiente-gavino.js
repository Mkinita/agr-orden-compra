import useSWR from 'swr'
import axios from 'axios'
import Layout from "../layout/Layout"
import SolicitudGavino from '../components/SolicitudGavino'



export default function Admin() {

    const fetcher = () => axios('/api/solicitud-gavino').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/solicitud-gavino',fetcher,{refreshInterval: 100} )

    
     

    return(
        <Layout pagina={'Autorizar'}>

            <h1 className="text-2xl font-black text-center">Estado De Solicitud</h1>
            <p className="text-2xl my-5"></p>
            
            {data && data.length ? data.map(solicitud =>
                <div className=''>
                <SolicitudGavino
                    key={solicitud.id}
                    solicitud={solicitud}
                />
                </div>
                

                ):<p>No Hay Ordenes Pendientes</p>}

        </Layout>
    )
}