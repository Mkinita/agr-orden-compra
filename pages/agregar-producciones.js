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
        ingreso,setIngreso,
        ingreso01,setIngreso01

    } = useCombustible()


    const comprobarPedido = useCallback(() => {
        return volumen === "" || volumen.length <1;
        
    },[volumen])


    useEffect(() => {
        comprobarPedido()
    },[comprobarPedido])



   


    const handleImagenChange = (e) => {
        setImagen(e.target.files[0])
    }





    const [isVisibleproveedor, setIsVisibleproveedor] = useState(false);
      
    const toggleVisibilityproveedor = () => {
        setIsVisibleproveedor(!isVisibleproveedor);
    };
    const [cuadro, setCuadro] = useState(false);

    const toggleCuadro = () => {
        setCuadro(!cuadro);
    };




    



    


   return (
        
    <AdminLayout pagina='Agregar Pedido'>

            <h1 className="text-2xl font-black text-center">Agregar Produccion</h1>
            <p className="text-2xl my-10"></p>

            <div class="container mx-auto">

                <form 
                    onSubmit={colocarProduccion}
                    class="text-center"
                >
                    <div className={`${isVisibleproveedor ? 'hidden' : ''}`}>
                    <div className={`${cuadro ? 'hidden' : ''}`}>
                            <div class="grid grid-cols-4 gap-4">
                                <div>
                                    <label for="nombre" class="block text-xs font-medium text-gray-700 mb-1">Area</label>
                                    <select id="nombre" class="bg-gray-200 w-full p-2 rounded-md" value={nombre} onChange={e => setNombre(e.target.value)}>
                                    <option value="">-</option>
                                    <option value="ASERRADERO">ASERRADERO</option>
                                    <option value="CLASIFICADO">CLASIFICADO</option>
                                    <option value="STAKER">STAKER</option>
                                    <option value="SECO">SECO</option>
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
                        </div>       
                    </div>


                    {isVisibleproveedor && ( 
                        <div class="grid grid-cols-5 gap-5">
                        <div>
                            <label for="nombre" class="block text-xs font-medium text-gray-700 mb-1">Area</label>
                            <select id="nombre" class="bg-gray-200 w-full p-2 rounded-md" value={nombre} onChange={e => setNombre(e.target.value)}>
                            <option value="">-</option>
                            <option value="DESPACHO">DESPACHO</option>
                            </select>
                        </div>
                        <div>
                            <label for="fecha" class="block text-xs font-medium text-gray-700 mb-1">Fecha</label>
                            <input id="fecha" type="date" class="bg-gray-200 w-full p-2 rounded-md" value={fecha} onChange={e => setFecha(e.target.value)} />
                        </div>
                        <div>
                            <label for="ingreso" class="block text-xs font-medium text-gray-700 mb-1">Seco</label>
                            <input id="ingreso" type="text" class="bg-gray-200 w-full p-2 rounded-md" value={ingreso} onChange={e => setIngreso(e.target.value)} />
                        </div>
                        <div>
                            <label for="ingreso" class="block text-xs font-medium text-gray-700 mb-1">Verde</label>
                            <input id="ingreso" type="text" class="bg-gray-200 w-full p-2 rounded-md" value={ingreso01} onChange={e => setIngreso01(e.target.value)} />
                        </div>
                        <div>
                            <label for="volumen" class="block text-xs font-medium text-gray-700 mb-1">Servicio</label>
                            <input id="volumen" type="text" class="bg-gray-200 w-full p-2 rounded-md" value={volumen} onChange={e => setVolumen(e.target.value)} />
                        </div>
                        
                    </div>
                    )}

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


            <button
                className="font-bold text-sm py-10"
                onClick={toggleVisibilityproveedor}            
            >
                {isVisibleproveedor ? '➖' : 'Agregar Despachos ➕'}
            </button>

            

        </AdminLayout>
        
        
   )
}