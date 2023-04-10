import ImprecionLayout from "../layout/ImprecionLayout"
import useSWR from 'swr'
import axios from 'axios'
import OrdenAutorizada from '../components/OrdenAutorizada'


export default function OrdenCompra() {



    const fetcher = () => axios('/api/ordenes-autorizadas').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/ordenes',fetcher,{refreshInterval: 100} )


   return (
        <ImprecionLayout pagina='Produccion'>
            <h1 className="text-4xl font-black text-center"></h1>
            <p className="text-2xl my-5"></p>



            {data && data.length ? data.map(orden =>
                
                <OrdenAutorizada
                    key={orden.id}
                    orden={orden}
                />

                ):<p> Ordenes Pendientes</p>}



                <button className="bg-indigo-600 hover:bg-indigo-700 text-white mt-2 md:mt-0 py-3 px-5 uppercase font-bold rounded-xl mx-28" onClick={() => window.print()}>Imprimir</button>


                
            

        </ImprecionLayout>
   )
}