import {formatiarFecha} from "helpers/fecha"



const OrdenGeneral = ({solicitud}) => {
    const {id,fecha,nombre01,cotizar,compra} = solicitud



    
  return (
   
    <>
        {/* <div className='grid gap-2 grid-cols-2 md:grid-cols-2 2xl:grid-cols-2 border border-amber-400'>
            
            <div className='px-6 pb-2'>
                <h3 className="text-xl font-bold text-center pb-2">Solicitid</h3>
                <div className='grid gap-2 grid-cols-2 md:grid-cols-2 2xl:grid-cols-2'>
                <p className="text-sm font-bold">Nº Solicitud: {id}</p>
                <p className="text-sm font-bold">Fecha Solicitud: {formatiarFecha(fecha)}</p>
                </div>
                
                
            </div>

            <div className='px-6 pb-2'>
                <h3 className="text-xl font-bold text-center pb-2">Detalle</h3>
                
            </div>    
        </div> */}
    </>
  )
}

export default OrdenGeneral