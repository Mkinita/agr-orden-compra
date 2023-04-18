import React, { useState } from 'react'
import {formatiarFecha} from "helpers/fecha"
import axios from 'axios';
import QRGenerator from '../components/QRGenerator';
import { useRouter } from 'next/router'
import { toast } from "react-toastify"
import Link from 'next/link';


const Etiquetas = ({orden}) => {



  const [password, setPassword] = useState('');
  const {nombre,id,pedido,cliente,fecha} = orden;
  const router = useRouter();
  const myNumber = id;

  const completarOc = async () => {
    try {
      if (password === 'CJ001') { // Aquí debes reemplazar "miContraseña" con la contraseña correcta
        await axios.post(`/api/eliminarstock/${id}`)
        toast.success('🏠')
        setTimeout(() => {
          router.push('/stock-terminado')
        }, 1000)
      } else {
        toast.error('Contraseña incorrecta')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const isButtonDisabled = password.length === 0;
  return (
    <div className="w-full h-full border p-10">
      
      <div className='text-center border'>
        
        {pedido.map(oc => (
                <div key={oc.id}>
                  <h3 className='text-xl font-bold'>{oc.detalle}</h3>
                  <p className='text-lg font-bold py-1'>{nombre}</p>
                  <p className='text-lg font-bold py-1'>{cliente}</p>
                  <p className='text-lg font-bold py-1'>{formatiarFecha(fecha)}</p>
                  <div className='py-2'>
      {/* <QRGenerator orden={('-Calidad:')+ nombre + ('/')+ oc.detalle +('/Cliente:')+ cliente +('/N°:')+(id)} /> */}
      <QRGenerator orden={('https://control-produccion-production.up.railway.app/etiqueta/')+ ('/')+(id)} />
      <p className='text-sm font-bold py-1'>N°: {id}</p>
      <p className="text-sm text-gray-700 mt-2 font-bold">Volumen</p>
      <p className="text-sm text-gray-700 mt-2 font-bold">{oc.espesor * oc.ancho * oc.largo * oc.piezas *oc.cantidad / 1000000 }</p>
    </div>
          
        </div>
        
      ))}

        
        
    </div>

    <div>
          <label htmlFor="password" className="block font-bold">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            className="block border rounded py-2 px-3 w-full mt-2"
          />
        </div>
        <button
          type='button'
          className={`bg-lime-400 hover:bg-lime-500 text-white w-full mt-5 p-3 uppercase font-bold ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={completarOc}
          disabled={isButtonDisabled}
        >
          Eliminar
        </button>
      


    <div className='text-xs text-center py-5 font-bold'>
          <p>Desarrollado Por Carlos Jerez 👨‍💻</p>
          <p>Control Producion Carlos Jerez 📝</p>
          <p>Control Calidad Juan Martinez 👷</p>
        </div>
    

      
    </div>

    



  )
}

export default Etiquetas