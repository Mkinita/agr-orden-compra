import {formatiarFecha} from "helpers/fecha"



const OrdenGeneral = ({solicitud}) => {
    const {id,nombre01,cotizar,compra,fecha,planta} = solicitud



    
  return (
   
    <>
      <div className=''>
        <div className="border p-5 space-y-2 ">
          <div className=' border-b last-of-type:border-0 items-center'>
            <h3 className="text-xl font-bold">Solicitud Nº {id}</h3>
            <p className="text-sm font-bold">Solicita: {nombre01}</p>
            <p className="text-sm font-bold ">Cotizacion: {cotizar ? "✔️" : "Pendiente 🔒⏱"}</p>
            <p className="text-sm font-bold ">Orden De Compra: {compra ? "✔️" : "Pendiente 🔒⏱"}</p>
            <p className="text-sm font-bold ">Recibido: {planta ? "✔️" : "En Camino 🔒⏱"}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrdenGeneral