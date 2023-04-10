import { useState, useEffect } from 'react';
import useCombustible from '../hooks/useCombustible';
import axios from 'axios';

export default function EditarOrdenGeneral({orden}) {
  const [newcantidad, setNewCantidad] = useState('');

  const 
  {   
    setCantidad,
  } = useCombustible();


  function reloadPage() {
    window.location.reload();
  }

  


  


  const 
  {   
    id,cantidad
  } = orden;


  

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(`/api/editarstock/${id}`, 
      { cantidad: newcantidad
      });
      setCantidad(newcantidad);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setNewCantidad(cantidad);
    
  }, [  
      cantidad
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
        <input className='text-center w-16 h-8' type="text" value={newcantidad} onChange={(event) => setNewCantidad(event.target.value)} />
        
      </div>
    )}
  </div>
</form>


</>
  );
}


