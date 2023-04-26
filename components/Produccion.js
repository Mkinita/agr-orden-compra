import {formatiarFecha} from "helpers/fecha"
import {formatoNumero} from "helpers/formato"
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const ListadoProduccion = ({producciones}) => {
    const {id, volumen, fecha, nombre,ingreso} = producciones

    

    

  return (

    <>
        
        <div className="grid gap-1 grid-cols-3 md:grid-cols-4 2xl:grid-cols-3 text-center uppercase font-bold text-sm">

          <div className="border">{fecha}</div>
          <div className="border hidden md:block">{ingreso}</div>
          <div className="border">{volumen}</div>
          <div className="border">{formatoNumero(volumen / ingreso * 100)}%</div>
                
        </div>
    </>
  )
}

export default ListadoProduccion
