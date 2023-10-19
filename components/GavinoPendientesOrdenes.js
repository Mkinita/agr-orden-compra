import { formatiarFecha } from "helpers/fecha";
import useCombustible from '../hooks/useCombustible';
import axios from 'axios';
import { toast } from 'react-toastify';
import Link from "next/link";

const OrdenGeneral = ({ solicitud }) => {
  const { id, nombre01, fecha, estado01, compra, cotizar, planta } = solicitud;
  

  return (
    <>
        <table className="w-full text-xs">
            <tbody>
                <tr className="bg-white">
                    <td className="px-2  w-1/5 text-center">{id}</td>
                    <td className="px-2  w-1/5 text-center">{estado01 ? "✔️" : "Pendiente"}</td>
                    <td className="px-2  w-1/5 text-center">
                        <Link href="/autorizar-oc" className="hover:text-amber-600">
                            <span className="">Ver</span>
                        </Link>
                    </td>    
                </tr>    
            </tbody>
            
        </table>     
    </>
  );
};

export default OrdenGeneral;
