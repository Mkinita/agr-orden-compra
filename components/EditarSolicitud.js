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

  const [newcantidad05, setNewCantidad05] = useState('');
  const [newdescripcion05, setNewDescripcion05] = useState('');
  const [newvalor05, setNewValor05] = useState('');

  const [newcantidad06, setNewCantidad06] = useState('');
  const [newdescripcion06, setNewDescripcion06] = useState('');
  const [newvalor06, setNewValor06] = useState('');

  const [newcantidad07, setNewCantidad07] = useState('');
  const [newdescripcion07, setNewDescripcion07] = useState('');
  const [newvalor07, setNewValor07] = useState('');

  const [newcantidad08, setNewCantidad08] = useState('');
  const [newdescripcion08, setNewDescripcion08] = useState('');
  const [newvalor08, setNewValor08] = useState('');

  const [newcantidad09, setNewCantidad09] = useState('');
  const [newdescripcion09, setNewDescripcion09] = useState('');
  const [newvalor09, setNewValor09] = useState('');

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
            setValor05,
            setValor06,
            setValor07,
            setValor08,
            setValor09,
            setDescripcion05,
            setDescripcion06,
            setDescripcion07,
            setDescripcion08,
            setDescripcion09,
            setCantidad05,
            setCantidad06,
            setCantidad07,
            setCantidad08,
            setCantidad09,
          
          } = useCombustible();


  const 
  {   
    id,cantidades,detalles,valores,
    cantidad01,detalle01,valor01,
    cantidad02,descripcion02,valor02,
    cantidad03,descripcion03,valor03,
    cantidad04,descripcion04,valor04,
    cantidad05,descripcion05,valor05,
    cantidad06,descripcion06,valor06,
    cantidad07,descripcion07,valor07,
    cantidad08,descripcion08,valor08,
    cantidad09,descripcion09,valor09,
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
        cantidad05: newcantidad05 , descripcion05: newdescripcion05, valor05:newvalor05,
        cantidad06: newcantidad06 , descripcion06: newdescripcion06, valor06:newvalor06,
        cantidad07: newcantidad07 , descripcion07: newdescripcion07, valor07:newvalor07,
        cantidad08: newcantidad08 , descripcion08: newdescripcion08, valor08:newvalor08,
        cantidad09: newcantidad09 , descripcion09: newdescripcion09, valor09:newvalor09,
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

      setCantidad05(newcantidad05);
      setDescripcion05(newdescripcion05);
      setValor05(newvalor05);

      setCantidad06(newcantidad06);
      setDescripcion06(newdescripcion06);
      setValor06(newvalor06);

      setCantidad07(newcantidad07);
      setDescripcion07(newdescripcion07);
      setValor07(newvalor07);

      setCantidad08(newcantidad08);
      setDescripcion08(newdescripcion08);
      setValor08(newvalor08);

      setCantidad09(newcantidad09);
      setDescripcion09(newdescripcion09);
      setValor09(newvalor09);

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

    setNewCantidad05(cantidad05);
    setNewDescripcion05(descripcion05);
    setNewValor05(valor05);

    setNewCantidad06(cantidad06);
    setNewDescripcion06(descripcion06);
    setNewValor06(valor06);

    setNewCantidad07(cantidad07);
    setNewDescripcion07(descripcion07);
    setNewValor07(valor07);

    setNewCantidad08(cantidad08);
    setNewDescripcion08(descripcion08);
    setNewValor08(valor08);

    setNewCantidad09(cantidad09);
    setNewDescripcion09(descripcion09);
    setNewValor09(valor09);





  }, [  
      cantidades,detalles,valores,
      cantidad01,detalle01,valor01,
      cantidad02,descripcion02,valor02,
      cantidad03,descripcion03,valor03,
      cantidad04,descripcion04,valor04,
      cantidad05,descripcion05,valor05,
      cantidad06,descripcion06,valor06,
      cantidad07,descripcion07,valor07,
      cantidad08,descripcion08,valor08,
      cantidad09,descripcion09,valor09,

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

    const cantidad6 =newcantidad05;
    const valor6 =newvalor05;
    const cantidadxvalor6 = (cantidad6) * (valor6);
    const resultado6 = cantidadxvalor6 === 0 ? '' : cantidadxvalor6;

    const cantidad7 =newcantidad06;
    const valor7 =newvalor06;
    const cantidadxvalor7 = (cantidad7) * (valor7);
    const resultado7 = cantidadxvalor7 === 0 ? '' : cantidadxvalor7;

    const cantidad8 =newcantidad07;
    const valor8 =newvalor07;
    const cantidadxvalor8 = (cantidad8) * (valor8);
    const resultado8 = cantidadxvalor8 === 0 ? '' : cantidadxvalor8;

    const cantidad9 =newcantidad08;
    const valor9 =newvalor08;
    const cantidadxvalor9 = (cantidad9) * (valor9);
    const resultado9 = cantidadxvalor9 === 0 ? '' : cantidadxvalor9;

    const cantidad10 =newcantidad09;
    const valor10 =newvalor09;
    const cantidadxvalor10 = (cantidad10) * (valor10);
    const resultado10 = cantidadxvalor10 === 0 ? '' : cantidadxvalor10;


    




    




  return (
    <>
    <div className='font-semibold '>
      <p>{nombre01}</p>
      <p>{area}</p>
    </div>
    <form onSubmit={handleSubmit} className='font-semibold text-sm'>
      <br/>
      <table className="table-auto w-full text-center bg-white text-gray-700 ">
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
        <tbody className=''>
          <tr className='bg-white border-b '>
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
          {/* <tr className='bg-white border-b'>
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
          </tr> */}
          {newcantidad02 || newdescripcion02 || newvalor02 || resultado3 ? (
            <tr className='bg-white border-b'>
              <th>
                <label>
                  <input
                    className='bg-gray-200 w-full p-1 rounded-md'
                    type="text"
                    value={newcantidad02}
                    onChange={(event) => setNewCantidad02(event.target.value)}
                  />
                </label>
              </th>
              <th>
                <label>
                  <input
                    className='bg-gray-200 w-full p-1 rounded-md'
                    type="text"
                    value={newdescripcion02}
                    onChange={(event) => setNewDescripcion02(event.target.value)}
                  />
                </label>
              </th>
              <th>
                <label>
                  <input
                    className='bg-gray-200 w-full p-1 rounded-md'
                    type="text"
                    value={newvalor02}
                    onChange={(event) => setNewValor02(event.target.value)}
                  />
                </label>
              </th>
              <th>
                <label>
                  <input
                    className='bg-gray-200 w-full p-1 rounded-md'
                    type="text"
                    value={resultado3}
                    onChange={(event) => setNewValor02(event.target.value)}
                  />
                </label>
              </th>
            </tr>
          ) : null}
          {newcantidad03 || newdescripcion03 || newvalor03 || resultado4 ? (
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
          ) :null}
          {newcantidad04 || newdescripcion04 || newvalor04 || resultado5 ? (
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
          ) : null}
          {newcantidad05 || newdescripcion05 || newvalor05 || resultado6 ? (
          <tr className='bg-white border-b'>
            <th>
              <label>
                 <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={newcantidad05} onChange={(event) => setNewCantidad05(event.target.value)} />
              </label>
            </th>
            <th>
              <label>
                <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={newdescripcion05} onChange={(event) => setNewDescripcion05(event.target.value)} />
              </label>
            </th>
            <th>
              <label>
                 <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={newvalor05} onChange={(event) => setNewValor05(event.target.value)} />
               </label>
            </th>
            <th>
              <label>
                  <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={resultado6} onChange={(event) => setNewValor05(event.target.value)} />
              </label>
            </th>
          </tr>
          ): null}
          
          {newcantidad06 || newdescripcion06 || newvalor06 || resultado7 ? (
          <tr className='bg-white border-b'>
            <th>
              <label>
                 <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={newcantidad06} onChange={(event) => setNewCantidad06(event.target.value)} />
              </label>
            </th>
            <th>
              <label>
                <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={newdescripcion06} onChange={(event) => setNewDescripcion06(event.target.value)} />
              </label>
            </th>
            <th>
              <label>
                 <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={newvalor06} onChange={(event) => setNewValor06(event.target.value)} />
               </label>
            </th>
            <th>
              <label>
                  <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={resultado7} onChange={(event) => setNewValor06(event.target.value)} />
              </label>
            </th>
          </tr>
          ):null}
          {newcantidad07 || newdescripcion07 || newvalor07 || resultado8 ? (
          <tr className='bg-white border-b'>
            <th>
              <label>
                 <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={newcantidad07} onChange={(event) => setNewCantidad07(event.target.value)} />
              </label>
            </th>
            <th>
              <label>
                <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={newdescripcion07} onChange={(event) => setNewDescripcion07(event.target.value)} />
              </label>
            </th>
            <th>
              <label>
                 <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={newvalor07} onChange={(event) => setNewValor07(event.target.value)} />
               </label>
            </th>
            <th>
              <label>
                  <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={resultado8} onChange={(event) => setNewValor07(event.target.value)} />
              </label>
            </th>
          </tr>
          ):null}
          {newcantidad08 || newdescripcion08 || newvalor08 || resultado9 ? (
          <tr className='bg-white border-b'>
            <th>
              <label>
                 <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={newcantidad08} onChange={(event) => setNewCantidad08(event.target.value)} />
              </label>
            </th>
            <th>
              <label>
                <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={newdescripcion08} onChange={(event) => setNewDescripcion08(event.target.value)} />
              </label>
            </th>
            <th>
              <label>
                 <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={newvalor08} onChange={(event) => setNewValor08(event.target.value)} />
               </label>
            </th>
            <th>
              <label>
                  <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={resultado9} onChange={(event) => setNewValor08(event.target.value)} />
              </label>
            </th>
          </tr>
          ):null}
          {newcantidad09 || newdescripcion09 || newvalor09 || resultado10 ? (
          <tr className='bg-white border-b'>
            <th>
              <label>
                 <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={newcantidad09} onChange={(event) => setNewCantidad09(event.target.value)} />
              </label>
            </th>
            <th>
              <label>
                <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={newdescripcion09} onChange={(event) => setNewDescripcion09(event.target.value)} />
              </label>
            </th>
            <th>
              <label>
                 <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={newvalor09} onChange={(event) => setNewValor09(event.target.value)} />
               </label>
            </th>
            <th>
              <label>
                  <input className='bg-gray-200 w-full p-1 rounded-md' type="text" value={resultado10} onChange={(event) => setNewValor09(event.target.value)} />
              </label>
            </th>
          </tr>
          ):null}
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