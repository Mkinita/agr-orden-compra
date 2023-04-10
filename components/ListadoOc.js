import {formatiarFecha} from "helpers/fecha"


const ListadoOc = ({orden}) => {
    const {id, nombre, total, pedido, fecha, folio, descripcion} = orden



    const formatoNumero = (num) => {
        return num.toString().slice(-4);
      }
    //   const formattedNumber = folio;


    

    
  return (
    
    <>
        <table className="table-auto w-full text-center bg-white text-gray-700">
            <tbody>
                {pedido.map(oc => (
                    <tr key={oc.id}>
                        <td className="border px-4 py-2">{formatoNumero(folio)}</td>
                        <td className="border px-4 py-2">{formatiarFecha(fecha)}</td>
                        <td className="border px-4 py-2">{nombre}</td>
                        <td className="border px-4 py-2">{descripcion}</td>
                        <td className="border px-4 py-2">{oc.patente}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
  )
}

export default ListadoOc

