import { useState, useEffect } from "react";
import Image from "next/image";
import useCombustible from "../hooks/useCombustible";

const ModalArticulo = () => {
  const { articulo, handleChangeModal, handleAgregarPedido, pedido } = useCombustible();
  const [cantidad, setCantidad] = useState(1);
  const [edicion, setEdicion] = useState(false);

  useEffect(() => {
    if (pedido.some((pedidoState) => pedidoState.id === articulo.id)) {
      const articuloEdicion = pedido.find(
        (pedidoState) => pedidoState.id === articulo.id
      );
      setEdicion(true);
      setCantidad(articuloEdicion.cantidad);
    }
  }, [articulo, pedido]);

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
        <h1 className="text-xl font-bold mt-1 text-center">{articulo.nombre}</h1>

        <div className="grid gap-2 grid-cols-3 text-center py-8 px-8">
          <button
            className="m-auto"
            type="button"
            onClick={() => {
              if (cantidad <= 1) return;
              setCantidad(cantidad - 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>

          <p className="text-5xl">{cantidad}</p>

          <button
            className="m-auto"
            type="button"
            onClick={() => {
              if (cantidad >= 100) return;
              setCantidad(cantidad + 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>  
        <div className="m-auto text-center">
  <button
    type="button"
    className="bg-amber-400 hover:bg-amber-500 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
    onClick={() => handleAgregarPedido({ ...articulo, cantidad })}
  >
    {edicion ? "Guardar Cambios" : "Agregar"}
  </button>
</div>

      </div>
    </div>
  );
};

export default ModalArticulo;