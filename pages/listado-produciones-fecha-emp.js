import useSWR from 'swr'
import axios from 'axios'
import Layout from "../layout/Layout"
import ListadoFechaEmp from '../components/ListadoFechaEmp'
import Tabla from '@/components/Tabla'
import {useState, useEffect} from 'react'
import {formatoNumero} from "helpers/formato";

export default function AdminProducciones() {

    const fetcher = () => axios('/api/empalillado').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/empalillado',fetcher,{refreshInterval: 100} )


    const [ users, setUsers ] = useState([])
    const [ search, setSearch ] = useState("")
  
      
    const [data1, setData1] = useState([]);
      useEffect(() => {
        async function fetchData() {
        const response1 = await fetch('/api/empalillado');
        const data1 = await response1.json();
        setData1(data1);
      }
  
      fetchData();
    }, []);
  
  
    //función para traer los datos de la API
    const URL = '/api/empalillado'
    
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
    const results = !search ? users : users.filter((dato)=> JSON.stringify(dato.fecha).toLowerCase().includes(search.toLowerCase()))
  
  
    
    
  
     useEffect( ()=> {
      showData()
    }, [])
  
  
    const [totalVolumen, setTotalVolumen] = useState(0);
    const [totalCantidad, setTotalCantidad] = useState(0);
  
    
  
    const sumarVolumenes = () => {
      let suma = 0;
      results.forEach((emp) => {
          suma += emp.espesor * emp.ancho * emp.largo * emp.piezas * emp.cantidad / 1000000;
        
      });
      setTotalVolumen(suma);
  };
  
  
    
  
    
  
  
  function calcularVolumen() {
    sumarVolumenes();
  }

    return(
        <Layout pagina={'Produccion-fecha'}>

            <h1 className="text-xl font-black text-center">BUSCAR PRODUCCION POR FECHA</h1>
            <p className="text-2xl my-10"></p>
            <div className='flex justify-center items-center  m-auto gap-2 border border-solid border-amber-400 hover:scale-95 rounded-xl'>
              <button className="py-2 px-4 text-black" onClick={sumarVolumenes}>Resumen</button>
              <p className="">{formatoNumero(totalVolumen)} m³</p>
            </div>
            <div className='mt-auto'>
                <input value={search} onChange={searcher} type="text" placeholder='Buscar Por Fecha' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 🔍
            </div>
            <Tabla/>
            {data && data.length ? results.map(emp =>
                
                <ListadoFechaEmp
                    key={emp.id}
                    emp={emp}
                />

                ):
                <p className='text-center m-10'>Sin Produccion</p>
            }


        </Layout>

        
    )

    
}