import { Inter } from '@next/font/google'
import Layout from '../layout/Layout'
import Equipo from '../components/Equipo'
import useCombustible from '../hooks/useCombustible'
import {useState, useEffect} from 'react'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const {faenaActual} = useCombustible()
  const [ users, setUsers ] = useState([])
  const [ search, setSearch ] = useState("")

  //función para traer los datos de la API
  const URL = 'http://localhost:3000/api/equipo'

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
   //metodo de filtrado 2   
   const results = !search ? users : users.filter((dato)=> dato.detalle.toLowerCase().includes(search.toLocaleLowerCase()))
  
   useEffect( ()=> {
    showData()
  }, [])

  return (
    <Layout pagina={`Inicio - Producto`}>
    
      {/* <h1 className='text-4xl font-black'>{faenaActual?.nombre}</h1> */}
      <p className='text-2xl mx-5 my-3'>
        Ingresa Escuadría
      </p>
      <div className='mt-auto'>
        <input value={search} onChange={searcher} type="text" placeholder='Buscar' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 🔍
      </div>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-4 2xl:grid-cols-4'>  
        {results.map(equipo=>(
          <Equipo key={equipo.id} equipo={equipo}/>
        ))}
      </div>
    </Layout>
  )
}




  
  
  
  

