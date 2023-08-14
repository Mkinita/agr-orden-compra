import useCombustible from "../hooks/useCombustible";
import { useRouter } from 'next/router'
import axios  from 'axios'
import { toast } from "react-toastify"
import {formatearDinero} from "helpers/index"
import Image from "next/image";

const ModalSolicitud = () => {
  const { orden, handleChangeModal, handleAgregarPedido, modal,setModal } = useCombustible();
  const {

    id,fecha,pedido01,atencion,cotizacion,pedido,
      valor01,cantidad01,detalle01,
      valor02,cantidad02,descripcion02,
      valor03,cantidad03,descripcion03,
      valor04,cantidad04,descripcion04,
      valor05,cantidad05,descripcion05,
      valor06,cantidad06,descripcion06,
      valor07,cantidad07,descripcion07,
      valor08,cantidad08,descripcion08,
      valor09,cantidad09,descripcion09,
      cantidades,detalles,valores,solicita

  } = orden


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

  const router = useRouter()

    const autorizar = async () => {

        try {

           await axios.post(`/api/autorizarorden/${id}`)
            toast.success('Autorizando')
            setModal(false);
            setTimeout(() =>{
              router.push('/orden-autorizada')
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
            <table className="table-auto w-full text-center bg-white text-gray-700">
                <tbody>
                    <tr className="bg-white border-b text-sm">
                        <td className="px-2 py-1 w-1/12 text-center border border-black font-bold">Proveedor</td>
                        <td className="px-2 py-1 w-1/12 text-center border border-black font-bold">Validado Por</td>
                    </tr>
                    {pedido01.map(oc => (
                        <tr className="bg-white border-b text-sm"key={oc.id}>
                            <td className="px-2 py-1 w-1/12 text-center border border-black">{oc.nombreproveedor}</td>
                            {pedido.map(o =>
                            <td key={o.id} className="px-2 py-1 w-1/12 text-center border border-black">{o.nombre01}</td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>


            <p className="text-sm font-bold py-2 pb-2 text-center"></p>


            {pedido.map(o => (
            <div key={o.id}
                className=""
            >
            <div className="">
                <table className="table-auto w-full text-center bg-white">
                    <thead className="font-bold">
                        <td className="px-1 py-1 w-1/12 text-center border border-black">Cant.</td>
                        <td className="px-1 py-1 w-2/3 text-center border border-black">Detalle</td>
                        <td className="px-1 py-1 w-1/12 text-center border border-black">V. Un.</td>
                    </thead>
                    
                    <tbody>
                    
                        
                        <tr className="bg-white border-b  text-sm">
                            <td className="px-1 py-1 w-1/12 text-center border border-black">{o.cantidades}</td>
                            <td className="px-1 py-1 w-2/3 text-center border border-black">{o.detalles}</td>
                            <td className="px-1 py-1 w-1/12 text-center border border-black">{o.valores}</td>
                        </tr>

                        <tr className="bg-white border-b  text-sm">
                            <td className="px-1 py-1 w-1/12 text-center border border-black">{o.cantidad01}</td>
                            <td className="px-1 py-1 w-2/3 text-center border border-black">{o.detalle01}</td>
                            <td className="px-1 py-1 w-1/12 text-center border border-black">{o.valor01}</td>
                        </tr>

                        <tr className="bg-white border-b  text-sm">
                            <td className="px-1 py-1 w-1/12 text-center border border-black">{o.cantidad02}</td>
                            <td className="px-1 py-1 w-2/3 text-center border border-black">{o.descripcion02}</td>
                            <td className="px-1 py-1 w-1/12 text-center border border-black">{o.valor02}</td>
                        </tr>

                        <tr className="bg-white border-b  text-sm">
                            <td className="px-1 py-1 w-1/12 text-center border border-black">{o.cantidad03}</td>
                            <td className="px-1 py-1 w-2/3 text-center border border-black">{o.descripcion03}</td>
                            <td className="px-1 py-1 w-1/12 text-center border border-black">{o.valor03}</td>
                        </tr>

                        <tr className="bg-white border-b  text-sm">
                            <td className="px-1 py-1 w-1/12 text-center border border-black">{o.cantidad04}</td>
                            <td className="px-1 py-1 w-2/3 text-center border border-black">{o.descripcion04}</td>
                            <td className="px-1 py-1 w-1/12 text-center border border-black">{o.valor04}</td>
                        </tr>

                        {/* <tr className="bg-white border-b  text-sm">
                            <td className="px-1 py-1 w-1/12 text-center border border-black">{cantidad05}</td>
                            <td className="px-1 py-1 w-2/3 text-center border border-black">{descripcion05}</td>
                            <td className="px-1 py-1 w-1/12 text-center border border-black">{valor05}</td>
                        </tr>

                        <tr className="bg-white border-b  text-sm">
                            <td className="px-1 py-1 w-1/12 text-center border border-black">{cantidad06}</td>
                            <td className="px-1 py-1 w-2/3 text-center border border-black">{descripcion06}</td>
                            <td className="px-1 py-1 w-1/12 text-center border border-black">{valor06}</td>
                        </tr>

                        <tr className="bg-white border-b  text-sm">
                            <td className="px-1 py-1 w-1/12 text-center border border-black">{cantidad07}</td>
                            <td className="px-1 py-1 w-2/3 text-center border border-black">{descripcion07}</td>
                            <td className="px-1 py-1 w-1/12 text-center border border-black">{valor07}</td>
                        </tr>

                        <tr className="bg-white border-b  text-sm">
                            <td className="px-1 py-1 w-1/12 text-center border border-black">{cantidad08}</td>
                            <td className="px-1 py-1 w-2/3 text-center border border-black">{descripcion08}</td>
                            <td className="px-1 py-1 w-1/12 text-center border border-black">{valor08}</td>
                        </tr>

                        <tr className="bg-white border-b  text-sm">
                            <td className="px-1 py-1 w-1/12 text-center border border-black">{cantidad09}</td>
                            <td className="px-1 py-1 w-2/3 text-center border border-black">{descripcion09}</td>
                            <td className="px-1 py-1 w-1/12 text-center border border-black">{valor09}</td>
                        </tr> */}

                        
                    
                    </tbody>
                    
                        <tr className="bg-white text-sm">
                            <td className="px-1 py-1 w-1/12 text-center"></td>
                            <td className="px-1 py-1 w-1/5 text-center text-black font-bold">NETO</td>
                            <td className="px-1 py-1 w-1/12 text-center border border-black">{formatearDinero((o.cantidades * o.valores)+(o.cantidad01 * o.valor01)+(o.cantidad02 * o.valor02)+(o.cantidad03 * o.valor03)+(o.cantidad04 * o.valor04))}</td>

                        </tr>
                        <tr className="bg-white text-sm">
                            <td className="px-1 py-1 w-1/12 text-center"></td>
                            <td className="px-1 py-1 w-1/5 text-center text-black font-bold">IVA 19%</td>
                            <td className="px-1 py-1 w-1/12 text-center border border-black">{formatearDinero((o.cantidades * o.valores+ o.cantidad01 * o.valor01+o.cantidad02 * o.valor02+o.cantidad03 * o.valor03+o.cantidad04 * o.valor04) *(0.19))}</td>

                        </tr>
                        <tr className="bg-white text-sm">
                            <td className="px-1 py-1 w-1/12 text-center"></td>
                            <td className="px-1 py-1 w-1/5 text-center text-black font-bold">TOTAL</td>
                            <td className="px-1 py-1 w-1/12 text-center border border-black">{formatearDinero((o.cantidades * o.valores+ o.cantidad01 * o.valor01+o.cantidad02 * o.valor02+o.cantidad03 * o.valor03+o.cantidad04 * o.valor04)*(1.19))}</td>

                        </tr>
                </table>
            </div>
            </div>
         ))}

            
            <div className="m-auto text-center">
                <button className="px-5 py-2 mt-5 text-black font-bold uppercase rounded-xl shadow" type="button" onClick={autorizar} >
                    <Image width={200} height={50} src="/assets/img/firma.png" alt="logo" className=""/>
                    Firmar Autorizacion
                </button>
            </div>
            

        </div>
    </div>
  );
};

export default ModalSolicitud;