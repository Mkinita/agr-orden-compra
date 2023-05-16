import {formatiarFecha} from "helpers/fecha"
import {formatoNumero} from "helpers/formato"


const ListadoSaldosFecha = ({saldo}) => {
    
    const {fecha,espesor,ancho,largo,piezas,calidad} = saldo

  return (
    
    <>
        <table className="table-auto w-full text-center bg-white text-gray-700">
            <tbody>

                    <tr className="bg-white border-b hover:bg-amber-300 text-sm">
                        <td className="px-6 py-4 w-1/5 text-center border border-amber-400">{formatiarFecha(fecha)}</td>
                        <td className="px-6 py-4 w-1/5 text-center border border-amber-400">{espesor}x{ancho}x{largo}</td>
                        <td className="px-6 py-4 w-1/5 text-center border border-amber-400">1</td>
                        <td className="px-6 py-4 w-1/5 text-center border border-amber-400">{calidad}</td>
                        <td className="px-6 py-4 w-1/5 text-center border border-amber-400">{formatoNumero(espesor * ancho * largo * piezas *1 / 1000000 )}</td>
                    </tr>

            </tbody>
        </table>
    </>
  )
}

export default ListadoSaldosFecha