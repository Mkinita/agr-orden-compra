import ImprecionLayout from "../layout/ImprecionLayout"
import useSWR from 'swr'
import axios from 'axios'
import EtiquetaImprecion from '../components/EtiquetaImprecion'



export default function OrdenCompra() {



    const fetcher = () => axios('/api/ordenes').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/ordenes',fetcher,{refreshInterval: 100} )



   



    


   return (
        <ImprecionLayout pagina='Produccion'>
            
            <p className="text-2xl"></p>



            {data && data.length ? data.map(orden =>
                
                <EtiquetaImprecion
                    key={orden.id}
                    orden={orden}
                />

                ):<p> Sin Etiquetas Pendientes</p>}



                


                


                
            

        </ImprecionLayout>
   )
}