import {formatiarFecha} from "helpers/fecha"
import {formatoNumero} from "helpers/formato"
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const ListadoProduccion = ({emp}) => {
    const {id, nombre, total, pedido, fecha, folio, descripcion,espesor,ancho,largo,cantidad,calidad,piezas} = emp

    

    

  return (

    <>
        
        <table className="table-auto w-full text-center bg-white text-gray-700">
            <tbody>
                
                    <tr>
                        <td className="border px-4 py-2">{formatiarFecha(fecha)}</td>
                        <td className="border px-4 py-2">{espesor}x{largo}</td>
                        <td className="border px-4 py-2">{cantidad}</td>
                        <td className="border px-4 py-2">{calidad}</td>
                        <td className="border px-4 py-2">{formatoNumero(espesor * ancho * largo * piezas *cantidad / 1000000 )}</td>
                    </tr>
                
            </tbody>
        </table>
    </>
  )
}

export default ListadoProduccion