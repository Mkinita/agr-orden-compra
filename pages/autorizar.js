import useSWR from 'swr'
import axios from 'axios'
import LayoutAutorizar from "../layout/LayoutAutorizar"
import Autorizar from '../components/Autorizar'


const autorizar = () => {

    const fetcher = () => axios('/api/autorizar-ordenes').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/autorizar-ordenes',fetcher,{refreshInterval: 100} )

  return (
    <LayoutAutorizar pagina={'Autorizar'}>

            <h1 className="text-2xl font-black text-center py-6">Ordenes Pendientes</h1>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-3 2xl:grid-cols-3'>
                {data && data.length ? data.map(orden =>
                    <div className=''>
                    <Autorizar
                        key={orden.id}
                        orden={orden}
                    />
                    </div>
                ):<p className='text-center'>No Hay Ordenes Pendientes</p>}
            </div>

        </LayoutAutorizar>
  )
}

export default autorizar