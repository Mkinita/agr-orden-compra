import { formatiarFecha } from "helpers/fecha";
import useCombustible from '../hooks/useCombustible';
import axios from 'axios';
import { toast } from 'react-toastify';
import Link from "next/link";

const OrdenGeneral = ({ solicitud }) => {
    const { id, nombre01, fecha, visto, compra, cotizar } = solicitud;
  
  // Verifica si todos los estados están en true
  const todosEstadosTrue = cotizar && compra;

  // Si todos los estados están en true, no renderiza nada
  if (todosEstadosTrue) {
    return null;
  }

  return (
    <>
        <table className="w-full text-xs">
            <tbody>
                <tr className="bg-white border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent">
                    <td className="px-2  w-1/3 text-center">{id}</td>
                    <td className="px-2  w-1/3 text-center">{cotizar ? "✔️" : "Pendiente"}</td>    
                    <td className="px-2  w-1/3 text-center">{compra ? "✔️" : "Pendiente"}</td> 
                </tr>    
            </tbody>
            
        </table>     
    </>
  );
};

export default OrdenGeneral;
