import { useState, useEffect } from 'react';
import useCombustible from '../hooks/useCombustible';
import axios from 'axios';
import Link from 'next/link';

const EditarPago = ({orden}) => {

  const [newpago, setNewPago] = useState('');
  const [newdecuento, setNewDescuento] = useState('');
  const {setPago,setDescuento} = useCombustible();
  const {id,pago,descuento} = orden;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
          await axios.post(`/api/editarpago/${id}`, 
          {pago: newpago,
            descuento: newdecuento
        });
        setPago(newpago);
        setDescuento(newdecuento)
        window.location.reload();
      } 
      catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setNewPago(pago);
    setNewDescuento(descuento)
  }, [ pago,descuento]);
    
  return (
    <>
      <form onSubmit={handleSubmit} className=''>                     
        <div className="grid grid-cols-3 gap-2 p-0 w-full font-bold text-sm text-center">
          <div className=''>
            <p className='font-semibold'>Pago</p>
            <input className='bg-gray-white w-full p-2 text-center border rounded-lg' type="text" value={newpago} onChange={(event) => setNewPago(event.target.value)} />
          </div>
          <div>
            <p className='font-semibold'>Descuento</p>
            <input className='bg-gray-white w-full p-2 text-center border rounded-lg' type="text" value={newdecuento} onChange={(event) => setNewDescuento(event.target.value)} />
          </div>
          
            <button type="submit" className="  text-xs p-2 border rounded-lg hover:scale-95">
              Guardar ♻️
            </button>
          
        </div>
      </form>
    </>
  )
}

export default EditarPago