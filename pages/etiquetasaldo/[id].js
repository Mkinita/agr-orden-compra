import { PrismaClient } from '@prisma/client';
import { useEffect, useState } from 'react';
import EtiquetaImprecionEnlace from '@/components/EtiquetaImprecionEnlace'

const prisma = new PrismaClient();

export default function OrdenPage({ saldo }) {

    const [fecha, setFecha] = useState('');
    

    useEffect(() => {
      const date = new Date(saldo.fecha);
      setFecha(date.toLocaleDateString());
    }, []);

  return (
    <>
        <div className='m-auto'>
        <EtiquetaImprecionEnlace saldo={saldo} />
        </div>


       
    </>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;
  const saldo = await prisma.saldo.findUnique({
    where: { id: parseInt(id) }
  });

  return { props: { saldo: { ...saldo, fecha: saldo.fecha.toISOString() } } };
}
