import {formatiarFecha} from "helpers/fecha"
import {formatoNumero} from "helpers/formato"


const ListadoProduccion = ({orden}) => {
    const {id, nombre, total, pedido, fecha, folio, descripcion} = orden



    // const pedidos = pedido.map((oc) => {
    //     const volumen = (oc.espesor * oc.ancho * oc.largo * oc.piezas * oc.cantidad / 1000000);
    //     const sumavolumen=(volumen)
    //     console.log(sumavolumen);
    //     return oc.id;
    //   });

    




    // function calcularVolumen(orden) {
    //     let resultados = [];
    //     for (let i = 0; i < orden.pedido.length; i++) {
    //       let producto = orden.pedido[i];
    //       let volumen = producto.espesor * producto.ancho * producto.largo * producto.cantidad*producto.piezas/ 1000000;
    //       resultados.push(volumen);
    //     }
    //     let volumenTotal = 0;
    //     for (let i = 0; i < resultados.length; i++) {
    //       volumenTotal += resultados[i];
    //     }
    //     console.log(volumenTotal)
    //   }
      
      


    //   const volumenTotal = calcularVolumen(orden);



      
    

  
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

