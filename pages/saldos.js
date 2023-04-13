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
            setCalidad,
        colocarOrden, colocarSaldo } = useCombustible()


    const comprobarPedido = useCallback(() => {
        return espesor === "" || espesor.length <2;
        
    },[espesor])


    useEffect(() => {
        comprobarPedido()
    },[comprobarPedido])





    


   return (
        
    <Layout pagina='Saldos'>

            <h1 className="text-2xl font-black text-center">Ingresar Saldos</h1>
            <p className="text-2xl my-10"></p>

            <div class="container mx-auto">

                <form 
                    onSubmit={colocarSaldo}
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
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                <input
                                    id="espesor"
                                    type="number"
                                    className="bg-gray-200 w-full lg:w-3/4 p-2 rounded-md"
                                    value={espesor}
                                    onChange={e => setEspesor(e.target.value)}
                                />
                                </td>
                                <td>
                                <input
                                    id="ancho"
                                    type="number"
                                    className="bg-gray-200 w-full lg:w-3/4 p-2 rounded-md"
                                    value={ancho}
                                    onChange={e => setAncho(e.target.value)}
                                />
                                </td>
                                <td>
                                <input
                                    id="largo"
                                    type="number"
                                    className="bg-gray-200 w-full lg:w-3/4 p-2 rounded-md"
                                    value={largo}
                                    onChange={e => setLargo(e.target.value)}
                                />
                                </td>
                                <td>
                                <input
                                    id="piezas"
                                    type="number"
                                    className="bg-gray-200 w-full lg:w-3/4 p-2 rounded-md"
                                    value={piezas}
                                    onChange={e => setPiezas(e.target.value)}
                                />
                                </td>
                                <td>
                                    <select
                                        id="calidad"
                                        className="bg-gray-200 w-full lg:w-3/4 p-2 rounded-md"
                                        value={calidad}
                                        onChange={e => setCalidad(e.target.value)}
                                    >
                                        <option value="">-</option>
                                        <option value="Col">Col</option>
                                        <option value="Rema">Rema</option>
                                        <option value="Ind">Ind</option>
                                        <option value="Dpt">Dpt</option>
                                    </select>
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