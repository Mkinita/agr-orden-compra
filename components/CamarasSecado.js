import {formatoNumero} from "helpers/formato"
import { format, parseISO } from 'date-fns';
import axios from 'axios';
import { useRouter } from 'next/router'
import { toast } from "react-toastify"


const ListadoProduccion = ({seco}) => {
  const {id, fecha,espesor,ancho,largo,piezas,calidad,cantidad} = seco

  const fechaS = typeof fecha === 'string' ? parseISO(fecha) : fecha;
  const fechaFormateada = format(fechaS, 'MMMM dd');


  const router = useRouter()

    const secadolisto = async () => {

      try {

         await axios.post(`/api/secado/${id}`)
          toast.success('🏠')
          setTimeout(() =>{
            router.push('/')
        },1000)
      } catch (error) {
        console.log(error)
    }
  }

    
  

  const espesor01 = espesor;
  const ancho01 = ancho;
  const largo01 = largo;
  const piezas01 = piezas;
  const cantidad01 = cantidad;
  const volumen = (espesor01) * (ancho01) * (largo01) * (piezas01) * (cantidad01) / 1000000
  const resultado = volumen === 0 ? '' : volumen
  
    

  return (

    <>     
      
      <table className="table-auto w-full text-center bg-white text-gray-700 text-xs">
        <tbody>
          <tr>
            <td className="py-1 text-center uppercase font-bold  w-1/5">{fechaFormateada}</td>
            <td className="py-1 text-center uppercase font-bold  w-1/5">{espesor} x {largo}</td>
            <td className=" py-1 text-center uppercase font-bold  w-1/5">{cantidad}</td>
            <td className=" py-1 text-center uppercase font-bold  w-1/5">{calidad}</td>
            <td className=" py-1 text-center uppercase font-bold  w-1/5">{formatoNumero(resultado)}</td>
          </tr>
          <tr className="">
            <td colspan="5" className="py-2"><button className="px-2 py-2 border rounded-xl border-solid border-lime-500 hover:scale-110 text-black" type="button" onClick={secadolisto}>✔️Finalizar Proceso✔️</button></td>
          </tr>
        </tbody>
      </table>

      
    </>
  )
}

export default ListadoProduccion


 