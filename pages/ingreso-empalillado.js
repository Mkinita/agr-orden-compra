import Layout from "../layout/Layout"
import { useEffect, useCallback, useState } from "react"
import useCombustible from "../hooks/useCombustible"



export default function Saldo() {



    const { pedido,nombre,
        setNombre,
        equipo,
        espesor,
            setEspesor,
            ancho,
            setAncho,
            largo,
            setLargo,
            piezas,
            setPiezas,
            calidad,
            setCalidad,cantidad,setCantidad,
        colocarOrden, colocarEmpalilado } = useCombustible()


    const comprobarPedido = useCallback(() => {
        return espesor === "" || espesor.length <2;
        
    },[espesor])


    useEffect(() => {
        comprobarPedido()
    },[comprobarPedido])





    


   return (
        
    <Layout pagina='Saldos'>

            <h1 className="text-2xl font-black text-center">Empalillado</h1>
            <p className="text-2xl my-10"></p>

            <div class="container mx-auto">

                <form 
                    onSubmit={colocarEmpalilado}
                    class="text-center"
                >

                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                            <tr className="text-xs">
                                <th>Espesor</th>
                                <th>Ancho</th>
                                <th>Largo</th>
                                <th>Corridas</th>
                                <th>Calidad</th>
                                <th>Cantidad</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                <input
                                    id="espesor"
                                    type="number"
                                    className="bg-gray-200 w-full lg:w-3/4 p-1 rounded-md"
                                    value={espesor}
                                    onChange={e => setEspesor(e.target.value)}
                                />
                                </td>



                                <td>
                                    <select
                                        id="ancho"
                                        className="bg-gray-200 w-full lg:w-3/4 p-1 rounded-md"
                                        value={ancho}
                                        onChange={e => setAncho(e.target.value)}
                                    >
                                        <option value="">-</option>
                                        <option value="1000">AV</option>
                                        <option value="125">125</option>
                                    </select>
                                </td>




                               


                                <td>
                                    <select
                                        id="largo"
                                        className="bg-gray-200 w-full lg:w-3/4 p-1 rounded-md"
                                        value={largo}
                                        onChange={e => setLargo(e.target.value)}
                                    >
                                        <option value="">-</option>
                                        <option value="2.13">7</option>
                                        <option value="2.44">8</option>
                                        <option value="3.05">10</option>
                                        <option value="3.20">3.20</option>
                                        <option value="3.66">12</option>
                                        <option value="3.96">13</option>
                                        <option value="4.00">4</option>
                                    </select>
                                </td>




                                <td>
                                <input
                                    id="piezas"
                                    type="number"
                                    className="bg-gray-200 w-full lg:w-3/4 p-1 rounded-md"
                                    value={piezas}
                                    onChange={e => setPiezas(e.target.value)}
                                />
                                </td>
                                <td>
                                    <select
                                        id="calidad"
                                        className="bg-gray-200 w-full lg:w-3/4 p-1 rounded-md"
                                        value={calidad}
                                        onChange={e => setCalidad(e.target.value)}
                                    >
                                        <option value="">-</option>
                                        <option value="Col">Col</option>
                                        <option value="Rema">Rema</option>
                                        <option value="Ind">Ind</option>
                                        <option value="Srv">Srv</option>
                                    </select>
                                </td>


                                <td>
                                <input
                                    id="cantidad"
                                    type="number"
                                    className="bg-gray-200 w-full lg:w-3/4 p-1 rounded-md"
                                    value={cantidad}
                                    onChange={e => setCantidad(e.target.value)}
                                />
                                </td>
                            


                                
                            </tr>
                            </tbody>
                        </table>
                    </div>




                    

                        

                    <div className="mt-6">
                            
                        <input
                            type="submit"
                            className= {`${comprobarPedido() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-800'} w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
                            value="Ingresar"
                            disabled={comprobarPedido()}
                                
                        />
                    </div>
            
                    
                </form>
                
            </div>

            

        </Layout>
        
        
   )
}