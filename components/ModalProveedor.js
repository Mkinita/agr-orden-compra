import { useState, useEffect } from "react";
import Image from "next/image";
import useCombustible from "../hooks/useCombustible";

const ModalProveedor = () => {
  const { proveedor, handleChangeModal, handleAgregarOrden } = useCombustible();
  

  

  return (
    <div className="gap-10">
      
      <div className="text-center">
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
        <h1 className="text-2xl font-bold mt-1 py-5">{proveedor.nombreproveedor}</h1>
        <p className="mt-1 font-black text-xl text-amber-500 py-1 pb-5">{proveedor.rut}</p>
        
        

        <button
          type="button"
          className="bg-amber-500 hover:bg-amber-600 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
          onClick={() => handleAgregarOrden({ ...proveedor})}
        >
          {"Confirmar"}
        </button>
      </div>
    </div>
  );
};

export default ModalProveedor;