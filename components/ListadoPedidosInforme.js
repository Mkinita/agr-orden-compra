import {formatiarFecha} from "helpers/fecha"
import {formatoNumero} from "helpers/formato"
import useCombustible from '../hooks/useCombustible';
// import { lastFourDigits } from "../helpers/mostrarultimosnumero";
import Image from "next/image";


const ListadoPedidosInforme = ({pedidos}) => {

    const {handlesetPedidos, handleChangeModal} =useCombustible()

    const {
        tipo,
        cliente,
        oc,
        producto,
        solicitud,
        despacho,
    } = pedidos


    const  lastFourDigits=(number) => {
        const stringNumber = String(number);
        return stringNumber.slice(-4);
      }

    const number = oc;
    const lastFour = lastFourDigits(number)


    
  
    return (

        
        
        <tr class="bg-white border-b hover:bg-lime-300 text-sm">
            <td class="px-6 py-4 font-medium w-1/5 text-center border border-lime-400">
                {tipo}
            </td>
            <td class="px-6 py-4 w-1/5 text-center border border-lime-400">
                {cliente}
            </td>
            <td class="px-6 py-4 w-1/5 text-center border border-lime-400">
                {lastFour}
            </td>
            <td class="px-6 py-4 w-1/5 text-center border border-lime-400">
                {producto}
            </td>
            <td class="px-6 py-4 w-1/5 text-center border border-lime-400">
                {solicitud}
            </td>
            {/* <td class="px-6 py-4 w-1/5 text-center border border-lime-400">
                {despacho}
            </td> */}
            <td class="px-6 py-4 text-right w-1/5 border border-lime-400">
                

            <button
                type='button'
                className='text-white font-bold py-1 px-2 rounded'
                onClick={()=> {
                handleChangeModal();
                handlesetPedidos(pedidos)
                }}
            >
                {/*  */}
                ➕
            </button>
            </td>
        </tr>

    )
}

export default ListadoPedidosInforme

