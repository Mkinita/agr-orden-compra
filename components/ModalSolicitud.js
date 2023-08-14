import useCombustible from "../hooks/useCombustible";
import { useRouter } from 'next/router'
import axios  from 'axios'
import { toast } from "react-toastify"
import {formatiarFecha} from "helpers/fecha"

const ModalSolicitud = () => {
  const { solicitud, handleChangeModal, handleAgregarPedido, modal,setModal, } = useCombustible();
  const {nombre01,fecha,id,compra,planta,
    area,cotizar
    ,cantidades,detalles,
    cantidad01 ,detalle01,
    cantidad02, descripcion02,
    cantidad03, descripcion03,
    cantidad04, descripcion04} = solicitud


  const router = useRouter()

    const cotizarsolicitud = async () => {

        try {

           await axios.post(`/api/cotizarsolicitud/${id}`)
            toast.success('generando solicitud de cotizacion')
            setModal(false);
            setTimeout(() =>{
              router.push('/continuar')
          },1500)
        } catch (error) {
            toast.error('Hubo un error')
        }
    }

  

  return (
    <div className="">

        <div className="">
            <div className="flex justify-end pb-5">
            <button onClick={handleChangeModal}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
                </svg>
            </button>
            </div>
            

            <div class="mx-auto my-2 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <div class="flex flex-row justify-between items-center">
            <div>
                <h1 class="text-xl font-medium">Solicitud nº {id}</h1>
                <p class="text-xs text-slate-500 py-1">{area} </p> 
            </div>
            <div class="inline-flex space-x-2 items-center">
                <div  class="p-2 border border-slate-200 rounded-md inline-flex space-x-1 items-center hover:bg-slate-200">
                <p class="text-xs text-slate-500 text-center">{nombre01} </p>                         
                </div>
                <div  class="p-2 border border-slate-200 rounded-md inline-flex space-x-1 items-center hover:bg-slate-200">
                <p class="text-xs text-slate-500 text-center">{formatiarFecha(fecha)} </p>                 
                </div>
            </div>
        </div>
        

        <div id="tasks" class="my-5">
            <div id="task" class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent">
                <div class="inline-flex items-center space-x-6">
                    <div>
                        <div className="text-slate-500">{cantidades}</div>                         
                    </div>
                    <div class="text-slate-500">{detalles}</div>
                </div>
                
                 
            </div>
            <div id="task" class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent">
                <div class="inline-flex items-center space-x-2">
                    <div>
                        <div className="text-slate-500">{cantidad01}</div>                         
                    </div>
                    <div class="text-slate-500">{detalle01}</div>
                </div>
                
                 
            </div>
            <div id="task" class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent">
                <div class="inline-flex items-center space-x-2">
                    <div>
                        <div className="text-slate-500">{cantidad02}</div>                         
                    </div>
                    <div class="text-slate-500">{descripcion02}</div>
                </div>
                
                 
            </div>
            <div id="task" class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent">
                <div class="inline-flex items-center space-x-2">
                    <div>
                        <div className="text-slate-500">{cantidad03}</div>                         
                    </div>
                    <div class="text-slate-500">{descripcion03}</div>
                </div>
                
                 
            </div>
            <div id="task" class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent">
                <div class="inline-flex items-center space-x-2">
                    <div>
                        <div className="text-slate-500">{cantidad04}</div>                         
                    </div>
                    <div class="text-slate-500">{descripcion04}</div>
                </div>
                
                 
            </div>
            
            
        </div>

        <div class="flex flex-row items-center justify-center">
            <div class="inline-flex space-x-2 items-center justify-center">
                <button href="#" class="p-2 border border-slate-200 rounded-md inline-flex space-x-1 items-center hover:bg-slate-200" type="button" onClick={cotizarsolicitud}>
                <p class="text-xs text-slate-500 text-center hover:scale-110">Cotizacion Realizada</p>                         
                </button>
                
            </div>
        </div>
          
    </div>

            
            

        </div>
    </div>
  );
};

export default ModalSolicitud;