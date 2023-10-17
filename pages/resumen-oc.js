import LayoutOrdenCompra from '../layout/LayoutOrdenCompra'
import useCombustible from '../hooks/useCombustible'
import Head from 'next/head'
import DetalleResumen from "../components/DetalleResumen"
import ResumenSolicitusGeneral from "../components/ResumenSolicitusGeneral"
import Link from 'next/link'





export default function Home() {

    
    const {solicitud,pedido01,pedido} = useCombustible()

    const {id,nombre01,area} = solicitud



    return (
    
        <LayoutOrdenCompra pagina={`Resumen`}>
            <Head>
                <meta name="description" content="Carlos Jerez" />
                <link rel="icon" href="/AGRF.png"/>
                <title>Solicitud AGR</title>
            </Head>
            
            <h1 className="text-2xl font-bold py-8 text-center">Resumen Orden De Compra</h1>
            <div className='grid grid-cols-2 py-5 pb-0 gap-2 ' >
                {pedido01.length === 0 ? (
                    <p className="text-center text-2xl"></p>
                    ) : (
                        pedido01.map((proveedor) => (
                        <ResumenSolicitusGeneral  key={proveedor.id} proveedor={proveedor} />
                    ))
                )}


                {/* <div className="text-center font-extrabold p-5 py-10 hover:scale-95 shadow mb-3 rounded-lg">
                    <Link href="/generar-oc" className="border border-r-slate-200 p-2">
                        ⏩
                            <span className="ml-3 ">Siguiente ⏩</span>
                    </Link>
                </div>       */}
                <div className="shadow p-5 mb-3 flex gap-2 items-center text-center rounded-lg">
                        <Link
                            href="/editar-orden"
                            className="border rounded-3xl border-solid border-black p-2"
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg>

                        </Link>
                        <div className="md:w-full">
                            <p className="text-sm font-bold">SOLICITUD Nº {id}</p>
                            <p className="text-sm font-bold">{nombre01}</p>
                            <p className="text-sm font-bold">{area}</p>
                        </div>  
                    </div>      
                
            </div>
                        
            {/* <h2 className="text-xl font-bold py-4 pb-2 text-center">Solicitud nº{id}</h2>
            {pedido.length === 0 ? (
                <p className="text-center text-2xl"></p>
                ) : (
                    pedido.map(solicitud=>(
                    <DetalleResumen key={solicitud.id} solicitud={solicitud}/>      
                ))
                
            )} */}
            <div className='grid grid-cols-1 md:grid-cols-1 py-5 pb-0 gap-4' >
            <div className='grid grid-cols-1 py-5 pb-0 gap-4' >

    
                </div> 




<form
                // onSubmit={crearOC}
                className="text-center"
            >


                <div class="shadow p-5 mb-3 rounded-lg">
           
            <div x-show="isLoginPage" class="space-y-4">
                {/* <header class="mb-3 text-2xl font-bold">Completar Datos</header> */}
                <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                    {/* <input type="text" placeholder="ATENCION" class="my-3 w-full border-none bg-transparent outline-none focus:outline-none" value={atencion} onChange={e => setAtencion(e.target.value)} /> */}
                </div>
                <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                    {/* <input type="text" placeholder="Nº COTIZACION" class="my-3 w-full border-none bg-transparent outline-none focus:outline-none" value={cotizacion} onChange={e => setCotizacion(e.target.value)}/> */}
                </div>
                <div class="w-full hidden rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                    {/* <select
                        
                        class="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                        
                           
                            value={pago}
                            onChange={e => setPago(e.target.value)}
                    >
                        <option value="" disabled selected>Tipo De Pago</option>
                        <option value="option1"> 1</option>
                    </select> */}
                </div>
                
                
                    <div class="w-full rounded-2xl border-b-4 border-b-amber-600 bg-amber-400 py-3 font-bold text-white hover:bg-amber-500 active:translate-y-[0.125rem] active:border-b-amber-400">

                    
                    <Link href="/generar-oc" >
                        ⏩
                            <span className="">Siguiente ⏩</span>
                    </Link>
                    </div>

           
            </div>

            
            
        </div>
        </form>
        </div>

        </LayoutOrdenCompra>
    )
}