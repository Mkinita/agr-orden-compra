import {formatiarFecha} from "helpers/fecha"
import useCombustible from '../hooks/useCombustible';



const OrdenGeneral = ({orden}) => {

    const {id,solicita,fecha,pedido,area} = orden
    const {handlesetOrden, handleChangeModal} =useCombustible()
   
  return (
   
    <>
    <div className="">

    
      <div className='border shadow rounded-lg'>
      
            <div className="border p-5 space-y-2 ">
                <div className='text-center'>
                    <h3 className="text-xl  pb-1">Orden Nº {id}</h3>
                    <p className="text-sm  pb-2 border-b border-gray-100">Fecha: {formatiarFecha(fecha)}</p>
                    <p className="p-2"></p>
                    

<table className="table-auto w-full text-center bg-white shadow rounded-lg m-auto">
{pedido.map(o => (
            <div key={o.id}
                className=""
            >
                
                
                    <thead className="">
                        <td className="px-1 py-1 w-1/2 text-center font-bold ">Area:</td>
                        <td className="px-1 py-1 w-1/2 text-left ">{o.area}</td>
                    </thead>
                    <tr className="bg-white text-sm">
                            <td className="px-1 py-1 w-1/12 text-center font-bold">Autorizado:</td>
                            <td className="px-1 py-1 w-2/3 text-left ">{o.nombre01}</td>
                        </tr>
                    
                    <tbody>
                      </tbody>
                      </div>
        ))}
                      </table>
        

        
                      <p className="p-2"></p>
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
      </div>
    </>
  )
}

export default OrdenGeneral