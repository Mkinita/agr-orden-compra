import {formatiarFecha} from "helpers/fecha"
import {formatoNumero} from "helpers/formato"
import useCombustible from '../hooks/useCombustible';


const ListadoPedidosServicio = ({pedidos}) => {

    
    const 
    {
        tipo,
        cliente,
        oc,
        producto,
        solicitud,
        despacho,
    } = pedidos
    
    const {handlesetPedidos, handleChangeModal} =useCombustible()




  
  return (
    
    <>

<div className="border p-3 w-full h-full">
      
      <div className='p-5 text-center'>
        <h3 className='text-2xl font-bold'>{cliente}</h3>
        <p className='mt-1 font-black text-sm text-black'>{producto}</p>
        <p className='mt-1 font-black text-sm text-black'>{tipo}</p>
        <p className='mt-1 font-black text-sm text-black'>N° {oc}</p>

        <button
            type='button'
            className='bg-lime-400  hover:bg-lime-500 text-white w-full mt-5 p-3 uppercase font bold'
            onClick={()=> {
              handleChangeModal();
              handlesetPedidos(pedidos)
            }}
        >
            Ver Detalle
        </button>
      </div>
    </div>



    </>
  )
}

export default ListadoPedidosServicio








