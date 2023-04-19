import {formatiarFecha} from "helpers/fecha"
import {formatoNumero} from "helpers/formato"


const ListadoSaldosFecha = ({saldo}) => {
    
    const {fecha,espesor,ancho,largo,piezas,calidad} = saldo

  return (
    
    <>
        <table className="table-auto w-full text-center bg-white text-gray-700">
            <tbody>

                    <tr>
                        <td className="border px-4 py-2">{formatiarFecha(fecha)}</td>
                        <td className="border px-4 py-2">{espesor}x{ancho}x{largo}</td>
                        <td className="border px-4 py-2">1</td>
                        <td className="border px-4 py-2">{calidad}</td>
                        <td className="border px-4 py-2">{formatoNumero(espesor * ancho * largo * piezas *1 / 1000000 )}</td>
                    </tr>

            </tbody>
        </table>
    </>
  )
}

export default ListadoSaldosFecha