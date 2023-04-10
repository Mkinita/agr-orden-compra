import useSWR from 'swr'
import axios from 'axios'
import AdminLayout from "../layout/AdminLayout"
import PedidosRema from '../components/PedidosRema'
import Tabla from '@/components/Tabla'
import React, { useState, useEffect } from 'react';


export default function AdminPedidos() {

    const fetcher = () => axios('/api/listado-pedidos-rema').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/listado-pedidos-rema',fetcher,{refreshInterval: 100} )


    const [ users, setUsers ] = useState([])
    const [ search, setSearch ] = useState("")

    //función para traer los datos de la API
    const URL = '/api/listado-pedidos-rema'

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
    const results = !search ? users : users.filter((dato)=> dato.cliente.toLowerCase().includes(search.toLocaleLowerCase()))
    
    useEffect( ()=> {
        showData()
    }, [])



    return(
        <AdminLayout pagina={'Listado-OC'}>

            <h1 className="text-2xl font-black text-center">Informe Pedidos REMA</h1>
            <p className="text-2xl my-10"></p>
            <div className='mt-auto'>
                <input value={search} onChange={searcher} type="text" placeholder='Buscar' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 🔍
            </div>

            <div className='grid gap-4 grid-cols-1 md:grid-cols-3 2xl:grid-cols-3'>
            
            {data && data.length ? results.map(pedidos =>
                
                <PedidosRema
                    key={pedidos.id}
                    pedidos={pedidos}
                />

                ):
                <p className='text-center m-10'>Sin Pedidos</p>
            } 
            </div>
        </AdminLayout>

        
    )

    
}


