import Image from "next/image"
import axios  from 'axios'
import { toast } from "react-toastify"
import {formatiarFecha} from "helpers/fecha"
import {formatearDinero} from "helpers/index"
import { useRouter } from 'next/router'
import {formatoNumero} from "helpers/formato"




const OrdenCompraAutorizada = ({orden}) => {
    const {id,fecha,pedido01,atencion,cotizacion,
      valor01,cantidad01,detalle01,
      valor02,cantidad02,descripcion02,
      valor03,cantidad03,descripcion03,
      valor04,cantidad04,descripcion04,
      valor05,cantidad05,descripcion05,
      valor06,cantidad06,descripcion06,
      valor07,cantidad07,descripcion07,
      valor08,cantidad08,descripcion08,
      valor09,cantidad09,descripcion09,
      cantidades,detalles,valores
    
    }  
    = orden



    const formatoNumero = (num) => {
      return num.toString().slice(-4);
    }

    const router = useRouter()

    const completarOc = async () => {

      try {

         await axios.post(`/api/ocgeneraladmin/${id}`)
          toast.success('🏠')
          setTimeout(() =>{
            router.push('/autorizarordengeneraladminprueba')
        },1000)
      } catch (error) {
          toast.error('Hubo un error')
      }
  }

  

  

  const cantidad1 =cantidades;
  const valor1 = valores;
  const cantidadxvalor = (cantidad1) * (valor1)
  const resultado = cantidadxvalor === 0 ? '-' : cantidadxvalor;

  const cantidad0 = cantidad01;
  const valor0 = valor01;
  const cantidadxvalor01 = (cantidad0) * (valor0);
  const resultado01 = cantidadxvalor01 === 0 ? '-' : cantidadxvalor01;
  

  
  
  const cantidad2 = cantidad02;
  const valor2 = valor02;
  const cantidadxvalor02 = (cantidad2) * (valor2);
  const resultado02 = cantidadxvalor02 === 0 ? '-' : cantidadxvalor02;


  const cantidad3 = cantidad03;
  const valor3 =  valor03;
  const cantidadxvalor03 = (cantidad3) * (valor3);
  const resultado03 = cantidadxvalor03 === 0 ? '-' : cantidadxvalor03;


  const cantidad4 = cantidad04;
  const valor4 = valor04;
  const cantidadxvalor04 = (cantidad4) * (valor4);
  const resultado04 = cantidadxvalor04 === 0 ? '-' : cantidadxvalor04;

  const cantidad5 = cantidad05;
  const valor5 = valor05;
  const cantidadxvalor05 = (cantidad5) * (valor5);
  const resultado05 = cantidadxvalor05 === 0 ? '-' : cantidadxvalor05;



  const cantidad6 = cantidad06;
  const valor6 = valor06;
  const cantidadxvalor06 = (cantidad6) * (valor6);
  const resultado06 = cantidadxvalor06 === 0 ? '-' : cantidadxvalor06;



  const cantidad7 = cantidad07;
  const valor7 = valor07;
  const cantidadxvalor07 = (cantidad7) * (valor7);
  const resultado07 = cantidadxvalor07 === 0 ? '-' : cantidadxvalor07;


  const cantidad8 = cantidad08;
  const valor8 = valor08;
  const cantidadxvalor08 = (cantidad8) * (valor8);
  const resultado08 = cantidadxvalor08 === 0 ? '-' : cantidadxvalor08;

  const cantidad9 = cantidad09;
  const valor9 = valor09;
  const cantidadxvalor09 = (cantidad9) * (valor9);
  const resultado09 = cantidadxvalor09 === 0 ? '-' : cantidadxvalor09;



  const subtotal = cantidadxvalor + cantidadxvalor01 + cantidadxvalor02 + cantidadxvalor03 + cantidadxvalor04 + cantidadxvalor05 + cantidadxvalor06 + cantidadxvalor07 + cantidadxvalor08 + cantidadxvalor09
  const iva = subtotal * 0.19 
  const totaldubiva = subtotal + iva


 


    

    
  return (

    <>

        

    
        <div role="status" className="space-y-8 md:space-y-0 md:space-x-8 md:items-center p-2 m-5">
            <div className="flex">
                <div className="flex items-center w-full h-48">
                    <Image width={280} height={80} src="/assets/img/AGRFOC.png" alt="logo" className=""/>
                </div>
                <div className="w-full m-auto">
                    <div className="text-center"><h3 className="text-lg font-bold inline-block align-baseline ">ORDEN DE COMPRA</h3></div>
                    <div className="text-center"><h3 className="text-lg font-bold inline-block align-middle">Nº: {formatoNumero(id)}</h3></div>
                    <div className="py-5 pb-0"><p className="text-sm font-bold text-center">Dia/Mes/Año</p></div>
                    <div><p className="text-lg font-bold text-center">{formatiarFecha(fecha)}</p></div>
                </div> 
            </div>
        </div>

        {pedido01.map(oc => (
            <div key={oc.id}
                className=""
            >
                <div className="grid gap-4 grid-cols-2">
                    <div className="px-6"><p className="border-b border-black">Señor(es): {oc.nombreproveedor}</p></div>
                    <div className="px-6"><p className="border-b border-black">Rut: {oc.rut}</p></div>
                </div>
                <div className="grid gap-4 grid-cols-2 py-2 pb-5">
                    <div className="px-6"><p className="border-b border-black">Atencion: {atencion}</p></div>
                    <div className="px-6"><p className="border-b border-black">Cotizacion: {cotizacion}</p></div>
                </div>
            </div>
        ))}


        <div className="p-2 space-y-2 m-2">
            <table className="table-auto w-full text-center bg-white">
                <thead>
                    <td className="px-6 py-4 w-1/12 text-center border border-black">Cantidad</td>
                    <td className="px-6 py-4 w-2/3 text-center border border-black">Detalle</td>
                    <td className="px-6 py-4 w-1/12 text-center border border-black">Valor</td>
                    <td className="px-6 py-4 w-1/12 text-center border border-black">Total</td>
                </thead>
                <tbody>
                    <tr className="bg-white border-b  text-sm">
                        <td className="px-6 py-1 w-1/12 text-center border border-black">{cantidades}</td>
                        <td className="px-6 py-1 w-2/3 text-center border border-black">{detalles}</td>
                        <td className="px-6 py-1 w-1/12 text-center border border-black">{valores}</td>
                        <td className="px-6 py-1 w-1/12 text-center border border-black">{formatearDinero (resultado)}</td>
                    </tr>

                    <tr className="bg-white border-b  text-sm">
                        <td className="px-6 py-1 w-1/12 text-center border border-black">{cantidad01}</td>
                        <td className="px-6 py-1 w-2/3 text-center border border-black">{detalle01}</td>
                        <td className="px-6 py-1 w-1/12 text-center border border-black">{valor01}</td>
                        <td className="px-6 py-1 w-1/12 text-center border border-black">{formatearDinero (resultado01)}</td>
                    </tr>

                    <tr className="bg-white border-b  text-sm">
                        <td className="px-6 py-1 w-1/12 text-center border border-black">{cantidad02}</td>
                        <td className="px-6 py-1 w-2/3 text-center border border-black">{descripcion02}</td>
                        <td className="px-6 py-1 w-1/12 text-center border border-black">{valor02}</td>
                        <td className="px-6 py-1 w-1/12 text-center border border-black">{formatearDinero (resultado02)}</td>
                    </tr>

                    <tr className="bg-white border-b  text-sm">
                        <td className="px-6 py-1 w-1/12 text-center border border-black">{cantidad03}</td>
                        <td className="px-6 py-1 w-2/3 text-center border border-black">{descripcion03}</td>
                        <td className="px-6 py-1 w-1/12 text-center border border-black">{valor03}</td>
                        <td className="px-6 py-1 w-1/12 text-center border border-black">{formatearDinero (resultado03)}</td>
                    </tr>

                    <tr className="bg-white border-b  text-sm">
                        <td className="px-6 py-1 w-1/12 text-center border border-black">{cantidad04}</td>
                        <td className="px-6 py-1 w-2/3 text-center border border-black">{descripcion04}</td>
                        <td className="px-6 py-1 w-1/12 text-center border border-black">{valor04}</td>
                        <td className="px-6 py-1 w-1/12 text-center border border-black">{formatearDinero (resultado04)}</td>
                    </tr>

                    <tr className="bg-white border-b  text-sm">
                        <td className="px-6 py-1 w-1/12 text-center border border-black">{cantidad05}</td>
                        <td className="px-6 py-1 w-2/3 text-center border border-black">{descripcion05}</td>
                        <td className="px-6 py-1 w-1/12 text-center border border-black">{valor05}</td>
                        <td className="px-6 py-1 w-1/12 text-center border border-black">{formatearDinero (resultado05)}</td>
                    </tr>

                    <tr className="bg-white border-b  text-sm">
                        <td className="px-6 py-1 w-1/12 text-center border border-black">{cantidad06}</td>
                        <td className="px-6 py-1 w-2/3 text-center border border-black">{descripcion06}</td>
                        <td className="px-6 py-1 w-1/12 text-center border border-black">{valor06}</td>
                        <td className="px-6 py-1 w-1/12 text-center border border-black">{formatearDinero (resultado06)}</td>
                    </tr>

                    <tr className="bg-white border-b  text-sm">
                        <td className="px-6 py-1 w-1/12 text-center border border-black">{cantidad07}</td>
                        <td className="px-6 py-1 w-2/3 text-center border border-black">{descripcion07}</td>
                        <td className="px-6 py-1 w-1/12 text-center border border-black">{valor07}</td>
                        <td className="px-6 py-1 w-1/12 text-center border border-black">{formatearDinero (resultado07)}</td>
                    </tr>

                    <tr className="bg-white border-b  text-sm">
                        <td className="px-6 py-1 w-1/12 text-center border border-black">{cantidad08}</td>
                        <td className="px-6 py-1 w-2/3 text-center border border-black">{descripcion08}</td>
                        <td className="px-6 py-1 w-1/12 text-center border border-black">{valor08}</td>
                        <td className="px-6 py-1 w-1/12 text-center border border-black">{formatearDinero (resultado08)}</td>
                    </tr>

                    <tr className="bg-white border-b  text-sm">
                        <td className="px-6 py-1 w-1/12 text-center border border-black">{cantidad09}</td>
                        <td className="px-6 py-1 w-2/3 text-center border border-black">{descripcion09}</td>
                        <td className="px-6 py-1 w-1/12 text-center border border-black">{valor09}</td>
                        <td className="px-6 py-1 w-1/12 text-center border border-black">{formatearDinero (resultado09)}</td>
                    </tr>

                    
                </tbody>
                    <tr className="bg-white text-sm">
                        <td className="px-6 py-1 w-1/12 text-center"></td>
                        <td className="px-6 py-1 w-2/3 text-center"></td>
                        <td className="px-6 py-1 w-1/5 text-center text-black font-bold">NETO</td>
                        <td className="px-6 py-1 w-1/12 text-center border border-black">{formatearDinero(subtotal)}</td>
                    </tr>
                    <tr className="bg-white text-sm">
                        <td className="px-6 py-1 w-1/12 text-center"></td>
                        <td className="px-6 py-1 w-2/3 text-center"></td>
                        <td className="px-6 py-1 w-1/5 text-center text-black font-bold">IVA 19%</td>
                        <td className="px-6 py-1 w-1/12 text-center border border-black">{formatearDinero(iva)}</td>
                    </tr>
                    <tr className="bg-white text-sm">
                        <td colSpan="2" className="px-2 py-1 w-1/12 text-left">Sin otro particular saluda(n) Atte. a Ud(s)</td>
                        
                        <td className="px-6 py-1 w-1/5 text-center text-black font-bold">TOTAL</td>
                        <td className="px-6 py-1 w-1/12 text-center border border-black">{formatearDinero(totaldubiva)}</td>
                    </tr>
            </table>
        </div>


        <div className="grid gap-4 grid-cols-1 py-4 pb-8">
            
            
            <div className="px-6 m-auto"><p className="border-b border-black text-black font-bold text-sm">
                <Image width={280} height={80} src="/assets/img/firma.png" alt="logo" className=""/>
                </p></div>
        </div>


        <div className="py-2 pb-8">
            <div className="px-6"><p className="text-black font-bold text-sm">NOTA: En la Factura se deberá mencionar el Nº de esta orden.</p></div>

        </div>



  

    </>
  )
}

export default OrdenCompraAutorizada