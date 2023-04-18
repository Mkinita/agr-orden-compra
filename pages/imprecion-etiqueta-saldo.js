import ImprecionLayout from "../layout/ImprecionLayout"
import useSWR from 'swr'
import axios from 'axios'
import EtiquetaImprecionSaldo from '../components/EtiquetaImprecionSaldo'



export default function OrdenCompra() {



    const fetcher = () => axios('api/listado-saldo').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('api/listado-saldo',fetcher,{refreshInterval: 100} )



   



    


   return (
        <ImprecionLayout pagina='Produccion'>
            <h1 className="text-4xl font-black text-center"></h1>
            <p className="text-2xl my-5"></p>



            {data && data.length ? data.map(saldo =>
                
                <EtiquetaImprecionSaldo
                    key={saldo.id}
                    saldo={saldo}
                />

                ):<p> Sin Etiquetas Pendientes</p>}
        </ImprecionLayout>
   )
}