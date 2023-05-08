import { format, parseISO } from 'date-fns';

const ListadoProduccion = ({producciones}) => {
  const {id, volumen, fecha, nombre,ingreso,ingreso01} = producciones
  const seco = parseInt(ingreso) || 0;
  const verde = parseInt(ingreso01) || 0;
  const servicio = parseInt(volumen) || 0;
  const suma = seco + verde + servicio;

  const fechaS = typeof fecha === 'string' ? parseISO(fecha) : fecha;
  const fechaFormateada = format(fechaS, 'MMMM dd');

  return (

    <>
        
        <div className="grid gap-1 grid-cols-5 md:grid-cols-5 2xl:grid-cols-5 text-center uppercase font-bold text-sm">

          <div className="border">{fechaFormateada}</div>
          <div className="border">{ingreso}</div>
          <div className="border">{ingreso01}</div>
          <div className="border">{volumen}</div>
          <div className="border">{suma}</div>
                
        </div>
    </>
  )
}

export default ListadoProduccion
