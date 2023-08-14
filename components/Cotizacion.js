import { useRouter } from 'next/router'
import axios  from 'axios'
import { toast } from "react-toastify"
import {formatiarFecha} from "helpers/fecha"
import useCombustible from '../hooks/useCombustible';




const OrdenGeneral = ({solicitud}) => {

    const {nombre01,fecha,id,compra,planta,
        area,cotizar
        ,cantidades,detalles,
        cantidad01 ,detalle01,
        cantidad02, descripcion02,
        cantidad03, descripcion03,
        cantidad04, descripcion04} = solicitud

        const {handlesetOcpedidos, handleChangeModal} =useCombustible()

        

    const router = useRouter()

    const cambiarestado = async () => {

        try {

           await axios.post(`/api/cotizacionlista/${id}`)
            toast.success('redirigiendo...')
            setTimeout(() =>{
              router.push('/orden-compra')
          },1500)
        } catch (error) {
            toast.error('Hubo un error')
        }
    }


    
   
  return (
   
    <>
        <div class="mx-auto my-2 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <div className="p-5 space-y-2 ">
                <div className='text-center'>
                    <h3 className="text-xl font-bold pb-1">Solicitud Nº {id}</h3>
                    <p className="text-sm font-bold pb-1">Fecha: {formatiarFecha(fecha)}</p>
                    <p className="text-sm font-bold pb-3">Solicita: {nombre01}</p>
                    {/* <p className="text-sm font-bold pb-3">Área: {area}</p> */}


                    <button
                        type='button'
                        className='flex-1 bg-amber-400 hover:bg-amber-500 text-white mt-1 md:mt-0 py-1 px-5  font-bold ml-1 rounded-3xl'
                        onClick={()=> {
                        handleChangeModal();
                        handlesetOcpedidos(solicitud)
                        }}
                    >
                        Detalle
                    </button>

                    
                </div>
            
            
        </div>
        </div>
       
        
        
    </>
  )
}

export default OrdenGeneral