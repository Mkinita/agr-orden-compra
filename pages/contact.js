import { useState,useEffect } from 'react';
import axios from 'axios';
import LayoutOrdenCompra from "../layout/LayoutOrdenCompra"
import useSWR from 'swr'

export default function ContactPage() {


    const fetcher = () => axios('/api/autorizar-ordenes').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/autorizar-ordenes',fetcher,{refreshInterval: 100} )

    const [solicitudesPendientes, setSolicitudesPendientes] = useState(0);

    useEffect(() => {
        if (data) {
          setSolicitudesPendientes(data.length);
          setFormData({
            to: 'jerez4959@gmail.com',
            subject: 'Sistema Ordenes De Compra !Notificacion¡',
            text: `Tienes ${data.length} Ordenes De Compra Pendientes Puedes Revisarlas En El Siguiente Enlace https://agr-orden-compra-production.up.railway.app/autorizar`,
          });
        }
      }, [data]);
      
      const [formData, setFormData] = useState({
        to: 'jerez4959@gmail.com',
        subject: 'Notificacion',
        text: `Tienes ${solicitudesPendientes} https://agr-orden-compra-production.up.railway.app/autorizar`,
      });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/sendMail', formData);
      console.log('Correo electrónico enviado');
    } catch (error) {
      console.error('Error al enviar el correo electrónico:', error);
    }

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
    <LayoutOrdenCompra pagina='Notificar O.C.'>
    <form onSubmit={handleSubmit} className=''>
      <input
        type="email"
        name="to"
        value={formData.to}
        onChange={handleChange}
        placeholder="Destinatario"
      />
      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Asunto"
      />
      <textarea
        name="text"
        value={formData.text}
        onChange={handleChange}
        placeholder="Contenido del correo electrónico"
      ></textarea>
      <button type="submit">Enviar</button>
    </form>
    </LayoutOrdenCompra>
  );
}
