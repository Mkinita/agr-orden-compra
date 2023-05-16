import { useState, useEffect } from 'react';
import useCombustible from '../hooks/useCombustible';
import axios from 'axios';

export default function EditarPedido({horas}) {
  
    const {id,horasmes,horastrabajadas} = horas;
    const {setHorasmes,setHorastrabajadas} = useCombustible();
    const [newhorasmes, setNewHorasmes] = useState('');
    const [newhorastrabajadas, setNewHorasTrabajadas] = useState('');
    
    
    const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        await axios.post(`/api/editarhoras/${id}`, 
        { 
            horasmes: newhorasmes,
            horastrabajadas: newhorastrabajadas,

        });
        setHorasmes(newhorasmes);
        setHorastrabajadas(newhorastrabajadas);

        } catch (error) {
        console.log(error);
        }
    };

    useEffect(() => {
    setNewHorasmes(horasmes);
    setNewHorasTrabajadas(horastrabajadas);
    
    }, [  
        horasmes,
        horastrabajadas
    ]);

    function reloadPage() {
        window.location.reload();
    }

  return (
        <>
            <form onSubmit={handleSubmit} className='font-bold text-xs'>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 px-20">      
                    <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
                        <div className="bg-white p-4 rounded-md shadow">   
                        <label for="ingreso" class="block text-xs font-medium text-gray-700 pb-2 text-center">Horas Mes</label>          
                            <input className='text-center w-full' type="text" value={newhorasmes} onChange={(event) => setNewHorasmes(event.target.value)} />             
                        </div>
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
                        <div className="bg-white p-4 rounded-md shadow">
                        <label for="ingreso" class="block text-xs font-medium text-gray-700 pb-2 text-center">Horas Trabajadas</label>
                            <input className='text-center w-full' type="text" value={newhorastrabajadas} onChange={(event) => setNewHorasTrabajadas(event.target.value)} />                        
                        </div>
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
                        <div className="bg-white p-4 rounded-md shadow">
                        <label for="ingreso" class="block text-xs font-medium text-gray-700 pb-2 text-center">Actualizar</label>
                        <button onClick={reloadPage} type="submit" className='text-center w-full hover hover:scale-110'>♻️</button>
                        </div>
                    </div>            
                </div>
            </form>
            

            
        </>
  );
}



                            
