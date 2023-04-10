import {formatiarFecha} from "helpers/fecha"
import {formatoNumero} from "helpers/formato"
import axios  from 'axios'
import { toast } from "react-toastify"
import React, { useState } from 'react';
import EditarStock from "./EditarStock";


const StockTerminado = ({orden}) => {
    const {id, nombre, total, pedido, fecha, folio, descripcion,cantidad,calidad} = orden


  return (
    
    <>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse bg-white text-gray-700">
            
            <tbody className="text-center">
              {pedido.map(oc => (
                <tr key={oc.id}>
                  <td className="border px-4 py-2">{oc.detalle}</td>
          <td className="border px-4 py-2">{oc.cantidad - cantidad}</td>
          <td className="border px-4 py-2">{nombre}</td>
          <td className="border px-4 py-2">{formatoNumero(oc.espesor * oc.ancho * oc.largo * oc.piezas *(oc.cantidad - cantidad) / 1000000 )}</td>
        </tr>
      ))}
    </tbody>
  </table>

        </div>


        

    </>
  )
}

export default StockTerminado