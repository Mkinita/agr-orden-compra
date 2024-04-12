import {formatiarFecha} from "helpers/fecha"
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';



const OrdenGeneral = ({solicitud}) => {
    const {id,nombre01,cotizar,compra,fecha,planta,estado,visto,
        area
        ,cantidades,detalles,
        cantidad01 ,detalle01,
        cantidad02, descripcion02,
        cantidad03, descripcion03,
        cantidad04, descripcion04
    
    } = solicitud

    const router = useRouter();

    const eliminarRegistro = async () => {
      try {
        const response = await fetch(`/api/eliminarsolicitud/${id}`, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          toast.success(`Solicitud ${id} eliminada`);
          setTimeout(() => {
            router.reload();
          }, 2000);
        } else {
          throw new Error('Error al eliminar la Solicitud');
        }
      } catch (error) {
        console.log(error);
      }
    };



    
  return (
   
    <>
    


    <div class="max-w-lg mx-auto my-2 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <div class="flex flex-row justify-between items-center">
            <div>
                <h1 class="text-xl font-medium">Nº {id}</h1>
            </div>
            <div class="inline-flex space-x-2 items-center">
                <a href="#" class="p-2 border border-slate-200 rounded-md inline-flex space-x-1 items-center hover:bg-slate-200">
                <p class="text-xs text-slate-500 text-center">{nombre01} </p>                         
                </a>
                <a href="#" class="p-2 border border-slate-200 rounded-md inline-flex space-x-1 items-center hover:bg-slate-200">
                <p class="text-xs text-slate-500 text-center">{formatiarFecha(fecha)} </p>                 
                </a>
                <button
                    type="button"
                    className="hover:scale-110 bg-red-300 rounded-full p-1"
                    onClick={eliminarRegistro}
                >
                    🗑️
                </button>
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
        <table className="w-full text-xs">
        <tbody>
                        <tr className="font-bold">
                            <td className="px-2 py-4 pb-1 w-1/3 text-center">Vista</td>
                            <td className="px-2 py-4 pb-1 w-1/3 text-center">Cotizacion</td>
                            <td className="px-2 py-4 pb-1 w-1/3 text-center">O.C.</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="px-2 py-2 w-1/3 text-center">{visto ? "✔️" : "Pendiente 🔒"}</td>
                            <td className="px-2 py-2 w-1/3 text-center">{cotizar ? "✔️" : "Pendiente 🔒"}</td>    
                            <td className="px-2 py-2 w-1/3 text-center">{compra ? "✔️" : "Pendiente 🔒"}</td>
                        </tr>    
            </tbody>
        </table>      
    </div>
    </>
  )
}

export default OrdenGeneral