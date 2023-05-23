import useCombustible from "../hooks/useCombustible";
import { useRouter } from 'next/router'
import axios  from 'axios'
import { toast } from "react-toastify"

const ModalSolicitud = () => {
  const { solicitud, handleChangeModal, handleAgregarPedido, modal,setModal } = useCombustible();
  const {id,nombre01,fecha,pedido} = solicitud


  const router = useRouter()

    const cotizar = async () => {

        try {

           await axios.post(`/api/cotizarsolicitud/${id}`)
            toast.success('generando solicitud de cotizacion')
            setModal(false);
            setTimeout(() =>{
              router.push('/cotizacion')
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
            <h1 className="text-xl font-bold  text-center pb-5">Detalle</h1>

            <table className="table-auto w-full text-center bg-white text-gray-700">
                <tbody>
                    {pedido.map(oc => (
                        <tr className="bg-white border-b hover:bg-amber-300 text-sm"key={oc.id}>
                            <td className="px-6 py-4 w-1/12 text-center border border-amber-400">{oc.cantidad}</td>
                            <td className="px-6 py-4 w-2/3 text-center border border-amber-400">{oc.nombre}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            
            <div className="m-auto text-center">
                <button className="bg-amber-400 hover:bg-amber-500 px-5 py-2 mt-5 text-white font-bold uppercase rounded-xl" type="button" onClick={cotizar} >
                    Generar Cotizacion
              </button>
            </div>

        </div>
    </div>
  );
};

export default ModalSolicitud;