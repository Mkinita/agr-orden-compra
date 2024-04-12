import { formatiarFecha } from "helpers/fecha";

const OrdenGeneral = ({ solicitud }) => {
  const { id, nombre01, fecha, visto, compra, cotizar } = solicitud;
  

  return (
    <>
        <table className="w-full text-xs">
            <tbody>
                <tr className="bg-white border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent">
                    <td className="px-2  w-1/5 text-center">{id}</td>
                    <td className="px-2  w-1/5 text-center">{formatiarFecha(fecha)}</td>
                    <td className="px-2  w-1/5 text-center">{visto ? "✔️" : "Pendiente"}</td>
                    <td className="px-2  w-1/5 text-center">{cotizar ? "✔️" : "Pendiente"}</td>    
                    <td className="px-2  w-1/5 text-center">{compra ? "✔️" : "Pendiente"}</td>
                    
                </tr>    
            </tbody>
            
        </table>     
    </>
  );
};

export default OrdenGeneral;
