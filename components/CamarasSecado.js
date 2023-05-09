import {formatoNumero} from "helpers/formato"


const ListadoProduccion = ({seco}) => {
  const {id, fecha,espesor,ancho,largo,piezas,calidad,cantidad} = seco

    

    

  return (

    <>     
         
      <table className="table-auto w-full text-center bg-white text-gray-700">
        <tbody>
          <tr>
          <td className="py-1 text-center uppercase font-bold text-lg">{fecha}</td>
            <td className="py-1 text-center uppercase font-bold text-lg">{espesor} x {largo}</td>
            <td className=" py-1 text-center uppercase font-bold text-lg">{cantidad}</td>
            <td className=" py-1 text-center uppercase font-bold text-lg">{formatoNumero(espesor * ancho * largo * piezas *calidad / 1000000 )}</td>
          </tr>
        </tbody>
      </table>

    </>
  )
}

export default ListadoProduccion


 