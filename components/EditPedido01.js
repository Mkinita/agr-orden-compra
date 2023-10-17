import { useState, useEffect } from 'react';
import axios from 'axios';

const EditarRutPedido01 = ({ orden }) => {
  const [nuevoRut, setNuevoRut] = useState('');
  const {id,pago} = orden;

useEffect(() => {
    if (orden.pedido01 && orden.pedido01.length > 0) {
      console.log("Contenido de pedido01:", orden.pedido01);
      setNuevoRut(orden.pedido01[0].rut);
    }
  }, [orden]);
  


const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      await axios.post(`/api/editarpedido01/${id}`, { rut: nuevoRut });
      // Realiza la lógica necesaria para actualizar el estado en tu aplicación
    } catch (error) {
      console.log(error);
    }
  };
  
  
  
  

  return (
    <form onSubmit={handleSubmit} className='font-bold text-sm'>
      <div className="grid grid-cols-1 p-0">
        <div>
          <input
            className='bg-gray-white w-full p-2'
            type="text"
            value={nuevoRut}
            onChange={(event) => setNuevoRut(event.target.value)}
          />
        </div>
        <button type="submit" className="pb-0 hover:scale-95 text-xs">
          Guardar ♻️
        </button>
      </div>
    </form>
  );
};

export default EditarRutPedido01;
