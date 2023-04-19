import {formatiarFecha} from "helpers/fecha"
import {formatoNumero} from "helpers/formato"


const ListadoProduccion = ({orden}) => {
    const {id, nombre, total, pedido, fecha, folio, descripcion} = orden

  return (

    
    
    <>
        <table className="table-auto w-full text-center bg-white text-gray-700">
            <tbody>
                {pedido.map(oc => (
                    <tr key={oc.id}>
                        <td className="border px-4 py-2">{formatiarFecha(fecha)}</td>
                        <td className="border px-4 py-2">{oc.detalle}</td>
                        <td className="border px-4 py-2">{oc.cantidad}</td>
                        <td className="border px-4 py-2">{nombre}</td>
                        <td className="border px-4 py-2">{formatoNumero(oc.espesor * oc.ancho * oc.largo * oc.piezas *oc.cantidad / 1000000 )}</td>
                    </tr>

                    

                    
                ))}
            </tbody>
        </table>

        


    

        
    </>
  )
}

export default ListadoProduccion

