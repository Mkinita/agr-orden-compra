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
                    
                    <div class="grid grid-cols-2 lg:grid-cols-2 gap-4  m-auto">
                                
                        <div className="bg-gray-50 p-2 rounded-lg shadow-lg">
                            <div className="bg-white p-2 rounded-md shadow">
                                <p className="p-2"></p>
                                <div className="py-2">
                                    <label for="ingreso" class="block text-lg font-medium text-gray-700 mb-1">Nombre</label>
                                    <input id="ingreso" type="text" class="bg-gray-200 w-full p-2 rounded-md" value={nombreproveedor} onChange={e => setNombreproveedor(e.target.value)} />
                                </div> 
                                <p className="p-5"></p>
                                <div className="pb-5">
                                    <label for="ingreso" class="block text-lg font-medium text-gray-700 mb-1">Rut</label>
                                    <input id="ingreso" type="text" class="bg-gray-200 w-full p-2 rounded-md" value={rut} onChange={e => setRut(e.target.value)} placeholder="Ingrese Rut con punto y guion ejemplo:18.000.000-0" />
                                </div> 
                            </div>
                        </div>

                        <div className="bg-gray-50 p-2 rounded-lg shadow-lg">
                        <video autoPlay muted loop className="w-full">
                            <source src="/assets//video/agregar_proveedores.mp4" type="video/mp4" />
                        </video>
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