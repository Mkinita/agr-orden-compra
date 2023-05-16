import useSWR from 'swr'
import axios from 'axios'
import AdminLayout from "../layout/AdminLayout"
import EditarHoras from '../components/EditarHoras'
import EditarHorasSeco from '../components/EditarHorasSeco'
import {useState, useEffect} from 'react'

export default function AdminProducciones() {

    const fetcher = () => axios('/api/horas').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/horas',fetcher,{refreshInterval: 100} )


    const [ users, setUsers ] = useState([])

  
    //función para traer los datos de la API
    const URL = '/api/horas'
  
    const showData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
        setUsers(data)
      }   
     
     useEffect( ()=> {
      showData()
    }, [])



    const fetcherSeco = () => axios('/api/horasseco').then(datos => datos.data)
    const { data: dataSeco, error: errorSeco, isLoading: isLoadingSeco } = useSWR('/api/horasseco',fetcherSeco,{refreshInterval: 100} )


    const [ users1, setUsers1 ] = useState([])

  
    //función para traer los datos de la API
    const URLS = '/api/horasseco'
  
    const showData1 = async () => {
        const response1 = await fetch(URLS)
        const data1 = await response1.json()
        console.log(data1)
        setUsers(data1)
      }   
     
     useEffect( ()=> {
      showData1()
    }, [])

    return(
        <AdminLayout pagina={'Produccion-fecha'}>

            <h1 className="text-lg font-black text-center">Control Horas</h1>
            <p className="text-2xl my-10"></p>
            
            
            {data && data.length ? data.map(horas =>
                
                <EditarHoras
                    key={horas.id}
                    horas={horas}
                />

                ):
                <p className='text-center m-10'>Sin Produccion</p>
            }
                <h1 className="text-lg font-black text-center my-10">Control Horas Secado</h1>
                {dataSeco && dataSeco.length ? dataSeco.map(horas =>
                
                <EditarHorasSeco
                    key={horas.id}
                    horas={horas}
                />

                ):
                <p className='text-center m-10'>Sin Produccion</p>
            }

            
            

        </AdminLayout>

        
    )

    
}