import useSWR from 'swr'
import axios from 'axios'
import LayoutAutorizar from "../layout/LayoutAutorizar"
import OrdenesCompraSup from '../components/OrdenesCompraSup'
import {useState, useEffect} from 'react'






export default function Admin() {

    


    return(
        <LayoutAutorizar pagina={'ordenes-compra'}>


            <div className='py-10'>
                <div className=' shadow rounded-lg p-5 m-auto w-1/2 text-center pb-2'>
                    <h1 className=' font-semibold text-2xl'>Orden De Compra Rechazada</h1>
                </div>
            </div>

        

        </LayoutAutorizar>

        
    )

    
}
