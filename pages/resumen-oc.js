import LayoutOrdenCompra from '../layout/LayoutOrdenCompra'
import useCombustible from '../hooks/useCombustible'
import Head from 'next/head'
import DetalleResumen from "../components/DetalleResumen"
import ResumenSolicitusGeneral from "../components/ResumenSolicitusGeneral"
import Link from 'next/link'





export default function Home() {

    
    const {solicitud,pedido01,pedido} = useCombustible()

    const {id} = solicitud



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


                <div className="text-center font-extrabold p-5 py-10 hover:scale-95 shadow mb-3 rounded-lg">
                    <Link href="/generar-oc" className="border border-r-slate-200 p-2">
                        ⏩
                            <span className="ml-3 ">Siguiente ⏩</span>
                    </Link>
                </div>      
            </div>
                        
            <h2 className="text-xl font-bold py-4 pb-2 text-center">Solicitud nº{id}</h2>
            {pedido.length === 0 ? (
                <p className="text-center text-2xl"></p>
                ) : (
                    pedido.map(solicitud=>(
                    <DetalleResumen key={solicitud.id} solicitud={solicitud}/>      
                ))
            )}

        </LayoutOrdenCompra>
    )
}