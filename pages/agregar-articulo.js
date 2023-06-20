import { useEffect, useCallback, useState } from "react"
import useCombustible from "../hooks/useCombustible"
import Layout from "../layout/Layout"



export default function Pedido() {

    


    const 
    { 
        agregarArticulo,
        nombre,setNombre,
        valor,setValor

    } = useCombustible()


    const comprobarPedido = useCallback(() => {
        return nombre === "" || nombre.length <4;
        
    },[nombre])


    useEffect(() => {
        comprobarPedido()
    },[comprobarPedido])



   return (
        
        <Layout pagina='Agregar Pedido'>

            <h1 className="text-2xl font-black text-center py-8">Agregar</h1>
            <p className="text-2xl my-10"></p>

            <div class="container mx-auto">

                <form 
                    onSubmit={agregarArticulo}
                    class="text-center"
                >
                    
                    <div class="grid grid-cols-1 lg:grid-cols-1 gap-4  w-3/4 m-auto">
                                
                        <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
                            <div className="bg-white p-4 rounded-md shadow">
                                
                                <div>
                                    <label for="ingreso" class="block text-xs font-medium text-gray-700 mb-1">Articulo</label>
                                    <input id="ingreso" type="text" class="bg-gray-200 w-full p-2 rounded-md" value={nombre} onChange={e => setNombre(e.target.value)} />
                                </div> 

                                <div className="hidden">
                                    <label for="ingreso" class="block text-xs font-medium text-gray-700 mb-1">Valor</label>
                                    <input id="ingreso" type="text" class="bg-gray-200 w-full p-2 rounded-md" value={valor} onChange={e => setValor(e.target.value)} />
                                </div>
                                    
                                <div class="grid grid-cols-1 gap-4 w-1/2 m-auto py-5">

                                    <input
                                        type="submit"
                                        className= {`${comprobarPedido() ? 'bg-indigo-100' : 'bg-amber-400 hover:bg-amber-500'}  lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
                                        value="Ingresar"
                                        disabled={comprobarPedido()}
                                                            
                                    />

                                </div>
                            </div>
                        </div>


                        
                                
                    </div>

                    
                </form> 

                
            </div>
        </Layout>
        
        
   )
}