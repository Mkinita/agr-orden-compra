import useSWR from 'swr'
import axios from 'axios'
import AdminLayout from "../layout/AdminLayout"
import StockTerminadoCol from '../components/StockTerminadoCol'
import TablaTerminado from '@/components/TablaTerminado'
import {useState, useEffect} from 'react'
import {formatoNumero} from "helpers/formato";

export default function AdminProducciones() {

    const fetcher = () => axios('/api/stock-rema').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/stock-rema',fetcher,{refreshInterval: 100} )


    const [ users, setUsers ] = useState([])
    const [ search, setSearch ] = useState("")
  
    //función para traer los datos de la API
    const URL = '/api/stock-rema'
  
    const showData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
        setUsers(data)
      }   
     //función de búsqueda
    const searcher = (e) => {
        setSearch(e.target.value)   
    }
     //  metodo de filtrado 2   
    const results = !search ? users : users.filter((dato)=> JSON.stringify(dato.pedido).toLowerCase().includes(search.toLowerCase()))

     useEffect( ()=> {
      showData()
    }, [])


    const [totalVolumen, setTotalVolumen] = useState(0);

    const sumarVolumenes = () => {
    let suma = 0;
    results.forEach((orden) => {
      orden.pedido.forEach((oc) => {
        suma += oc.espesor * oc.ancho * oc.largo * oc.piezas * oc.cantidad / 1000000;
      });
    });
    setTotalVolumen(suma);
};

    return(
        <AdminLayout pagina={'Produccion-fecha'}>

            <h1 className="text-3xl font-black text-center">Stock Terminado Rema</h1>
            <p className="text-2xl my-10"></p>
            <div className='mt-auto'>
                <input value={search} onChange={searcher} type="text" placeholder='Buscar Por Escuadría' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 🔍
            </div>
            <TablaTerminado/>
            {data && data.length ? results.map(orden =>
                
                <StockTerminadoCol
                    key={orden.id}
                    orden={orden}
                />

                ):
                <p className='text-center m-10'>Sin Produccion</p>
            }


            <div className='flex justify-center items-center gap-2'>
                <button className="my-4 py-2 px-4 text-black " onClick={sumarVolumenes}>Calcular Volumen</button>
                <p className="">{formatoNumero(totalVolumen)} m³</p>
            </div>

        </AdminLayout>

        
    )

    
}