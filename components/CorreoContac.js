import { useState,useEffect } from 'react';
import axios from 'axios';
import LayoutOrdenCompra from "../layout/LayoutOrdenCompra"
import useSWR from 'swr'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

export default function ContactPage() {


    const fetcher = () => axios('/api/ordenes-autorizadas-us').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/ordenes-autorizadas-us',fetcher,{refreshInterval: 100} )

    const [solicitudesPendientes, setSolicitudesPendientes] = useState(0);
    
    const router = useRouter()


    
  

    useEffect(() => {
        if (data) {
          setSolicitudesPendientes(data.length);
          setFormData({
            to: '',
            subject: 'Sistema De Compra !Notificacion¡',
            text: `Tu Solicitud Esta En planta Revisa en el siguiente enlace https://agr-orden-compra-production.up.railway.app/recibe-conforme`,
          });
        }
      }, [data]);
      
      const [formData, setFormData] = useState({
        to: '',
        subject: 'Notificacion',
        text: `https://agr-orden-compra-production.up.railway.app/recibe-conforme`,
      });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/sendMailNuevo', formData);
      console.log('Correo electrónico enviado');
    } catch (error) {
      console.error('Error al enviar el correo electrónico:', error);
    }

    toast.success('Notificacion Enviada')
    setTimeout(() =>{
      router.push('/orden-compra')
      
    },2500)

    setFormData({
      to: '',
      subject: '',
      text: '',
    });
  };

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
    <form onSubmit={handleSubmit} className='py-0 p-0 relative'>
      <input  className='hidden'
        type="email"
        name="to"
        value={formData.to}
        onChange={handleChange}
        placeholder="Destinatario"
      />
      <input  className='hidden'
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Asunto"
      />
      <textarea  className='hidden'
        name="text"
        value={formData.text}
        onChange={handleChange}
        placeholder="Contenido del correo electrónico"
      ></textarea>
      
      <div className=''>
        
        
        
      <button type="submit" className='rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-black shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600'>🔔 Notificar 🔔</button>
      </div>
    </form>



    </>
  );
}
