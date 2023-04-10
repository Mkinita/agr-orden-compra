import { useState, useEffect } from "react";
import useCombustible from "../hooks/useCombustible";
import {formatoNumero} from "helpers/formato"
import Image from "next/image";
import Link from "next/link";


const ModalPedidos = () => {
  const {handleChangeModal, handleAgregarPedidos, pedidos,imagen } = useCombustible();


  

  return (
    <div className="md:flex gap-10">

      <div className="md:w-">
        <div className="flex justify-end">
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
        <h1 className="text-lg font-bold mt-1 text-center">Solicitado: {pedidos.solicitud} m³</h1>
        <h1 className="text-lg font-bold mt-1 text-center">Despachado: {pedidos.despacho} m³</h1>
        <h1 className="text-lg font-bold mt-1 text-center">Saldo: {formatoNumero(pedidos.solicitud - pedidos.despacho)} m³</h1>
        
        <div className="py-10">
        <Link className="bg-lime-400 hover:bg-lime-500 px-5  py-2 mt-5 text-white font-bold uppercase rounded" href={pedidos.imagen}>📄 Ver Oc 📄</Link>
      
        </div> 
      </div>
    </div>
  );
};

export default ModalPedidos;