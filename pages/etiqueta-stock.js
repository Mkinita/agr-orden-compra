import { Inter } from '@next/font/google'
import AdminLayout from '../layout/AdminLayout'
import {useState, useEffect} from 'react'
import EtiquetaStock from '@/components/EtiquetaStock'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {





  const [ datos, setDatos ] = useState([])
    const [ buscar, setBuscar ] = useState("")
  
    //función para traer los datos de la API
    const URL = '/api/stock-despacho'
  
    const showData = async () => {
      const response = await fetch(URL)
      const data = await response.json()
      //console.log(data)
      setDatos(data)
    }   
     //función de búsqueda
    const buscador = (e) => {
        setBuscar(e.target.value)   
    }
    //  metodo de filtrado 2   
    //  const results = !buscar ? datos : datos.filter((dato) => dato.pedido.some((pedido) => pedido.patente.toLowerCase().includes(buscar.toLowerCase())))
    //  const results = !buscar ? datos : datos.filter((dato)=> dato.obra.toLowerCase().includes(buscar.toLocaleLowerCase()))


    const results = !buscar ? datos : datos.filter((dato) => {
        const id = typeof dato.id === 'string' ? dato.id : String(dato.id);
        return id.toLowerCase().includes(buscar.toLowerCase());
      });
      
      


     
    
     useEffect( ()=> {
      showData()
    }, [])

  return (
    <AdminLayout pagina={`Inicio - Producto`}>
    
      {/* <h1 className='text-4xl font-black'>{faenaActual?.nombre}</h1> */}
      <p className='text-2xl mx-5 my-3'>
        Etiquetas
      </p>
      <div className='mt-auto'>
        <input value={buscar} onChange={buscador} type="text" placeholder='Buscar' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 🔍
      </div>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-1 2xl:grid-cols-1'>  
        {results.map(orden=>(
          <EtiquetaStock key={orden.id} orden={orden}/>
        ))}
      </div>
    </AdminLayout>
  )
}




  