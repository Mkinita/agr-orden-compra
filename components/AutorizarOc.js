import {formatiarFecha} from "helpers/fecha"
import useCombustible from '../hooks/useCombustible';



const OrdenGeneral = ({orden}) => {

    const {id,solicita,fecha,pedido, pago} = orden
    const {handlesetOrden, handleChangeModal} =useCombustible()
   
  return (
   
    <>
      <div className='border shadow'>
      
            <div className="border p-5 space-y-2 ">
                <div className='text-center'>
                    <h3 className="text-xl font-bold pb-1">Orden Nº {id}</h3>
                    <p className="text-sm font-bold pb-1">Fecha: {formatiarFecha(fecha)}</p>
                    {pedido.map(o =>
                        <div key={o.id} className="text-sm font-bold pb-3">Solicitud Nº{o.id}</div>
                    )}


                    <button
                        type='button'
                        className='flex-1 bg-amber-400 hover:bg-amber-500 text-white mt-1 md:mt-0 py-1 px-5  font-bold ml-1 rounded-3xl'
                        onClick={()=> {
                        handleChangeModal();
                        handlesetOrden(orden)
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