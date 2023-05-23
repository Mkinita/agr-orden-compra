import Layout from "../layout/Layout"
import useCombustible from "../hooks/useCombustible"
import { useEffect, useCallback, useState } from "react"
import ResumenSolicitud from "../components/ResumenSolicitud"
import Link from "next/link"



export default function Resumen() {

    const { pedido,area,setArea, agregarSolicitud01, nombre01,setNombre01} = useCombustible()

    const comprobarPedido = useCallback(() => {
        return pedido.length === 0 || area === "" || area.length <2 ;
        
    },[pedido, area])


    useEffect(() => {
        comprobarPedido()
    },[pedido, comprobarPedido])

   return (
        <Layout pagina='Resumen'>
            <h1 className="text-4xl font-black text-center">Resumen</h1>
            <p className="text-2xl my-10 text-center"></p>
            


            {pedido.length === 0 ? (
                <p className="text-center text-2xl">No hay Productos</p>
                
            ) : (
                pedido.map((articulo) => (
                <ResumenSolicitud key={articulo.id} articulo={articulo} />
                
                ))
                
            )}
            <div className="py-5 m-auto text-center">

                <Link href="/agregar-solicitud" class="p-2 font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 text-sm">
                    ➕
                    <span class="ml-3">Agregar Articulo</span>
                </Link>

            </div>

        



            <form 
                onSubmit={agregarSolicitud01}
                className="grid gap-4 grid-cols-1 md:grid-cols-1 2xl:grid-cols-2 text-center py-2 px-6"
                
            >


                <div>
                    <label 
                        htmlFor="nombre"
                        className="block uppercase text-slate-800 font-bold text-lg text-center py-2">Área</label>
                    <select
                        id="nombre"
                        className="bg-gray-200 w-full lg:w-3/4 p-2 rounded-md"
                        value={area}
                        onChange={e => setArea(e.target.value)}
                    >
                        <option value="">-</option>
                        <option value="DESCORTEZADOR">DESCORTEZADOR</option>
                        <option value="ASERRADERO">ASERRADERO</option>
                        <option value="PARTIDORAS">PARTIDORAS</option>
                        <option value="BAÑO ANTIMANCHA">BAÑO ANTIMANCHA</option>
                        <option value="STACKER">STACKER</option>
                        <option value="SECADO">SECADO</option>
                        <option value="CLASIFICADO">CLASIFICADO</option>
                        <option value="EQUIPOS-MOVILES">EQUIPOS-MOVILES</option>
                        <option value="PLANTA-GENERAL">PLANTA-GENERAL</option>
                    </select>
                        
                </div>

                <div className="hidden">
                    <input id="ingreso" type="text" class="bg-gray-200 w-full p-2 rounded-md" value={nombre01} onChange={e => setNombre01(e.target.value)} />
                </div> 

                <div className="mt-1 w-full">
                    <input
                        type="submit"
                        className= {`${comprobarPedido() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-800'} lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center w-full`}
                        value="Ingresar"
                        disabled={comprobarPedido()}        
                    />
                </div>

            </form>

        </Layout>
    )
}