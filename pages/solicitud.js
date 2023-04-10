import Layout from "../layout/Layout"
import { useEffect, useCallback, useState } from "react"
import useCombustible from "../hooks/useCombustible"
import { v4 as uuidv4 } from 'uuid';



export default function Solicitud() {
    const { pedido,nombre,
            setNombre,
            equipo,
            colocarOrden} = useCombustible()








            


    const comprobarPedido = useCallback(() => {
        return pedido.length === 0 || nombre === "" || nombre.length <2;
        
    },[pedido, nombre])


    useEffect(() => {
        comprobarPedido()
    },[pedido, comprobarPedido])



    

        


      
    
    return (
        <Layout pagina='Solicitud O.C.'>
            {/* <p>{patente}</p> */}
            <h1 className="text-4xl font-black">Produccion</h1>
            <p className="text-2xl my-10"></p>

            <form 
                onSubmit={colocarOrden}
                className="grid grid-cols-2 gap-1"
                
            >

                

                <div>
                    <label 
                        htmlFor="nombre"
                        className="block uppercase text-slate-800 font-bold text-xl">Calidad</label>
                    <input
                        id="nombre"
                        type="text"
                        className="bg-gray-200 w-full lg:w-3/4 p-2 rounded-md"  
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                
                </div>

                

                <div className="mt-10">
                    
                    <input
                        type="submit"
                        className= {`${comprobarPedido() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-800'} w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
                        value="Generar O.C."
                        disabled={comprobarPedido()}
                        
                    />
                </div>
            </form>


            
        </Layout>
   )
}