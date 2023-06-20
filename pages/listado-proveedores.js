import { Inter } from '@next/font/google'
import LayoutOrdenCompra from '../layout/LayoutOrdenCompra'
import ListadoProveedores from '../components/ListadoProveedores'
import useCombustible from '../hooks/useCombustible'
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
    <LayoutOrdenCompra pagina={`Proveedores`}>
        <p className='text-2xl mx-5 my-3 font-bold py-8'>Listado De Proveedores</p>
        <div className='mt-auto'>
            <input value={search} onChange={searcher} type="text" placeholder='Buscar' className='text-gray-700  text-center m-auto flex-wrap-reverse border-yellow-400'/> 🔍
        </div>
        <div className='px-6'>  
            <table className="table-auto w-full text-center bg-white text-gray-700">
                <tbody>
                    <tr className="bg-white text-black uppercase font-bold text-lg">
                        <td className="px-6 py-4 w-1/6 text-center">Nombre</td>
                        <td className="px-6 py-4 w-1/12 text-center">Rut</td>
                    </tr>
                </tbody>
            </table> 
            {results.map(proveedor=>(
            <ListadoProveedores key={proveedor.id} proveedor={proveedor}/>
            ))}
      </div>
    </LayoutOrdenCompra>
  )
}