import {formatiarFecha} from "helpers/fecha"
import Link from "next/link"
import { useRouter } from 'next/router'
import axios  from 'axios'
import { toast } from "react-toastify"



const ListadoPdfOcGeneral = ({orden}) => {
    const {id,pedido01, fecha,numerosoli,solicita} = orden



    const router = useRouter()

    const cambiarestado = async () => {

        try {

           await axios.post(`/api/ordenenplanta/${numerosoli}`)
            toast.success(`🔔 Notificando a ${solicita}`)
            setTimeout(() =>{
              router.push('/entrega-correcta')
          },2500)
        } catch (error) {
            toast.error('Hubo un error')
        }
    }



    const cambiarestadoorden = async () => {

        try {

           await axios.post(`/api/ordenrecepcionada/${id}`)
        } catch (error) {
            console.log('Hubo un error')
        }
    }



    const handleEstadoClick = () => {
        cambiarestado();
        cambiarestadoorden();
    }



    

  return (
    
    <>
        <div className="border p-1 w-full h-full rounded-3xl text-center ">
            <div className="py-1 border-b last-of-type:border-0">
                <h1 className="text-sm font-bold pb-1">Orden De Compra</h1>
                <h1 className="text-sm font-bold pb-1">Nº: {id}</h1>
                <p className="text-sm">{solicita}</p>
                <div className="grid gap-2 grid-cols-2 px-14 py-1">
                    <p className="text-sm py-1">PDF:</p>
                    <Link href={`/ordenes/${id}`} className="justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-file-pdf" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" id="mainIconPathAttribute" fill="#ff0000"></path> <path d="M4.603 12.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.701 19.701 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.187-.012.395-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.065.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.716 5.716 0 0 1-.911-.95 11.642 11.642 0 0 0-1.997.406 11.311 11.311 0 0 1-1.021 1.51c-.29.35-.608.655-.926.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.27.27 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.647 12.647 0 0 1 1.01-.193 11.666 11.666 0 0 1-.51-.858 20.741 20.741 0 0 1-.5 1.05zm2.446.45c.15.162.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.881 3.881 0 0 0-.612-.053zM8.078 5.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z" id="mainIconPathAttribute" fill="#ff0000"></path> </svg>
                    </Link>
                    
                </div>

                <div className="m-auto text-center pb-1">
                <button className="bg-amber-400 hover:bg-amber-500 px-1 py-2 mt-5 text-white font-bold uppercase rounded-xl hover:scale-110" type="button" onClick={handleEstadoClick}>
                    🔔 En Planta 🔔
                </button>
                </div>
            </div>    
        </div>
        
    </>
  )
}

export default ListadoPdfOcGeneral