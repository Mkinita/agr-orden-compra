import { formatiarFecha } from "helpers/fecha";
import useCombustible from '../hooks/useCombustible';
import axios from 'axios';
import { toast } from 'react-toastify';

const OrdenGeneral = ({ solicitud }) => {
  const { id, nombre01, fecha, estado } = solicitud;
  const { handlesetOcpedidos, handleChangeModal } = useCombustible();

  const visto = async () => {
    try {
      await axios.post(`/api/ordenvista/${id}`);
      toast.success('Notificando');
    } catch (error) {
      console.log('Hubo un error');
    }
  };

  const handleEstadoClick = () => {
    visto();
  };

  return (
    <>
      <div className='border rounded-lg shadow'>
        <div className="p-5 space-y-2 ">
          <div className='text-center'>
            <h3 className="text-xl font-bold pb-1">Solicitud Nº {id}</h3>
            <p className="text-sm font-bold pb-1">Fecha: {formatiarFecha(fecha)}</p>
            <p className="text-sm font-bold pb-3">Solicita: {nombre01}</p>

            <div className="grid grid-cols-1 gap-2 px-10">
              {estado ? null : (
                <button
                  type='button'
                  className='flex-1 bg-amber-400 hover:bg-amber-500 text-white mt-1 md:mt-0 py-1 px-5 font-bold ml-1 rounded-3xl'
                  onClick={handleEstadoClick}
                >
                  Visto
                </button>
              )}

              <div className="flex-1 mt-1 md:mt-0">
                <button
                  type='button'
                  className='w-full bg-amber-400 hover:bg-amber-500 text-white py-1 px-5 font-bold rounded-3xl'
                  onClick={() => {
                    handleChangeModal();
                    handlesetOcpedidos(solicitud);
                  }}
                >
                  Detalle
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdenGeneral;
