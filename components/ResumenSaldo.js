import Image from "next/image"
import useCombustible from "../hooks/useCombustible"

const ResumenSaldo = ({saldo}) => {

  const {handleElimanarSolicitud, handleEditarCantidades,total } = useCombustible()

  
  return (
    <div className="shadow p-5 mb-3 flex gap-4 items-center">
        <div className="md:w-1/6">
        </div>
        <div className="md:w-4/6">
            <p className="text-sm text-gray-700 mt-2">Volumen: {saldo.espesor}</p>


        </div>

        <div>

        </div>


        
    </div>
  )
}

export default ResumenSaldo