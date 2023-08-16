import LayoutOrdenCompra from '../layout/LayoutOrdenCompra'
import useCombustible from '../hooks/useCombustible'
import Head from 'next/head'
import ResumenSolicitusGeneral from "../components/ResumenSolicitusGeneral"
import Link from 'next/link'
import {formatiarFecha} from "helpers/fecha"
import { useEffect, useCallback, useState } from "react"
import axios from 'axios'




export default function Home() {

    
    const {solicitud,pedido01,pago,setPago,pedido,crearOC,
        atencion,setAtencion,
        cotizacion,setCotizacion,} = useCombustible()

    const {id,nombre01,fecha} = solicitud


    const cambiarestado = async () => {

        try {

           await axios.post(`/api/ordenlista/${id}`)
        } catch (error) {
            console.log('Hubo un error')
        }
    }

    



    const handleEstadoClick = () => {
        cambiarestado();
    }



    return (
    
        <LayoutOrdenCompra pagina={`Resumen`}>
            <Head>
                <meta name="description" content="Carlos Jerez" />
                <link rel="icon" href="/AGRF.png"/>
                <title>Solicitud AGR</title>
            </Head>
            
            <h1 className="text-2xl font-bold py-8 text-center">Generar Orden De Compra</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 py-5 pb-0 gap-4' >
                <div className='grid grid-cols-1 py-5 pb-0 gap-4' >
                    {pedido01.length === 0 ? (
                        <p className="text-center text-2xl"></p>
                        ) : (
                            pedido01.map((proveedor) => (
                            <ResumenSolicitusGeneral  key={proveedor.id} proveedor={proveedor} />
                        ))
                    )}


                    <div className="shadow p-5 mb-3 flex gap-2 items-center text-center rounded-lg">
                        <Link
                            href="/resumen-oc"
                            className="border rounded-3xl border-solid border-black p-2"
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </Link>
                        <div className="md:w-full">
                            <p className="text-sm font-bold">SOLICITUD Nº {id}</p>
                            <p className="text-sm font-bold">{nombre01}</p>
                            <p className="text-sm font-bold">Fecha: {formatiarFecha(fecha)}</p>
                        </div>  
                    </div>      
                </div> 

                <form
                onSubmit={crearOC}
                className="text-center"
            >


                <div class="shadow p-5 mb-3 rounded-lg">
           
            <div x-show="isLoginPage" class="space-y-4">
                <header class="mb-3 text-2xl font-bold">Completar Datos</header>
                <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                    <input type="text" placeholder="ATENCION" class="my-3 w-full border-none bg-transparent outline-none focus:outline-none" value={atencion} onChange={e => setAtencion(e.target.value)} />
                </div>
                <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                    <input type="text" placeholder="Nº COTIZACION" class="my-3 w-full border-none bg-transparent outline-none focus:outline-none" value={cotizacion} onChange={e => setCotizacion(e.target.value)}/>
                </div>
                <div class="w-full hidden rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                    <select
                        
                        class="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                        
                           
                            value={pago}
                            onChange={e => setPago(e.target.value)}
                    >
                        <option value="" disabled selected>Tipo De Pago</option>
                        <option value="option1"> 1</option>
                    </select>
                </div>
                
                <input
                    type="submit"
                    // className= {`${comprobarOrdenDeCompra() ? 'bg-indigo-100' : 'bg-amber-400 hover:bg-amber-500'}  lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
                    class="w-full rounded-2xl border-b-4 border-b-amber-600 bg-amber-400 py-3 font-bold text-white hover:bg-amber-500 active:translate-y-[0.125rem] active:border-b-amber-400"
                    value="Generar Orden De Compra"
                    // disabled={comprobarOrdenDeCompra()}   
                    onClick={handleEstadoClick}  
                                                               
                />
           
            </div>

            
            
        </div>
        </form>
            </div>
            


            

        </LayoutOrdenCompra>
    )
}