import Image from "next/image"
import axios  from 'axios'
import { toast } from "react-toastify"
import {formatiarFecha} from "helpers/fecha"
import { useRouter } from 'next/router'




const OrdenAutorizada = ({orden}) => {
    const {id, nombre, total, pedido, fecha, folio, descripcion, senores,direccion,rut,fono,comuna} = orden



    const formatoNumero = (num) => {
      return num.toString().slice(-4);
    }

    const router = useRouter()

    const completarOc = async () => {

      try {

         await axios.post(`/api/ocfinalizada/${id}`)
          toast.success('🏠')
          setTimeout(() =>{
            router.push('/')
        },1000)
      } catch (error) {
          toast.error('Hubo un error')
      }
  }


    

    
  return (

    <>


        

    
      <div role="status" class="space-y-8 md:space-y-0 md:space-x-8 md:flex md:items-center p-2 m-5">
            <div class="flex items-center justify-center w-full h-48">
             <Image width={280} height={100} src="/assets/img/Control.OC.png" alt="logo" className=""/>
            </div>
            <div class="w-full">
             <div className="text-center"><h3 className="text-xl font-bold inline-block align-baseline">Produccion</h3></div>
             <div className="text-center"><h3 className="text-xl font-bold inline-block align-middle">Nº: {formatoNumero(folio)}</h3></div>
            </div>
      </div>


        <div><p className="text-sm font-bold text-right">Fecha: {formatiarFecha(fecha)}</p></div>

            <div className=" border border-slate-800 rounded-xl p-2">
                <div class="flex ">
                    <div class="flex-1">
                    <p className="">SEÑO (ES): {senores}</p>
                </div>

  

                <div class="flex-1">
                <p className="">RUT: {rut}</p>
                </div>
            </div>


            <div class="flex ">
                <div class="flex-1">
                    <p className="">DIRECCION: {direccion}</p>
                </div>

  

                <div class="flex-1">
                  <p className="">FONO: {fono}</p>
                </div>
            </div>


            <div class="flex ">
              <div class="flex-1">
                <p className="">CIUDAD:</p>
              </div>

              

              <div class="flex-1">
                <p className="">COMUNA: {comuna}</p>
              </div>
            </div>



            <div class="flex ">
                <div class="flex-1">
                  <p className="">Segun Cotizacion N°:</p>
              </div>

              

              <div class="flex-1">
                  <p className="">Solicitado por : {nombre}</p>
              </div>
                  </div>
            </div>




    <p className="text-center m-2">Agradecermos a Ud(s) despechar por cuenta de ARIDOS Y CONSTRUCCIONES Control LIMITADA o siguiente:</p>

     


    
    <div className="border p-2 space-y-2 border-slate-800 rounded-xl m-2">
          
    
        <div>
            {pedido.map(oc => (
                <div key={oc.id}
                className=""
                >


                        <div role="status" class="space-y-2.5">
    
              <div class="flex items-center w-full space-x-2 text-center">
                  <div class="h-1.5  w-full">Cantidad</div>
                  <div class="h-1.5  w-full">Codigo</div>
                  <div class="h-5.0  w-full">DETALLE</div>
                  <div class="h-2.0 w-full">Valor</div>
              </div>

              <div class="flex items-center w-full space-x-2 text-center">
                  <div class="h-1.5  w-full">{oc.cantidad}</div>
                  <div class="h-1.5  w-full">{oc.cantidad}</div>
                  <div class="h-5.0  w-full">{descripcion} {oc.nombre} {oc.patente}</div>
                  <div class="h-2.0  w-full">{oc.cantidad}</div>
              </div>

              <div class="flex items-center w-full space-x-2 text-center">
                  <div class="h-1.5  w-full"></div>
                  <div class="h-1.5  w-full"></div>
                  <div class="h-5.0  w-full"></div>
                  <div class="h-2.0  w-full"></div>
              </div>
          </div>
                        
                    </div>
            ))}
        </div>
        <div className="md:flex md:items-center md:justify-between my-5">


                
              </div>
          </div>

          <div className="text-center p-5">

          <div class="m-auto">
             <Image width={100} height={50} src="/assets/img/firma.png" alt="logo" className=" m-auto"/>
            </div>

          <p>Firma Solicitante</p>


    </div>

    
    <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white mt-2 md:mt-0 py-3 px-5 uppercase font-bold rounded-xl mx-28"
                type="button"
                onClick={completarOc}
                >
                Generar Produccion

                </button>

    </>
  )
}

export default OrdenAutorizada