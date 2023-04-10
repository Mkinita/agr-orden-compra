import Image from "next/image"
import axios  from 'axios'
import { toast } from "react-toastify"



const Orden = ({orden}) => {
    const {id, nombre, total, pedido, fecha, folio, descripcion} = orden

    const completarPago = async () => {

        try {

           await axios.post(`/api/admin/${id}`)
            toast.success('Orden Autorizada 🔓')
        } catch (error) {
            toast.error('Hubo un error')
        }
    }


    

    
  return (
    <div className="border p-10 space-y-2">
            <h3 className="text-xl font-bold">Nº O.C: {folio}</h3>
            <p className="text-sm font-bold">Solicitante: {nombre}</p>
            <p className="text-sm font-bold">Detalle: {descripcion}</p>

            {/* <p className="text-lg font-bold">Cliente: {formatiarFecha(fecha)}</p> */}
          
    
        <div>
            {pedido.map(oc => (
                <div key={oc.id}
                className="py-3 flex border-b last-of-type:border-0 items-center"
                >
                    <div className="w-32">
                        <Image
                            width={400}
                            height={500}
                            src={`/assets/img/${oc.imagen}.jpg`}
                            alt={`imagen oc${oc.nombre}`}
                            
                        />
                    </div> 
                    <div className="p-5 space-y-2">
                        {/* <h4 className="text-4xl font-bold text-amber-500">{oc.nombre}</h4> */}
                        <p className="text-xs font-bold">{oc.nombre}</p>
                        <p className="text-xs font-bold">{oc.patente}</p>
                        <p className="text-xs font-bold">{oc.chofer}</p>
                        
                    </div>
                </div>
            ))}
        </div>
        <div className="md:flex md:items-center md:justify-between my-10">
                {/* <p className="mt-5 font-black text-4xl text-amber-500">Total a Pagar: {formatearDinero(total)}</p> */}
                
                <button
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white mt-5 md:mt-0 py-3 px-10 uppercase font-bold"
                type="button"
                onClick={completarPago}
                >
                Autorizar

                </button>


                
        </div>
    </div>
  )
}

export default Orden