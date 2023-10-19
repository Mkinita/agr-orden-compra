import { useState, useEffect, useCallback} from 'react';
import useCombustible from '../hooks/useCombustible';
import axios from 'axios';
import Link from 'next/link';
import { toast } from 'react-toastify'

export default function EditarOrdenGeneral({solicitud}) {
  const [newcantidad, setNewCantidad] = useState('');
  const [newdescripcion, setNewDescripcion] = useState('');
  const [newvalor, setNewValor] = useState('');

  const [newcantidad01, setNewCantidad01] = useState('');
  const [newdescripcion01, setNewDescripcion01] = useState('');
  const [newvalor01, setNewValor01] = useState('');

  const [newcantidad02, setNewCantidad02] = useState('');
  const [newdescripcion02, setNewDescripcion02] = useState('');
  const [newvalor02, setNewValor02] = useState('');

  const [newcantidad03, setNewCantidad03] = useState('');
  const [newdescripcion03, setNewDescripcion03] = useState('');
  const [newvalor03, setNewValor03] = useState('');

  const [newcantidad04, setNewCantidad04] = useState('');
  const [newdescripcion04, setNewDescripcion04] = useState('');
  const [newvalor04, setNewValor04] = useState('');

  const 
  {   
    setCantidades,
            setDetalles,
            setValores,
            setCantidad01,
            setDetalle01,
            setValore01,
            setCantidad02,
            setCantidad03,
            setCantidad04,
            setDescripcion02,
            setDescripcion03,
            setDescripcion04,
            setValor02,
            setValor03,
            setValor04,
  } = useCombustible();


  const 
  {   
    id,cantidades,detalles,valores,
    cantidad01,detalle01,valor01,
    cantidad02,descripcion02,valor02,
    cantidad03,descripcion03,valor03,
    cantidad04,descripcion04,valor04,
    nombre01, area
  } = solicitud;



  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(`/api/editarsolicitud/${id}`, 
      { cantidades: newcantidad , detalles: newdescripcion, valores:newvalor,
        cantidad01: newcantidad01 , detalle01: newdescripcion01, valor01:newvalor01,
        cantidad02: newcantidad02 , descripcion02: newdescripcion02, valor02:newvalor02,
        cantidad03: newcantidad03 , descripcion03: newdescripcion03, valor03:newvalor03,
        cantidad04: newcantidad04 , descripcion04: newdescripcion04, valor04:newvalor04,
      });
      setCantidades(newcantidad);
      setDetalles(newdescripcion);
      setValores(newvalor);

      setCantidad01(newcantidad01);
      setDetalle01(newdescripcion01);
      setValore01(newvalor01);

      setCantidad02(newcantidad02);
      setDescripcion02(newdescripcion02);
      setValor02(newvalor02);

      setCantidad03(newcantidad03);
      setDescripcion03(newdescripcion03);
      setValor03(newvalor03);

      setCantidad04(newcantidad04);
      setDescripcion04(newdescripcion04);
      setValor04(newvalor04);

      toast.success('Valores Agregados')


    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setNewCantidad(cantidades);
    setNewDescripcion(detalles);
    setNewValor(valores);

    setNewCantidad01(cantidad01);
    setNewDescripcion01(detalle01);
    setNewValor01(valor01);

    setNewCantidad02(cantidad02);
    setNewDescripcion02(descripcion02);
    setNewValor02(valor02);

    setNewCantidad03(cantidad03);
    setNewDescripcion03(descripcion03);
    setNewValor03(valor03);

    setNewCantidad04(cantidad04);
    setNewDescripcion04(descripcion04);
    setNewValor04(valor04);





  }, [  
      cantidades,detalles,valores,
      cantidad01,detalle01,valor01,
      cantidad02,descripcion02,valor02,
      cantidad03,descripcion03,valor03,
      cantidad04,descripcion04,valor04,

  ]);


    


    const cantidad1 =newcantidad;
    const valor1 =newvalor;
    const cantidadxvalor = (cantidad1) * (valor1);
    const resultado = cantidadxvalor === 0 ? '' : cantidadxvalor;


    const cantidad2 =newcantidad01;
    const valor2 =newvalor01;
    const cantidadxvalor2 = (cantidad2) * (valor2);
    const resultado2 = cantidadxvalor2 === 0 ? '' : cantidadxvalor2;


    const cantidad3 =newcantidad02;
    const valor3 =newvalor02;
    const cantidadxvalor3 = (cantidad3) * (valor3);
    const resultado3 = cantidadxvalor3 === 0 ? '' : cantidadxvalor3;


    const cantidad4 =newcantidad03;
    const valor4 =newvalor03;
    const cantidadxvalor4 = (cantidad4) * (valor4);
    const resultado4 = cantidadxvalor4 === 0 ? '' : cantidadxvalor4;


    const cantidad5 =newcantidad04;
    const valor5 =newvalor04;
    const cantidadxvalor5 = (cantidad5) * (valor5);
    const resultado5 = cantidadxvalor5 === 0 ? '' : cantidadxvalor5;




    




  return (
    <>
    <div className='font-semibold'>
      <p>{nombre01}</p>
      <p>{area}</p>
    </div>
    <form onSubmit={handleSubmit} className='font-semibold text-sm'>
      <br/>
      <table className="table-auto w-full text-center bg-white text-gray-700">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-2 py-4 w-1/10 text-center border border-gray-200">
              Cantidad
            </th>
            <th scope="col" className="px-2 py-4 w-1/2 text-center border border-gray-200">
              Detalle
            </th>
            <th scope="col" className="px-2 py-4 w-1/10 text-center border border-gray-200">
              Valor
            </th>
            <th scope="col" className="px-6 py-4 w-1/12 text-center border border-gray-200">
                Total
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='bg-white border-b'>
            <th className=''>
              <label>
                <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={newcantidad} onChange={(event) => setNewCantidad(event.target.value)} />
              </label>
            </th>
            <th>
              <label>
                  <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={newdescripcion} onChange={(event) => setNewDescripcion(event.target.value)} />
              </label>
            </th>
            <th>
              <label>
                  <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={newvalor} onChange={(event) => setNewValor(event.target.value)} />
              </label>
            </th>

            <th>
              <label>
                  <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={resultado} onChange={(event) => setNewValor(event.target.value)} />
              </label>
            </th>
          </tr>
          <tr className='bg-white border-b'>
            <th>
              <label>
                  <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={newcantidad01} onChange={(event) => setNewCantidad01(event.target.value)} />
              </label>
            </th>
            <th>
              <label>
                  <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={newdescripcion01} onChange={(event) => setNewDescripcion01(event.target.value)} />
              </label>
            </th>
            <th>
              <label>
                <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={newvalor01} onChange={(event) => setNewValor01(event.target.value)} />
              </label>
            </th>

            <th>
              <label>
                  <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={resultado2} onChange={(event) => setNewValor01(event.target.value)} />
              </label>
            </th>
          </tr>
          <tr className='bg-white border-b'>
            <th>
              <label>
                  <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={newcantidad02} onChange={(event) => setNewCantidad02(event.target.value)} />
              </label>
            </th>
            <th>
              <label>
                  <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={newdescripcion02} onChange={(event) => setNewDescripcion02(event.target.value)} />
              </label>
            </th>
            <th>
              <label>
                <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={newvalor02} onChange={(event) => setNewValor02(event.target.value)} />
              </label>
            </th>
            <th>
              <label>
                  <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={resultado3} onChange={(event) => setNewValor02(event.target.value)} />
              </label>
            </th>
          </tr>
          <tr className='bg-white border-b'>
            <th>
              <label>
                 <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={newcantidad03} onChange={(event) => setNewCantidad03(event.target.value)} />
              </label>
            </th>
            <th>
              <label>
                <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={newdescripcion03} onChange={(event) => setNewDescripcion03(event.target.value)} />
              </label>
            </th>
            <th>
              <label>
                <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={newvalor03} onChange={(event) => setNewValor03(event.target.value)} />
              </label>
            </th>
            <th>
              <label>
                  <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={resultado4} onChange={(event) => setNewValor03(event.target.value)} />
              </label>
            </th>
          </tr>
          <tr className='bg-white border-b'>
            <th>
              <label>
                 <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={newcantidad04} onChange={(event) => setNewCantidad04(event.target.value)} />
              </label>
            </th>
            <th>
              <label>
                <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={newdescripcion04} onChange={(event) => setNewDescripcion04(event.target.value)} />
              </label>
            </th>
            <th>
              <label>
                 <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={newvalor04} onChange={(event) => setNewValor04(event.target.value)} />
               </label>
            </th>
            <th>
              <label>
                  <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={resultado5} onChange={(event) => setNewValor04(event.target.value)} />
              </label>
            </th>
          </tr>
        </tbody>
      </table>
      <div className="grid grid-cols-2 p-2 gap-4">
  <button type="submit" className="w-full rounded-2xl border-b-4 border-b-amber-600 bg-amber-400 py-3 font-bold text-white hover:bg-amber-500 active:translate-y-[0.125rem] active:border-b-amber-400">
    Guardar ♻️
  </button>
  <Link href="/cotizacion " className="w-full rounded-2xl text-center border-b-4 border-b-amber-600 bg-amber-400 py-3 font-bold text-white hover:bg-amber-500 active:translate-y-[0.125rem] active:border-b-amber-400">
    <span className="">Siguiente ⏩</span>
  </Link>
</div>

    </form>

    </>
  );
}