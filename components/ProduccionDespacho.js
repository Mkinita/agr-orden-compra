import {formatiarFecha} from "helpers/fecha"
import {formatoNumero} from "helpers/formato"
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const ListadoProduccion = ({producciones}) => {
  const {id, volumen, fecha, nombre,ingreso,ingreso01} = producciones
  const seco = parseInt(ingreso) || 0;
  const verde = parseInt(ingreso01) || 0;
  const servicio = parseInt(volumen) || 0;
  const suma = seco + verde + servicio;

  return (

    <>
        
        <div className="grid gap-1 grid-cols-5 md:grid-cols-5 2xl:grid-cols-5 text-center uppercase font-bold text-sm">

          <div className="border">{fecha}</div>
          <div className="border hidden md:block">{ingreso}</div>
          <div className="border">{ingreso01}</div>
          <div className="border">{volumen}</div>
          <div className="border">{suma}</div>
                
        </div>
    </>
  )
}

export default ListadoProduccion
