import useSWR from 'swr'
import axios from 'axios'
import AdminLayout from "../layout/AdminLayout"
import Imagenoc from '../components/Imagenoc'
import React, { useState, useEffect } from 'react';


export default function AdminPedidos() {

    return(
        <AdminLayout pagina={'Listado-OC'}>

            <h1 className="text-3xl font-black text-center">Informe Pedidos</h1>
            <p className="text-2xl my-10"></p>

            <div className=''>
            
                
                <Imagenoc/>
            </div>
        </AdminLayout>

        
    )

    
}