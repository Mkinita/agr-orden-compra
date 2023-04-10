import { useState, useEffect } from 'react';
import useCombustible from '../hooks/useCombustible';
import axios from 'axios';

export default function EditarPedido({pedidos}) {
  const [newdespacho, setNewDespacho] = useState('');

  const 
  {   
    setDespacho,
  } = useCombustible();


  function reloadPage() {
    window.location.reload();
  }

  


  


  const 
  {   
    id,despacho
  } = pedidos;


  

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(`/api/editarpedido/${id}`, 
      { despacho: newdespacho
      });
      setDespacho(newdespacho);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setNewDespacho(despacho);
    
  }, [  
      despacho
  ]);



  const [isVisible, setIsVisible] = useState(false);
      
        const toggleVisibility = () => {
          setIsVisible(!isVisible);
        };

  return (
    <>
    <form onSubmit={handleSubmit} className='font-bold text-xs'>
  <div>
    <button
      className="font-bold text-xs p-0"
      onClick={toggleVisibility}
    >
      {isVisible ? <button onClick={reloadPage} type="submit" className='text-center w-8 h-8'>♻️</button> : '✏️'}
    </button>
  </div>
  <div className="items-center">
    {isVisible && (
      <div className="items-center">
        <input className='text-center w-16 h-8' type="text" value={newdespacho} onChange={(event) => setNewDespacho(event.target.value)} />
        
      </div>
    )}
  </div>
</form>


</>
  );
}

