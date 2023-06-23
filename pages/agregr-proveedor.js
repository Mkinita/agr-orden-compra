import { useEffect, useCallback, useState } from "react"
import useCombustible from "../hooks/useCombustible"
import LayoutOrdenCompra from "../layout/LayoutOrdenCompra"



export default function Pedido() {

    


    const 
    { 
        agregarProveedor,
        nombreproveedor,setNombreproveedor,
        rut, setRut

    } = useCombustible()


    const comprobarPedido = useCallback(() => {
        return rut === "" || rut.length < 11;
        
    },[rut])


    useEffect(() => {
        comprobarPedido()
    },[comprobarPedido])



   return (
        
        <LayoutOrdenCompra pagina='Agregar Pedido'>

            <h1 className="text-2xl font-black text-center py-8">Agregar Proveedor</h1>
            <p className="text-2xl my-10"></p>

            <div class="container mx-auto">

                <form 
                    onSubmit={agregarProveedor}
                    class="text-center"
                >
                    
                    <div class="grid grid-cols-1 lg:grid-cols-1 gap-4  m-auto">
                                
                        <div className="bg-gray-50 p-2 rounded-lg shadow-lg">
                            <div className="bg-white p-2 rounded-md shadow">
                                <div className="m-auto flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                    </svg>
                                </div>
                                <p className="p-2"></p>
                                <div className="py-2">
                                    <label for="ingreso" class=" text-lg font-medium text-gray-700 px-3">Nombre </label>
                                    <input id="ingreso" type="text" class="bg-gray-200 w-3/4 p-2 rounded-md" value={nombreproveedor} onChange={e => setNombreproveedor(e.target.value)} />
                                </div> 
                                <p className="p-5"></p>
                                <div className="pb-5">
                                    <label for="ingreso" class="text-lg font-medium text-gray-700 px-8">Rut </label>
                                    <input id="ingreso" type="text" class="bg-gray-200 w-3/4 p-2 rounded-md" value={rut} onChange={e => setRut(e.target.value)} placeholder="Ingrese Rut con punto y guion ejemplo:18.000.000-0" />
                                </div> 
                            </div>
                        </div>


                    
                    </div> 
                    <div class="grid grid-cols-1 gap-4 w-1/4 m-auto py-5">

                        <input
                            type="submit"
                            className= {`${comprobarPedido() ? 'bg-indigo-100' : 'bg-amber-400 hover:bg-amber-500'}  lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
                            value="Ingresar"
                            disabled={comprobarPedido()}                               
                        />

                    </div>
                </form>   
            </div>
        </LayoutOrdenCompra> 
   )
}