import useSWR from 'swr'
import axios from 'axios'
import AdminLayout from "../layout/AdminLayout"
import ListadoSaldosFecha from '../components/ListadoSaldosFecha'
import Tabla from '@/components/Tabla'
import * as XLSX from 'xlsx';
import {useState, useEffect} from 'react'

export default function AdminProducciones() {

    const fetcher = () => axios('/api/listado-saldo').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/listado-saldo',fetcher,{refreshInterval: 100} )



    return(
        <AdminLayout pagina={'Produccion-fecha'}>

            <h1 className="text-3xl font-black text-center">Reprocesos</h1>
            <p className="text-2xl my-10"></p>
            <Tabla/>
            {data && data.length ? data.map(saldo =>
                
                <ListadoSaldosFecha
                    key={saldo.id}
                    saldo={saldo}
                />

                ):
                <p className='text-center m-10'>Sin Produccion</p>
            }

        </AdminLayout>

        
    )

    
}