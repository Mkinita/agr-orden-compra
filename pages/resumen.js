import Layout from "../layout/Layout"
import useCombustible from "../hooks/useCombustible"
import { useEffect, useCallback, useState } from "react"
import ResumenSolicitud from "../components/ResumenSolicitud"



export default function Resumen() {

    const { pedido,total,nombre, setNombre,cliente,setCliente, colocarOrden,id } = useCombustible()

    const comprobarPedido = useCallback(() => {
        return pedido.length === 0 || nombre === "" || nombre.length <2 ;
        
    },[pedido, nombre])


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
                pedido.map((equipo) => (
                <ResumenSolicitud key={equipo.id} equipo={equipo} />
                
                ))
                
            )}

        

            
        <div className="text-center p-2">
            <p className="text-lg font-bold">Total: {total}</p>
        </div>

        <form 
                onSubmit={colocarOrden}
                className="grid gap-4 grid-cols-2 md:grid-cols-2 2xl:grid-cols-2 text-center"
                
            >


        <div>
                    <label 
                        htmlFor="nombre"
                        className="block uppercase text-slate-800 font-bold text-lg text-center py-2">Calidad</label>
                    <select
                        id="nombre"
                        className="bg-gray-200 w-full lg:w-3/4 p-2 rounded-md"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    >
                        <option value="">-</option>
                        <option value="COL">COL</option>
                        <option value="REMA">REM</option>
                        <option value="IND">IND</option>
                        <option value="SERVICIO">SRV</option>
                        <option value="BS">B-S</option>
                    </select>
                
                </div>



                <div>
                    <label 
                        htmlFor="cliente"
                        className="block uppercase text-slate-800 font-bold text-lg text-center py-2">Cliente</label>
                    <select
                        id="cliente"
                        className="bg-gray-200 w-full lg:w-3/4 p-2 rounded-md"
                        value={cliente}
                        onChange={e => setCliente(e.target.value)}
                    >
                        <option value="">-</option>
                        <option value="Davidson">Davidson</option>
                        <option value="Masisa">Masisa</option>
                        <option value="Ferramenta">Ferramenta</option>
                        <option value="Ochoco">Ochoco</option>
                        <option value="Agrifor">Agrifor</option>
                        <option value="S/C">S/C</option>
                    </select>
                
                </div>



                

        <div className="mt-6 w-full">
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