import {formatiarFecha} from "helpers/fecha"
import useCombustible from '../hooks/useCombustible';



const OrdenGeneral = ({solicitud}) => {

    const {id,nombre01,fecha,pedido} = solicitud
    const {handlesetOcpedidos, handleChangeModal} =useCombustible()
   
  return (
   
    <>
      {/* <div className='border shadow'>
      
            <div className="border p-5 space-y-2 ">
              <div className='text-center'>
                <h3 className="text-xl font-bold pb-1">Solicitud Nº {id}</h3>
                <p className="text-sm font-bold pb-3">Solicita: {nombre01}</p>
                {pedido.map(oc => (
                  <div key={oc.id}>
                    <p className="text-sm font-bold pb-3">{oc.nombre}</p>
                    <p className="text-sm font-bold pb-3">{oc.cantidad}</p>
                  </div>
                
                ))}
            </div>
            </div>  
      </div> */}
    </>
  )
}

export default OrdenGeneral