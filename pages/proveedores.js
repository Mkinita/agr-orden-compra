import { Inter } from '@next/font/google'
import LayoutProveedor from '../layout/LayoutProveedor'
import Proveedor from '../components/Proveedor'
import {useState, useEffect} from 'react'



const inter = Inter({ subsets: ['latin'] })

export default function Solicitud() {

  const [ users, setUsers ] = useState([])
  const [ search, setSearch ] = useState("")

  //función para traer los datos de la API
  const URL = '/api/proveedor'

  const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    //console.log(data)
    setUsers(data)
  }   
   //función de búsqueda
  const searcher = (e) => {
      setSearch(e.target.value)   
  }
   //metodo de filtrado 2   
   const results = !search ? users : users.filter((dato)=> dato.nombreproveedor.toLowerCase().includes(search.toLocaleLowerCase()))
  
   useEffect( ()=> {
    showData()
  }, [])

  return (
    <LayoutProveedor pagina={`Proveedores`}>
      <p className='text-2xl mx-5 my-3 font-bold py-8 pb-2'>Seleccione Un Proveedor</p>
      <div className='mt-auto'>
        <input value={search} onChange={searcher} type="text" placeholder='Buscar' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 🔍
      </div>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 2xl:grid-cols-4'>  
        {results.map(proveedor=>(
          <Proveedor key={proveedor.id} proveedor={proveedor}/>
        ))}
      </div>
    </LayoutProveedor>
  )
}