import useSWR from 'swr'
import axios from 'axios'
import AdminLayoutInforme from "../layout/AdminLayoutInforme"
import ListadoPedidosInforme from '../components/ListadoPedidosInforme'
import Tabla from '@/components/Tabla'
import React, { useState, useEffect } from 'react';
import Image from 'next/image'


export default function AdminPedidos() {

    const fetcher = () => axios('/api/pedidos').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/pedidos',fetcher,{refreshInterval: 100} )


    const [ users, setUsers ] = useState([])
    const [ search, setSearch ] = useState("")

    //función para traer los datos de la API
    const URL = '/api/pedidos'

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
        <AdminLayoutInforme pagina={'Listado-OC'}>
            <div className="flex items-center">
  <Image width={280} height={100} src="/assets/img/agr.png" alt="logo" className="text-left"/>
  <div className='px-12'></div>
  <div className='px-10'></div>
  <div className='px-10'></div>
  
  
</div>
            <h1 className="text-2xl font-black text-center">Informe Pedidos</h1>
            <p className='py-2 text-center'>Actualizado: {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'numeric', year: 'numeric' })}</p>
            <p className="text-2xl my-10"></p>
            <div className='mt-auto'>
                <input value={search} onChange={searcher} type="text" placeholder='Buscar Cliente' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 🔍
            </div>

            
            <table>
  <thead>
            <tr class="bg-white border-b  hover:bg-lime-300 text-sm font-bold text-center">
            <td class="px-8 py-4 w-1/5 text-center border border-lime-400">
             Calidad
            </td>
            <td class="px-12 py-4 w-1/5 text-center border border-lime-400">
                Cliente
            </td>
            <td class="px-8 py-4 w-1/5 text-center border border-lime-400">
                O.C.
            </td>
            <td class="px-10 py-4 w-1/5 text-center border border-lime-400">
                Producto
            </td>
            <td class="px-3 py-4 w-1/5 text-center border border-lime-400">
                Solicitud
            </td>
            {/* <td class="px-6 py-4 w-1/5 text-center border border-lime-400">
                Despacho
            </td> */}
            <td class="px-6 py-4 text-right w-1/5 border border-lime-400">
                
                

            <button
                type='button'
                className=''
                onClick={()=> {
                // handleChangeModal();
                // handlesetPedidos(pedidos)
                }}
            >
                Detalle
            </button>
            </td>
        </tr>
        </thead>
        </table>
            
            
            {data && data.length ? results.map(pedidos =>
                
                <ListadoPedidosInforme
                    key={pedidos.id}
                    pedidos={pedidos}
                />

                ):
                <p className='text-center m-10'>Sin Pedidos</p>
            } 
            
        </AdminLayoutInforme>

        
    )

    
}