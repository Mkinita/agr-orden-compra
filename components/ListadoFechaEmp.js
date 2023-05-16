import {formatiarFecha} from "helpers/fecha"
import {formatoNumero} from "helpers/formato"


const ListadoProduccion = ({emp}) => {
    const {id, nombre, total, pedido, fecha, folio, descripcion,espesor,ancho,largo,cantidad,calidad,piezas} = emp

    

    

  return (

    <>
        
        <table className="table-auto w-full text-center bg-white text-gray-700">
            <tbody>
                
                    <tr className="bg-white border-b hover:bg-amber-300 text-sm">
                        <td className="px-6 py-4 w-1/5 text-center border border-amber-400">{formatiarFecha(fecha)}</td>
                        <td className="px-6 py-4 w-1/5 text-center border border-amber-400">{espesor}x{largo}</td>
                        <td className="px-6 py-4 w-1/5 text-center border border-amber-400">{cantidad}</td>
                        <td className="px-6 py-4 w-1/5 text-center border border-amber-400">{calidad}</td>
                        <td className="px-6 py-4 w-1/5 text-center border border-amber-400">{formatoNumero(espesor * ancho * largo * piezas *cantidad / 1000000 )}</td>
                    </tr>
                
            </tbody>
        </table>
    </>
  )
}

export default ListadoProduccion