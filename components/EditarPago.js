import { useState, useEffect } from 'react';
import useCombustible from '../hooks/useCombustible';
import axios from 'axios';
import Link from 'next/link';

const EditarPago = ({orden}) => {

    const [newpago, setNewPago] = useState('');

    const {setPago} = useCombustible();

    const {id,pago} = orden;

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          await axios.post(`/api/editarpago/${id}`, 
          {pago: newpago});
          setPago(newpago);
          window.location.reload();
        } catch (error) {
          console.log(error);
        }
    };

    useEffect(() => {
        setNewPago(pago);
    }, [ pago,]);
    

  return (
    <>
    <form onSubmit={handleSubmit} className='font-bold text-sm'>
      
              
            
        <div className="grid grid-cols-1 p-0">
            <div>
                    <input className='bg-gray-white w-full p-2' type="text" value={newpago} onChange={(event) => setNewPago(event.target.value)} />
                </div>
            <button type="submit" className="pb-0 hover:scale-95 text-xs">
                Guardar ♻️
            </button>
        </div>

    </form>

    </>
  )
}

export default EditarPago