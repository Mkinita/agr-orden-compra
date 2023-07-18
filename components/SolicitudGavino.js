import {formatiarFecha} from "helpers/fecha"



const OrdenGeneral = ({solicitud}) => {
    const {id,nombre01,cotizar,compra,fecha,planta,pedido} = solicitud



    
  return (
   
    <>
      {/* <div className=''>
        <div className="border p-5 space-y-2 ">
          <div className=' border-b last-of-type:border-0 items-center'>
            <h3 className="text-xl font-bold">Solicitud Nº {id}</h3>
            <p className="text-sm font-bold">Solicita: {nombre01}</p>
            {pedido.map(oc => (
                        <tr className="bg-white border-b text-sm"key={oc.id}>
                            <td className="px-2 py-1 w-1/12 text-center border border-black">{oc.nombre}</td>
                        </tr>
                    ))}
            <p className="text-sm font-bold ">Cotizacion: {cotizar ? "✔️" : "Pendiente 🔒⏱"}</p>
            <p className="text-sm font-bold ">Orden De Compra: {compra ? "✔️" : "Pendiente 🔒⏱"}</p>
            <p className="text-sm font-bold ">Recibido: {planta ? "✔️" : "En Camino 🔒⏱"}</p>
          </div>
        </div>
      </div> */}

<div class="col-span-12 mt-5">
            <div class="grid gap-2 grid-cols-1 lg:grid-cols-1">
                <div class="bg-white p-4 shadow-lg rounded-lg">
                    <h1 class="font-bold text-base">Solicitud Nº {id}</h1>
                    <div class="mt-4">
                        <div class="flex flex-col">
                            <div class="-my-2 overflow-x-auto">
                                <div class="py-2 align-middle inline-block min-w-full">
                                    <div
                                        class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white">
                                        <table class="min-w-full divide-y divide-gray-200 tex">
                                            <thead>
                                                <tr>
                                                    <th
                                                        class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                        <div class="flex cursor-pointer">
                                                            <span class="mr-2">Solicita</span>
                                                        </div>
                                                    </th>
                                                <th
                                                                            class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                            <div class="flex cursor-pointer">
                                                                                <span class="mr-2">Pedido</span>
                                                                            </div>
                                                                        </th>
                                                                        <th
                                                                            class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                            <div class="flex cursor-pointer">
                                                                                <span class="mr-2">Cotizacion</span>
                                                                            </div>
                                                                        </th>
                                                                        <th
                                                                            class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                            <div class="flex cursor-pointer">
                                                                                <span class="mr-2">Orden De Compra</span>
                                                                            </div>
                                                                        </th>
                                                                        <th
                                                                            class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                            <div class="flex cursor-pointer">
                                                                                <span class="mr-2">Recibido</span>
                                                                            </div>
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody class="bg-white divide-y divide-gray-200">
                                                                {pedido.map(oc => (
                                                                    <tr key={oc.id}>
                                                                        <td
                                                                            class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                            <p>{nombre01}</p>
                                                                        </td>
                                                                        <td
                                                                            class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                            <p>{oc.nombre}</p>
                                                                        </td>
                                                                        <td
                                                                            class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                            <p>{cotizar ? "✔️" : "Pendiente 🔒"}</p>
                                                                        </td>

                                                                        <td
                                                                            class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                            <p>{compra ? "✔️" : "Pendiente 🔒"}</p>
                                                                        </td>

                                                                        <td
                                                                            class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                            <p>{planta ? "✔️" : "En Espera 🔒"}</p>
                                                                        </td>
                                                                        
                                                                        
                                                                    </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    </>
  )
}

export default OrdenGeneral