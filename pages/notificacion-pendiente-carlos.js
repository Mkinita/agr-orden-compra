import { useState,useEffect } from 'react';
import axios from 'axios';
import Layout from "../layout/Layout"
import useSWR from 'swr'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

export default function ContactPage() {
  const router = useRouter()

  
      
  const [formData, setFormData] = useState({
    to: '',
    subject: '',
    text: ``,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/sendMailMasivaRoxana', formData);
      console.log('Correo electrónico enviado');
    } catch (error) {
      console.error('Error al enviar el correo electrónico:', error);
    }

    toast.success('Enviando Notificacion')
    setTimeout(() =>{
      router.push('/notificacion-pendiente-roxana')
    },1500)

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
    <Layout pagina='Notificar O.C.'>
    <form onSubmit={handleSubmit}>
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
      <br/>
      <br/>
      <br/>
      <br/>
      <div className='p-2 w-1/2 text-center shadow rounded-lg px-6 m-auto'>
        <p className='font-bold text-s'>Esta Notificación se enviará por correo electrónico como recordatorio de solicitudes y ordenes de compras pendientes </p>
        <p className=' font-extrabold text-2xl'>/NOTIFICACION PENDIENTE CARLOS/</p>
        <br/>
        <br/>
        <div className='flex justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-32 h-32">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
          </svg>
        </div>
        <br/>
      <button type="submit" className='font-bold hover:scale-110 shadow rounded-lg p-2 bg-amber-400'>Enviar Notificación</button>
      </div>
    </form>



    </Layout>
  );
}