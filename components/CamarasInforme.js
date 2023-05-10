import {formatoNumero} from "helpers/formato"
import { format, parseISO } from 'date-fns';



const ListadoProduccion = ({seco}) => {
  const {id, fecha,espesor,ancho,largo,piezas,calidad,cantidad} = seco

  const fechaS = typeof fecha === 'string' ? parseISO(fecha) : fecha;
  const fechaFormateada = format(fechaS, 'MMMM dd');


 

    
  

  const espesor01 = espesor;
  const ancho01 = ancho;
  const largo01 = largo;
  const piezas01 = piezas;
  const cantidad01 = cantidad;
  const volumen = (espesor01) * (ancho01) * (largo01) * (piezas01) * (cantidad01) / 1000000
  const resultado = volumen === 0 ? '' : volumen
  
    

  return (

    <>     
        <div className='grid gap-2 grid-cols-1 md:grid-cols-1 2xl:grid-cols-1'>  
            <div className="">
                <div className='grid gap-2 grid-cols-5 md:grid-cols-5 2xl:grid-cols-5 py-2'>
                    <p className="text-center uppercase font-bold text-xs">{fechaFormateada}</p>
                    <p className="text-center uppercase font-bold text-xs">{espesor} x {largo}</p>
                    <p className="text-center uppercase font-bold text-xs">{cantidad}</p>
                    <p className="text-center uppercase font-bold text-xs">{calidad}</p>
                    <p className="text-center uppercase font-bold text-xs">{formatoNumero(resultado)}</p>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default ListadoProduccion

