import { Inter } from '@next/font/google'
import Layout from '../layout/Layout'
import Articulo from '../components/Articulo'
import useCombustible from '../hooks/useCombustible'
import {useState, useEffect} from 'react'
import Head from 'next/head'





export default function Home() {

  
  const [ users, setUsers ] = useState([])
  const [ search, setSearch ] = useState("")

  //función para traer los datos de la API
  const URL = '/api/articulo'

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
   const results = !search ? users : users.filter((dato)=> dato.nombre.toLowerCase().includes(search.toLocaleLowerCase()))
  
   useEffect( ()=> {
    showData()
  }, [])


  

  return (
    
    <Layout pagina={`Inicio - Producto`}>
      <Head>
        <meta name="description" content="Carlos Jerez" />
        <link rel="icon" href="/CJ.png" />
        <title>Control Produccion AGR</title>
        <meta property="og:image" content="/CJ.png" />
        <meta name="twitter:image" content="/CJ.png" />
      </Head>
  
      <p className='text-2xl mx-5 my-3 text-center'>
        Agregar Articulos
      </p>
      <div class="container mx-auto">
        <div class="w-full px-4 py-2">
          <div class="mb-4">
            <input value={search} onChange={searcher} type="text" placeholder='Buscar' className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-400'/>
          </div>
          <div class="overflow-x-auto">
            <table class="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th class="px-6  w-3/4 text-center border-b border-gray-300">Nombre</th>
                  <th class="px-6  w-1/4 text-center border-b border-gray-300">Agregar</th>
                </tr>
              </thead>
              
            </table>
          </div>
        </div>
      </div>
      
      <div className=''>  
        {results.map(articulo=>(
          <Articulo key={articulo.id} articulo={articulo}/>
        ))}
      </div>
      

    </Layout>
  )
}



   

