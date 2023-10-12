import Layout from '../layout/Layout'
import useCombustible from '../hooks/useCombustible'
import {useEffect, useCallback, useState} from 'react'
import Head from 'next/head'


export default function Home() {

    const [isVisible, setIsVisible] = useState(false);
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);


    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const toggleVisibility1 = () => {
        setIsVisible1(!isVisible1);
    };

    const toggleVisibility2 = () => {
        setIsVisible2(!isVisible2);
    };

    const toggleVisibility3 = () => {
        setIsVisible3(!isVisible3);
    };

    const toggleVisibility4 = () => {
        setIsVisible4(!isVisible4);
    };

    const {AgregarNuevaSolicitud,area,setArea, nombre01,setNombre01,
        setDetalles,cantidades,setCantidades,detalles,
        cantidad01 ,setCantidad01,detalle01, setDetalle01,
        cantidad02, setCantidad02, descripcion02, setDescripcion02,
        cantidad03, setCantidad03, descripcion03, setDescripcion03,
        cantidad04, setCantidad04, descripcion04, setDescripcion04,
    } = useCombustible()


    const comprobarsolicitud = useCallback(() => {
        return area.length === 0 || area === "" || area.length <1;
        
    },[area, area])


    useEffect(() => {
        comprobarsolicitud()
    },[area, comprobarsolicitud])

  

  

  return (
    
    <Layout pagina={`Inicio - Producto`}>
        <Head>
            <meta name="description" content="Carlos Jerez" />
            <link rel="icon" href="/AGRF.png"/>
            <title>Solicitud AGR</title>
        </Head>
        <p className='text-2xl py-5 mx-5 my-3 text-center uppercase font-bold'>Generar Solicitud</p>
        <div className='px-2 py-4'>

            <form
                onSubmit={AgregarNuevaSolicitud}
                className="text-center"
            >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                    <div class="text-left">
                        <label htmlFor="solicita" className="block uppercase text-slate-800 font-bold text-lg text-center py-1">Solicita: </label>
                        <p className='w-full  px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-400'>GAVINO UGALDE</p>
                    </div>

                    <div>
                        <label 
                            htmlFor="nombre"
                            className="block uppercase text-slate-800 font-bold text-lg text-center py-1">Área: </label>
                        <select
                            id="nombre"
                            className="bg-gray-200 w-full lg:w-3/4 p-2 rounded-md"
                            value={area}
                            onChange={e => setArea(e.target.value)}
                        >
                            <option value="">-</option>
                            <option value="DESCORTEZADOR">DESCORTEZADOR</option>
                            <option value="ASERRADERO">ASERRADERO</option>
                            <option value="PARTIDORAS">PARTIDORAS</option>
                            <option value="BAÑO ANTIMANCHA">BAÑO ANTIMANCHA</option>
                            <option value="STACKER">STACKER</option>
                            <option value="SECADO">SECADO</option>
                            <option value="CLASIFICADO">CLASIFICADO</option>
                            <option value="EQUIPOS-MOVILES">EQUIPOS-MOVILES</option>
                            <option value="PLANTA-GENERAL">PLANTA-GENERAL</option>
                        </select>
                            
                    </div>
                </div>

                <table className="table-auto w-full text-center bg-white text-gray-700 ">
                    <tbody>
                        <tr>
                            <td className="px-2 py-4 w-1/12 text-center">Cantidad</td>
                            <td className="px-2 py-4 w-2/3 text-center">Descripcion</td>
                            <td className="px-2 py-4 w-1/12 text-center">+</td>
                        </tr>
                        <tr className="bg-white border border-gray-200 ">
                            <td className="px-2 py-2 w-1/12 text-center  ">
                                <input id="ingreso" type="number" class="bg-gray-200 w-full p-1 rounded-md" value={cantidades} onChange={e => setCantidades(e.target.value)}/>
                            </td>    
                            <td className="px-2 py-2 w-2/3 text-center  ">
                                <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={detalles} onChange={e => setDetalles(e.target.value)}/>
                            </td>
                            <td className="px-2 py-2 w-1/12 text-center  ">
                                <button
                                    type="button"
                                    className=""
                                    onClick={toggleVisibility}         
                                >
                                    {isVisible ? '-':'+'}
                                </button>
                            </td>
                        </tr>    
                        {isVisible && (

                            <tr className="bg-white border border-gray-200 ">
                                <td className="px-2 py-2 w-1/12 text-center  ">
                                    <input id="ingreso" type="number" class="bg-gray-200 w-full p-1 rounded-md" value={cantidad01} onChange={e => setCantidad01(e.target.value)}/>
                                </td>
                                <td className="px-2 py-2 w-2/3 text-center  ">
                                    <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={detalle01} onChange={e => setDetalle01(e.target.value)}/>
                                </td>
                                <td className="px-2 py-2 w-1/12 text-center  ">
                                    <button
                                        type="button"
                                        onClick={toggleVisibility1}           
                                    >                        
                                    {isVisible1 ? '-':'+'}
                                    </button>
                                </td>
                            </tr>    
                        )}

                        {isVisible1 && (

                            <tr className="bg-white border border-gray-200 ">
                                <td className="px-2 py-2 w-1/12 text-center  ">
                                    <input id="ingreso" type="number" class="bg-gray-200 w-full p-1 rounded-md" value={cantidad02} onChange={e => setCantidad02(e.target.value)}/>
                                </td>
                                <td className="px-2 py-2 w-2/3 text-center  ">
                                    <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={descripcion02} onChange={e => setDescripcion02(e.target.value)}/>
                                </td>
                                 <td className="px-2 py-2 w-1/12 text-center  ">
                                    <button
                                        type="button"
                                        onClick={toggleVisibility2}
                                            
                                    >   
                                    {isVisible2 ? '-':'+'}
                                    </button>
                                </td>
                            </tr>    
                        )}
                        {isVisible2 && (

                            <tr className="bg-white border border-gray-200 ">
                                 <td className="px-2 py-2 w-1/12 text-center  ">
                                     <input id="ingreso" type="number" class="bg-gray-200 w-full p-1 rounded-md" value={cantidad03} onChange={e => setCantidad03(e.target.value)}/>
                                 </td>
                                 <td className="px-2 py-2 w-2/3 text-center  ">
                                     <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={descripcion03} onChange={e => setDescripcion03(e.target.value)}/>
                                 </td>
                                 <td className="px-2 py-2 w-1/12 text-center  ">
                                    <button
                                        type="button"
                                        onClick={toggleVisibility3}
                                            
                                    >
                                    {isVisible3 ? '-':'+'}
                                    </button>
                                </td>
                            </tr>    
                        )}

                        {isVisible3 && (

                            <tr className="bg-white border border-gray-200 ">
                                <td className="px-2 py-2 w-1/12 text-center  ">
                                    <input id="ingreso" type="number" class="bg-gray-200 w-full p-1 rounded-md" value={cantidad04} onChange={e => setCantidad04(e.target.value)}/>
                                </td>
                                
                                <td className="px-2 py-2 w-2/3 text-center  ">
                                    <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={descripcion04} onChange={e => setDescripcion04(e.target.value)}/>
                                </td>

                                <td className="px-2 py-2 w-1/12 text-center  ">
                                    <button
                                        type="button"
                                        onClick={toggleVisibility3}      
                                    >
                                        
                                    {isVisible3 ? '-':'+'}
                                    </button>
                                </td>
                            </tr>    
                        )}   
                    </tbody>
                </table>
                <div className='py-2'></div>
                <input
                    type="submit"
                    className= {`${comprobarsolicitud() ? 'bg-indigo-100' : 'bg-amber-400 hover:bg-amber-500'}  lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
                    value="Generar Solicitud"
                    disabled={comprobarsolicitud()}       
                />                    
            </form>
        </div>    
        
    </Layout>
  )
}
