import { useEffect, useCallback, useState } from "react"
import useCombustible from "../hooks/useCombustible"
import AdminLayout from "../layout/AdminLayout"



export default function Pedido() {

    


    const 
    { 
        colocarHoras,
        horasmes,setHorasmes,
        horasmesseco,setHorasmesseco,

    } = useCombustible()


    const comprobarPedido = useCallback(() => {
        return horasmes === "" || horasmes.length <1;
        
    },[horasmes])


    useEffect(() => {
        comprobarPedido()
    },[comprobarPedido])



   return (
        
        <AdminLayout pagina='Agregar Pedido'>

            <h1 className="text-2xl font-black text-center">Agregar Horas</h1>
            <p className="text-2xl my-10"></p>

            <div class="container mx-auto">

                <form 
                    onSubmit={colocarHoras}
                    class="text-center"
                >
                    
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                
                        <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
                            <div className="bg-white p-4 rounded-md shadow">
                                
                                <div>
                                    <label for="ingreso" class="block text-xs font-medium text-gray-700 mb-1">Asr / Cla / Emp / Desp</label>
                                    <input id="ingreso" type="text" class="bg-gray-200 w-full p-2 rounded-md" value={horasmes} onChange={e => setHorasmes(e.target.value)} />
                                    </div> 
                                    <div className="mt-6">
                                
                                    
                                </div>
                            </div>
                        </div>


                        <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
                            <div className="bg-white p-4 rounded-md shadow">
                                
                                <div>
                                    <label for="ingreso" class="block text-xs font-medium text-gray-700 mb-1">Secado</label>
                                    <input id="ingreso" type="text" class="bg-gray-200 w-full p-2 rounded-md" value={horasmesseco} onChange={e => setHorasmesseco(e.target.value)} />
                                    </div> 
                                    <div className="mt-6">
                                
                                    
                                </div>
                            </div>
                        </div>
                                
                    </div>

                    <div class="grid grid-cols-1 gap-4 w-1/2 m-auto py-5">

                        <input
                            type="submit"
                            className= {`${comprobarPedido() ? 'bg-indigo-100' : 'bg-lime-400 hover:bg-lime-500'}  lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
                            value="Ingresar"
                            disabled={comprobarPedido()}
                                                
                        />

                    </div>
                </form> 
            </div>
        </AdminLayout>
        
        
   )
}