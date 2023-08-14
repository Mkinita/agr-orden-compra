import useSWR from 'swr'
import axios from 'axios'
import LayoutOrdenCompra from "../layout/LayoutOrdenCompra"
import { useEffect, useCallback, useState } from "react"
import useCombustible from "../hooks/useCombustible"
import ResumenSolicitusGeneral from "../components/ResumenSolicitusGeneral"
import ResumenSolicitudOc from "../components/ResumenSolicitudOc"
import SolicitudesOrdenes from '../components/SolicitudesOrdenes'
import { useRouter } from 'next/router'

export default function GenerarOrdenDeCompra() {
    
    const {pedido01,pedido, agregarOC,cantidades,setCantidades,detalles,setDetalles,valores,setValores,solicita,setSolicita,numerosoli,setNumeroSoli,
        cantidad01 ,setCantidad01,detalle01, setDetalle01,valor01, setValore01,
        cantidad02, setCantidad02, descripcion02, setDescripcion02, valor02, setValor02,
        cantidad03, setCantidad03, descripcion03, setDescripcion03, valor03, setValor03,
        cantidad04, setCantidad04, descripcion04, setDescripcion04, valor04, setValor04,
        cantidad05, setCantidad05, descripcion05, setDescripcion05, valor05, setValor05,
        cantidad06, setCantidad06, descripcion06, setDescripcion06, valor06, setValor06,
        cantidad07, setCantidad07, descripcion07, setDescripcion07, valor07, setValor07,
        cantidad08, setCantidad08, descripcion08, setDescripcion08, valor08, setValor08,
        cantidad09, setCantidad09, descripcion09, setDescripcion09, valor09, setValor09,
        area,setArea,
        atencion,setAtencion,
        cotizacion,setCotizacion,
    } = useCombustible()
    

    
    const comprobarOrdenDeCompra = useCallback(() => {
        return pedido01.length === 0 || pedido01 === "" || pedido01.length <1;
        
    },[pedido01, pedido01])


    useEffect(() => {
        comprobarOrdenDeCompra()
    },[pedido01, comprobarOrdenDeCompra])



    const fetcher = () => axios('/api/solicitudes-realizadas').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/solicitudes-realizadas',fetcher,{refreshInterval: 100} )



    const [ users, setUsers ] = useState([])
    const [ search, setSearch ] = useState("")

    //función para traer los datos de la API
    const URL = '/api/solicitudes-realizadas'

    const showData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setUsers(data)
    }   

    


    //función de búsqueda
    const searcher = (e) => {
        setSearch(e.target.value)   
        
    }
    //metodo de filtrado 2   
    const results = !search ? users : users.filter((dato) => dato.id.toString().includes(search));

    
    useEffect( ()=> {
        showData()
    }, [])



    
    const nombresFiltrados = results.map((registro) => registro.nombre01);
    const areaFiltrados = results.map((registro) => registro.area);
    const numeroSolis = results.map((registro) => registro.id);
    

    
    



    const pedidosFiltrados = results.map((registro) => {
    const pedido = registro.pedido;
    const nombres = pedido.map((registro) => registro.nombre);
    return nombres;
    });

    const cantidadesFiltrados = results.map((registro) => {
    const pedido = registro.pedido;
    const cantidadess = pedido.map((registro) => registro.cantidad);
    return cantidadess;
    });



    useEffect(() => {
        if (!search || nombresFiltrados.length === 0) {
          setSolicita("");
        } else {
          setSolicita(nombresFiltrados.join(" "));
        }
    }, [search, nombresFiltrados]);


    useEffect(() => {
        if (!search || areaFiltrados.length === 0) {
          setArea("");
        } else {
          setArea(areaFiltrados.join(" "));
        }
    }, [search, areaFiltrados]);


    useEffect(() => {
        if (!search || numeroSolis.length === 0) {
          setNumeroSoli("");
        } else {
          setNumeroSoli(numeroSolis.join(" "));
        }
    }, [search, numeroSolis]);







    useEffect(() => {
        if (pedidosFiltrados.length > 0) {
          const primerDato = pedidosFiltrados[0][0];
          setDetalles(primerDato);
        } else {
          setDetalles("");
        }
    }, [pedidosFiltrados]);

    
      
    useEffect(() => {
        if (pedidosFiltrados.length > 0 && pedidosFiltrados[0].length > 1) {
          const segundoDato = pedidosFiltrados[0][1];
          setDetalle01(segundoDato);
        } else {
          setDetalle01("");
        }
    }, [pedidosFiltrados]);


    useEffect(() => {
        if (pedidosFiltrados.length > 0 && pedidosFiltrados[0].length > 2) {
          const segundoDato = pedidosFiltrados[0][2];
          setDescripcion02(segundoDato);
        } else {
          setDescripcion02("");
        }
    }, [pedidosFiltrados]);

    useEffect(() => {
        if (pedidosFiltrados.length > 0 && pedidosFiltrados[0].length > 3) {
          const segundoDato = pedidosFiltrados[0][3];
          setDescripcion03(segundoDato);
        } else {
          setDescripcion03("");
        }
    }, [pedidosFiltrados]);


    useEffect(() => {
        if (pedidosFiltrados.length > 0 && pedidosFiltrados[0].length > 4) {
          const segundoDato = pedidosFiltrados[0][4];
          setDescripcion04(segundoDato);
        } else {
          setDescripcion04("");
        }
    }, [pedidosFiltrados]);


    useEffect(() => {
        if (pedidosFiltrados.length > 0 && pedidosFiltrados[0].length > 5) {
          const segundoDato = pedidosFiltrados[0][5];
          setDescripcion05(segundoDato);
        } else {
          setDescripcion05("");
        }
    }, [pedidosFiltrados]);

    useEffect(() => {
        if (pedidosFiltrados.length > 0 && pedidosFiltrados[0].length > 6) {
          const segundoDato = pedidosFiltrados[0][6];
          setDescripcion06(segundoDato);
        } else {
          setDescripcion06("");
        }
    }, [pedidosFiltrados]);

    useEffect(() => {
        if (pedidosFiltrados.length > 0 && pedidosFiltrados[0].length > 7) {
          const segundoDato = pedidosFiltrados[0][7];
          setDescripcion07(segundoDato);
        } else {
          setDescripcion07("");
        }
    }, [pedidosFiltrados]);

    useEffect(() => {
        if (pedidosFiltrados.length > 0 && pedidosFiltrados[0].length > 8) {
          const segundoDato = pedidosFiltrados[0][8];
          setDescripcion08(segundoDato);
        } else {
          setDescripcion08("");
        }
    }, [pedidosFiltrados]);

    useEffect(() => {
        if (pedidosFiltrados.length > 0 && pedidosFiltrados[0].length > 9) {
          const segundoDato = pedidosFiltrados[0][9];
          setDescripcion09(segundoDato);
        } else {
          setDescripcion09("");
        }
    }, [pedidosFiltrados]);



    useEffect(() => {
        if (cantidadesFiltrados.length > 0) {
          const primerDato = cantidadesFiltrados[0][0];
          setCantidades(primerDato);
        } else {
          setCantidades("");
        }
    }, [cantidadesFiltrados]);
      
    useEffect(() => {
        if (cantidadesFiltrados.length > 0 && cantidadesFiltrados[0].length > 1) {
          const segundoDato = cantidadesFiltrados[0][1];
          setCantidad01(segundoDato);
        } else {
          setCantidad01("");
        }
    }, [cantidadesFiltrados]);


    useEffect(() => {
        if (cantidadesFiltrados.length > 0 && cantidadesFiltrados[0].length > 2) {
          const segundoDato = cantidadesFiltrados[0][2];
          setCantidad02(segundoDato);
        } else {
          setCantidad02("");
        }
    }, [cantidadesFiltrados]);

    useEffect(() => {
        if (cantidadesFiltrados.length > 0 && cantidadesFiltrados[0].length > 3) {
          const segundoDato = cantidadesFiltrados[0][3];
          setCantidad03(segundoDato);
        } else {
          setCantidad03("");
        }
    }, [cantidadesFiltrados]);


    useEffect(() => {
        if (cantidadesFiltrados.length > 0 && cantidadesFiltrados[0].length > 4) {
          const segundoDato = cantidadesFiltrados[0][4];
          setCantidad04(segundoDato);
        } else {
          setCantidad04("");
        }
    }, [cantidadesFiltrados]);


    useEffect(() => {
        if (cantidadesFiltrados.length > 0 && cantidadesFiltrados[0].length > 5) {
          const segundoDato = cantidadesFiltrados[0][5];
          setCantidad05(segundoDato);
        } else {
          setCantidad05("");
        }
    }, [cantidadesFiltrados]);

    useEffect(() => {
        if (cantidadesFiltrados.length > 0 && cantidadesFiltrados[0].length > 6) {
          const segundoDato = cantidadesFiltrados[0][6];
          setCantidad06(segundoDato);
        } else {
          setCantidad06("");
        }
    }, [cantidadesFiltrados]);


    useEffect(() => {
        if (cantidadesFiltrados.length > 0 && cantidadesFiltrados[0].length > 7) {
          const segundoDato = cantidadesFiltrados[0][7];
          setCantidad07(segundoDato);
        } else {
          setCantidad07("");
        }
    }, [cantidadesFiltrados]);


    useEffect(() => {
        if (cantidadesFiltrados.length > 0 && cantidadesFiltrados[0].length > 8) {
          const segundoDato = cantidadesFiltrados[0][8];
          setCantidad08(segundoDato);
        } else {
          setCantidad08("");
        }
    }, [cantidadesFiltrados]);


    useEffect(() => {
        if (cantidadesFiltrados.length > 0 && cantidadesFiltrados[0].length > 9) {
          const segundoDato = cantidadesFiltrados[0][9];
          setCantidad09(segundoDato);
        } else {
          setCantidad09("");
        }
    }, [cantidadesFiltrados]);



    const router = useRouter()



    const cambiarestado = async () => {

        try {

           await axios.post(`/api/ordenlista/${search}`)
        } catch (error) {
            console.log('Hubo un error')
        }
    }

    



    const handleEstadoClick = () => {
        cambiarestado();
    }
   
      


      
    
    
    
    return (
        <LayoutOrdenCompra pagina='GenerarOrdenDeCompra O.C.'>
            <h1 className="text-2xl font-bold py-8 text-center">Generar Orden De Compra</h1>

            

            


            {pedido01.length === 0 ? (
                <p className="text-center text-2xl"></p>
            ) : (
                pedido01.map((proveedor) => (
                <ResumenSolicitusGeneral  key={proveedor.id} proveedor={proveedor} />
                ))
            )}

            {pedido.length === 0 ? (
                <p className="text-center text-2xl"></p>
                ) : (
              pedido.map(solicitud=>(
                  <ResumenSolicitudOc key={solicitud.id} solicitud={solicitud}/>      
              ))
            )}

            

            
        

            <div className=''>  
                {results.map(solicitud=>(
                <SolicitudesOrdenes key={solicitud.id} solicitud={solicitud}/>
                ))}
            </div>

            
                

            <form
                onSubmit={agregarOC}
                className="text-center"
            >



                <div className='grid gap-1 grid-cols-2 shadow p-5 mb-3'>
                    <div class="mb-4 text-left">
                        <label htmlFor="solicita" className="font-bold">Atencion: </label>
                        <input id="ingreso" type="text" class="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-400" value={atencion} onChange={e => setAtencion(e.target.value)} />
                    </div>
                    <div class="mb-4 text-left">
                        <label htmlFor="solicita" className="font-bold">Nº Cotizacion: </label>
                        <input id="ingreso" type="text" class="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-400" value={cotizacion} onChange={e => setCotizacion(e.target.value)} />
                    </div>
                </div>

                <div className='grid gap-1 grid-cols-2 shadow p-5'>
                    <div class="mb-4 text-left">
                        <label htmlFor="solicita" className="font-bold px-2">Busca: </label>
                        <input value={search} onChange={searcher} type="text" placeholder='Nº Solicitud' className='w-2/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-400'/> 🔍
                    </div>

                    <div class="mb-4 text-left">
                        <label htmlFor="solicita" className="font-bold">Solicita: </label>
                        <input id="ingreso" type="text" class="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-400" value={solicita} onChange={e => setSolicita(e.target.value)} />
                    </div>


                    <div class="mb-4 text-left hidden">
                        <label htmlFor="solicita" className="font-bold">Area: </label>
                        <input id="ingreso" type="text" class="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-400" value={area} onChange={e => setArea(e.target.value)} />
                    </div>

                    <div class="mb-4 text-left hidden">
                        <label htmlFor="solicita" className="font-bold">Area: </label>
                        <input id="ingreso" type="text" class="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-400" value={numerosoli} onChange={e => setNumeroSoli(e.target.value)} />
                    </div>

                
                </div>

                
                


                <div className="py-5">
                    <table className="table-auto w-full text-center bg-white text-gray-700">
                        <tbody>
                            <tr>
                                <td className="px-6 py-4 w-1/12 text-center border border-gray-200">Cantidad</td>
                                <td className="px-6 py-4 w-2/3 text-center border border-gray-200">Descripcion</td>
                                <td className="px-6 py-4 w-2/3 text-center border border-gray-200">Valor</td>
                            </tr>
                            
                            <tr className="bg-white border-b">
                                <td className="px-6 py-2 w-1/12 text-center border border-gray-200">
                                    <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={cantidades} onChange={e => setCantidades(e.target.value)} />
                                </td>
                                
                                <td className="px-6 py-2 w-2/3 text-center border border-gray-200">
                                    <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={detalles} onChange={e => setDetalles(e.target.value)} />
                                </td>
                                <td className="px-6 py-2 w-2/3 text-center border border-gray-200">
                                    <input id="ingreso" type="number" class="bg-gray-200 w-full p-1 rounded-md" value={valores} onChange={e => setValores(e.target.value)} />
                                </td>
                            </tr>


                            <tr className="bg-white border-b">
                                <td className="px-6 py-2 w-1/12 text-center border border-gray-200">
                                    <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={cantidad01} onChange={e => setCantidad01(e.target.value)} />
                                </td>
                                
                                <td className="px-6 py-2 w-2/3 text-center border border-gray-200">
                                    <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={detalle01} onChange={e => setDetalle01(e.target.value)} />
                                </td>
                                <td className="px-6 py-2 w-2/3 text-center border border-gray-200">
                                    <input id="ingreso" type="number" class="bg-gray-200 w-full p-1 rounded-md" value={valor01} onChange={e => setValore01(e.target.value)} />
                                </td>
                            </tr>

                            <tr className="bg-white border-b">
                                <td className="px-6 py-2 w-1/12 text-center border border-gray-200">
                                    <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={cantidad02} onChange={e => setCantidad02(e.target.value)} />
                                </td>
                                
                                <td className="px-6 py-2 w-2/3 text-center border border-gray-200">
                                    <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={descripcion02} onChange={e => setDescripcion02(e.target.value)} />
                                </td>
                                <td className="px-6 py-2 w-2/3 text-center border border-gray-200">
                                    <input id="ingreso" type="number" class="bg-gray-200 w-full p-1 rounded-md" value={valor02} onChange={e => setValor02(e.target.value)} />
                                </td>
                            </tr>

                            <tr className="bg-white border-b">
                                <td className="px-6 py-2 w-1/12 text-center border border-gray-200">
                                    <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={cantidad03} onChange={e => setCantidad03(e.target.value)} />
                                </td>
                                
                                <td className="px-6 py-2 w-2/3 text-center border border-gray-200">
                                    <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={descripcion03} onChange={e => setDescripcion03(e.target.value)} />
                                </td>
                                <td className="px-6 py-2 w-2/3 text-center border border-gray-200">
                                    <input id="ingreso" type="number" class="bg-gray-200 w-full p-1 rounded-md" value={valor03} onChange={e => setValor03(e.target.value)} />
                                </td>
                            </tr>

                            <tr className="bg-white border-b">
                                <td className="px-6 py-2 w-1/12 text-center border border-gray-200">
                                    <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={cantidad04} onChange={e => setCantidad04(e.target.value)} />
                                </td>
                                
                                <td className="px-6 py-2 w-2/3 text-center border border-gray-200">
                                    <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={descripcion04} onChange={e => setDescripcion04(e.target.value)} />
                                </td>
                                <td className="px-6 py-2 w-2/3 text-center border border-gray-200">
                                    <input id="ingreso" type="number" class="bg-gray-200 w-full p-1 rounded-md" value={valor04} onChange={e => setValor04(e.target.value)} />
                                </td>
                            </tr>

                            <tr className="bg-white border-b">
                                <td className="px-6 py-2 w-1/12 text-center border border-gray-200">
                                    <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={cantidad05} onChange={e => setCantidad05(e.target.value)} />
                                </td>
                                
                                <td className="px-6 py-2 w-2/3 text-center border border-gray-200">
                                    <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={descripcion05} onChange={e => setDescripcion05(e.target.value)} />
                                </td>
                                <td className="px-6 py-2 w-2/3 text-center border border-gray-200">
                                    <input id="ingreso" type="number" class="bg-gray-200 w-full p-1 rounded-md" value={valor05} onChange={e => setValor05(e.target.value)} />
                                </td>
                            </tr>

                            <tr className="bg-white border-b">
                                <td className="px-6 py-2 w-1/12 text-center border border-gray-200">
                                    <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={cantidad06} onChange={e => setCantidad06(e.target.value)} />
                                </td>
                                
                                <td className="px-6 py-2 w-2/3 text-center border border-gray-200">
                                    <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={descripcion06} onChange={e => setDescripcion06(e.target.value)} />
                                </td>
                                <td className="px-6 py-2 w-2/3 text-center border border-gray-200">
                                    <input id="ingreso" type="number" class="bg-gray-200 w-full p-1 rounded-md" value={valor06} onChange={e => setValor06(e.target.value)} />
                                </td>
                            </tr>

                            <tr className="bg-white border-b">
                                <td className="px-6 py-2 w-1/12 text-center border border-gray-200">
                                    <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={cantidad07} onChange={e => setCantidad07(e.target.value)} />
                                </td>
                                
                                <td className="px-6 py-2 w-2/3 text-center border border-gray-200">
                                    <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={descripcion07} onChange={e => setDescripcion07(e.target.value)} />
                                </td>
                                <td className="px-6 py-2 w-2/3 text-center border border-gray-200">
                                    <input id="ingreso" type="number" class="bg-gray-200 w-full p-1 rounded-md" value={valor07} onChange={e => setValor07(e.target.value)} />
                                </td>
                            </tr>


                            <tr className="bg-white border-b">
                                <td className="px-6 py-2 w-1/12 text-center border border-gray-200">
                                    <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={cantidad08} onChange={e => setCantidad08(e.target.value)} />
                                </td>
                                
                                <td className="px-6 py-2 w-2/3 text-center border border-gray-200">
                                    <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={descripcion08} onChange={e => setDescripcion08(e.target.value)} />
                                </td>
                                <td className="px-6 py-2 w-2/3 text-center border border-gray-200">
                                    <input id="ingreso" type="number" class="bg-gray-200 w-full p-1 rounded-md" value={valor08} onChange={e => setValor08(e.target.value)} />
                                </td>
                            </tr>


                            <tr className="bg-white border-b">
                                <td className="px-6 py-2 w-1/12 text-center border border-gray-200">
                                    <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={cantidad09} onChange={e => setCantidad09(e.target.value)} />
                                </td>
                                
                                <td className="px-6 py-2 w-2/3 text-center border border-gray-200">
                                    <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={descripcion09} onChange={e => setDescripcion09(e.target.value)} />
                                </td>
                                <td className="px-6 py-2 w-2/3 text-center border border-gray-200">
                                    <input id="ingreso" type="number" class="bg-gray-200 w-full p-1 rounded-md" value={valor09} onChange={e => setValor09(e.target.value)} />
                                </td>
                            </tr>


                            

                            
                        </tbody>
                    </table>

                </div>


                                

                
                        
                <div class="grid grid-cols-1 gap-4 w-1/2 m-auto py-5">
                <input
                    type="submit"
                    className= {`${comprobarOrdenDeCompra() ? 'bg-indigo-100' : 'bg-amber-400 hover:bg-amber-500'}  lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
                    value="Generar Orden De Compra"
                    disabled={comprobarOrdenDeCompra()}   
                    onClick={handleEstadoClick}  
                                                               
                />
                </div>      
                                     
            </form>
            
        </LayoutOrdenCompra>
   )
}