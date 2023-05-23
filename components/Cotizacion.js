import Image from "next/image";
import { useRouter } from 'next/router'
import axios  from 'axios'
import { toast } from "react-toastify"



const OrdenGeneral = ({solicitud}) => {

    const {id,nombre01,fecha,pedido} = solicitud

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
        <div className='border shadow'>
      
            <div className="border p-5 space-y-2">
                <div className="grid gap-4 grid-cols-2">
                    <div className="px-1"><Image width={280} height={100} src="/assets/img/AGRF.png" alt="logo" className=""/></div>
                    <div className="text-center"><h1 className="text-2xl font-black py-16 pb-0 px-4">Solicitud De Cotizacion</h1>
                        <p className='py-2'>Fecha: {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'numeric', year: 'numeric' })}</p>
                    </div>
                </div>
                <div className='text-center'>
                    <table className="table-auto w-full text-center bg-white text-gray-700">
                        <thead className="text-center font-bold text-black">
                            <th>Cantidad</th>
                            <th>Detalle</th>
                            <th>Valor</th>
                        </thead>
                        <tbody>
                            {pedido.map(oc => (
                                <tr className="bg-white border-b hover:bg-amber-300 text-sm"key={oc.id}>
                                    <td className="px-6 py-4 w-1/12 text-center border border-amber-400">{oc.cantidad}</td>
                                    <td className="px-6 py-4 w-2/3 text-center border border-amber-400">{oc.nombre}</td>
                                    <td className="px-6 py-4 w-1/6 text-center border border-amber-400"></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>  
            <div className="m-auto text-center pb-2">
                <button className="bg-amber-400 hover:bg-amber-500 px-5 py-2 mt-5 text-white font-bold uppercase rounded-xl" type="button" onClick={cambiarestado} >
                    ✔️
              </button>
            </div>
        </div>
    </>
  )
}

export default OrdenGeneral