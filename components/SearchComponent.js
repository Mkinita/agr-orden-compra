import React, {useState, useEffect} from 'react'
import Image from "next/image"

const SearchComponent = () => {
  //setear los hooks useState
  const [ users, setUsers ] = useState([])
  const [ search, setSearch ] = useState("")

  //función para traer los datos de la API
  const URL = 'http://localhost:3000/api/equipo'

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
   //metodo de filtrado 1 
   /*  let results = []
   if(!search)
   {
       results = users
   }else{
        results = users.filter( (dato) =>
        dato.name.toLowerCase().includes(search.toLocaleLowerCase())
    )
   } */

   //metodo de filtrado 2   
   const results = !search ? users : users.filter((dato)=> dato.patente.toLowerCase().includes(search.toLocaleLowerCase()))
  
   useEffect( ()=> {
    showData()
  }, [])
  
  //renderizamos la vista
  return (
    <div>
        <input value={search} onChange={searcher} type="text" placeholder='Buscar' className='w-full text-gray-700'/>
        <table className='table table-striped table-hover mt-5 shadow-lg'>
            <thead>
                <tr className='bg-curso text-white'>
                    <th>NAME</th>
                    <th>USER NAME</th>
                </tr>
            </thead>
            <tbody>
                { results.map( (user) => (
                    <tr key={user.id}>
                        <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <Image className='rounded-3xl'
                            width={300}
                            height={400}
                            alt={`Imagen equipo${user.nombre}`}
                            src={`/assets/img/${user.imagen}.jpg`}/>
                            <div class="pl-3">
                                <div class="text-black">{user.nombre}</div>
                                <div class="text-black">{user.nombre}</div>
                                <div class="text-black">{user.nombre}</div>
                                <div class="text-black">{user.nombre}</div>
                            </div>

                        </th>
                    
                    
                    
                    
                    </tr>
                    
                    
                ))}
            </tbody>
        </table>
    </div>
  )
}
export default SearchComponent
