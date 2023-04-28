import { useEffect, useCallback, useState } from "react"
import useCombustible from "../hooks/useCombustible"
import AdminLayout from "../layout/AdminLayout"



export default function Pedido() {

    


    const 
    { 
        colocarProduccion,
        nombre,setNombre,
        fecha,setFecha,
        volumen,setVolumen,
        ingreso,setIngreso

    } = useCombustible()


    const comprobarPedido = useCallback(() => {
        return volumen === "" || volumen.length <2;
        
    },[volumen])


    useEffect(() => {
        comprobarPedido()
    },[comprobarPedido])



   


    const handleImagenChange = (e) => {
        setImagen(e.target.files[0])
      }



    


   return (
        
    <AdminLayout pagina='Agregar Pedido'>

            <h1 className="text-2xl font-black text-center">Agregar Produccion</h1>
            <p className="text-2xl my-10"></p>

            <div class="container mx-auto">

                <form 
                    onSubmit={colocarProduccion}
                    class="text-center"
                >

                    <div class="grid grid-cols-4 gap-4">
                        <div>
                            <label for="nombre" class="block text-xs font-medium text-gray-700 mb-1">Area</label>
                            <select id="nombre" class="bg-gray-200 w-full p-2 rounded-md" value={nombre} onChange={e => setNombre(e.target.value)}>
                            <option value="">-</option>
                            <option value="ASERRADERO">ASERRADERO</option>
                            <option value="CLASIFICADO">CLASIFICADO</option>
                            <option value="STAKER">STAKER</option>
                            <option value="DESPACHO SECO">DESPACHO SECO</option>
                            <option value="DESPACHO VERDE">DESPACHO VERDE</option>
                            <option value="DESPACHO SERV">DESPACHO SERV</option>
                            <option value="SECADO">SECADO</option>
                            </select>
                        </div>
                        <div>
                            <label for="fecha" class="block text-xs font-medium text-gray-700 mb-1">Fecha</label>
                            <input id="fecha" type="date" class="bg-gray-200 w-full p-2 rounded-md" value={fecha} onChange={e => setFecha(e.target.value)} />
                        </div>

                        <div>
                            <label for="ingreso" class="block text-xs font-medium text-gray-700 mb-1">Ingreso</label>
                            <input id="ingreso" type="text" class="bg-gray-200 w-full p-2 rounded-md" value={ingreso} onChange={e => setIngreso(e.target.value)} />
                        </div>
                        <div>
                            <label for="volumen" class="block text-xs font-medium text-gray-700 mb-1">Produccion</label>
                            <input id="volumen" type="text" class="bg-gray-200 w-full p-2 rounded-md" value={volumen} onChange={e => setVolumen(e.target.value)} />
                        </div>
                        
                    </div>







                    

                        

                    <div className="mt-6">
                            
                        <input
                            type="submit"
                            className= {`${comprobarPedido() ? 'bg-indigo-100' : 'bg-lime-400 hover:bg-lime-500'} w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
                            value="Ingresar"
                            disabled={comprobarPedido()}
                                
                        />
                    </div>
            
                    
                </form>
                
            </div>

            

        </AdminLayout>
        
        
   )
}