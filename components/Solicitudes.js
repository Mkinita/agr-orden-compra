import {formatiarFecha} from "helpers/fecha"
import useCombustible from '../hooks/useCombustible';



const OrdenGeneral = ({solicitud}) => {

    const {id,nombre01,fecha,pedido,area} = solicitud
    const {handlesetOcpedidos, handleChangeModal} =useCombustible()
   
  return (
   
    <>
      <div className='border rounded-lg shadow'>
      
            <div className="p-5 space-y-2 ">
                <div className='text-center'>
                    <h3 className="text-xl font-bold pb-1">Solicitud Nº {id}</h3>
                    <p className="text-sm font-bold pb-1">Fecha: {formatiarFecha(fecha)}</p>
                    <p className="text-sm font-bold pb-3">Solicita: {nombre01}</p>
                    {/* <p className="text-sm font-bold pb-3">Área: {area}</p> */}


                    <button
                        type='button'
                        className='flex-1 bg-amber-400 hover:bg-amber-500 text-white mt-1 md:mt-0 py-1 px-5  font-bold ml-1 rounded-3xl'
                        onClick={()=> {
                        handleChangeModal();
                        handlesetOcpedidos(solicitud)
                        }}
                    >
                        Detalle
                    </button>

                    
                </div>
            </div>  
      </div>
    </>
  )
}

export default OrdenGeneral