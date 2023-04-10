import { useEffect, useCallback, useState } from "react"
import useCombustible from "../hooks/useCombustible"
import AdminLayout from "../layout/AdminLayout"



export default function Pedido() {

    


    const 
    { 
        colocarPedido,
        tipo,setTipo,
        cliente,setCliente,
        oc,setOc,
        producto,setProducto,
        solicitud,setSolicitud,
        despacho,setDespacho,
        imagen,setImagen

    } = useCombustible()


    const comprobarPedido = useCallback(() => {
        return solicitud === "" || solicitud.length <3;
        
    },[solicitud])


    useEffect(() => {
        comprobarPedido()
    },[comprobarPedido])



   


    const handleImagenChange = (e) => {
        setImagen(e.target.files[0])
      }



    


   return (
        
    <AdminLayout pagina='Agregar Pedido'>

            <h1 className="text-2xl font-black text-center">Agregar Pedido</h1>
            <p className="text-2xl my-10"></p>

            <div class="container mx-auto">

                <form 
                    onSubmit={colocarPedido}
                    class="text-center"
                >

                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                            <tr className="text-xs">
                                <th>Tipo</th>
                                <th>Cliente</th>
                                <th>N° OC</th>
                                <th>Producto</th>
                                <th>m³ Solicitud</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                            <td>
                                    <select
                                        id="tipo"
                                        className="bg-gray-200 w-full lg:w-3/4 p-2 rounded-md"
                                        value={tipo}
                                        onChange={e => setTipo(e.target.value)}
                                    >
                                        <option value="">-</option>
                                        <option value="CENTRAL">CENTRAL</option>
                                        <option value="REMA">REMA</option>
                                        <option value="COL">COL</option>
                                        <option value="VERDE">VERDE</option>
                                    </select>
                                </td>
                                <td>
                                <input
                                    id="cliente"
                                    type="text"
                                    className="bg-gray-200 w-full lg:w-3/4 p-2 rounded-md"
                                    value={cliente}
                                    onChange={e => setCliente(e.target.value)}
                                />
                                </td>
                                <td>
                                <input
                                    id="oc"
                                    type="text"
                                    className="bg-gray-200 w-full lg:w-3/4 p-2 rounded-md"
                                    value={oc}
                                    onChange={e => setOc(e.target.value)}
                                />
                                </td>
                                <td>
                                <input
                                    id="producto"
                                    type="text"
                                    className="bg-gray-200 w-full lg:w-3/4 p-2 rounded-md"
                                    value={producto}
                                    onChange={e => setProducto(e.target.value)}
                                />
                                </td>
                                <td>
                                <input
                                    id="solicitud"
                                    type="text"
                                    className="bg-gray-200 w-full lg:w-3/4 p-2 rounded-md"
                                    value={solicitud}
                                    onChange={e => setSolicitud(e.target.value)}
                                />
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>




                    <div className="py-5 pb-2">
                        <p className="font-bold text-xs pb-2">Linck</p>
                        <input
                            id="imagen"
                            type="text"
                            className="bg-gray-200 w-full lg:w-3/4 p-2 rounded-md"
                            value={imagen}
                            onChange={e => setImagen(e.target.value)}
                        />
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