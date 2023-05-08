import { useEffect, useCallback, useState } from "react"
import useCombustible from "../hooks/useCombustible"
import LayoutInformeAgr from "../layout/LayoutInformeAgr"
import useSWR from 'swr'
import axios from 'axios'
import InformeClasificado from '../components/InformeClasificado'
import {formatoNumero} from "helpers/formato";
import EmpalilladoActual from '../components/EmpalilladoActual'



export default function InformeAgr() {


    const fetcher = () => axios('/api/listado-producciones').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/listado-producciones',fetcher,{refreshInterval: 100} )


    // const fetcher01 = () => axios('/api/empalillado-actual').then(datos => datos.data)
    // const { data01, error01, isLoading01 } = useSWR('/api/empalillado-actual',fetcher01,{refreshInterval: 100} )


    const fetcherEmpalillado = () => axios('/api/empalillado-actual').then(datos => datos.data)
    const { data: dataEmpalillado, error: errorEmpalillado, isLoading: isLoadingEmpalillado } = useSWR('/api/empalillado-actual', fetcherEmpalillado, {refreshInterval: 100})


    



  


    const [totalVolumen, setTotalVolumen] = useState(0);
    const [totalVolumen01, setTotalVolumen01] = useState(0);


    const sumarVolumenes = () => {
        let suma = 0;
        data.forEach((orden) => {
        orden.pedido.forEach((oc) => {
            suma += oc.espesor * oc.ancho * oc.largo * oc.piezas * oc.cantidad / 1000000;
        });
        });
    setTotalVolumen(suma);
    };

    const sumarVolumenesemp = () => {
        let sumas = 0;
        dataEmpalillado.forEach((emp) => {
            sumas += emp.espesor * emp.ancho * emp.largo * emp.piezas * emp.cantidad / 1000000;
          
        });
        setTotalVolumen01(sumas);
    };


    




    function calcularVolumen() {
    sumarVolumenes();
    sumarVolumenesemp();
    }


   return (
        
        <LayoutInformeAgr pagina='Informe-agr'>




          <h1 className="text-3xl font-black text-center">Produccion Actual</h1>
            <p className='py-2 text-center'>Fecha: {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'numeric', year: 'numeric' })}</p>
            <p className="text-2xl my-10"></p>
            {data && data.length ? data.map(orden =>
                
                <InformeClasificado
                    key={orden.id}
                    orden={orden}
                    
                />

                ):
                <p className='text-center m-10'>Sin Produccion</p>
            }

            {dataEmpalillado && dataEmpalillado.length ? dataEmpalillado.map(emp =>
                
                <InformeClasificado
                    key={emp.id}
                    emp={emp}
                    
                />

                ):
                <p className='text-center m-10'>Sin Produccion</p>
            }
                
            <div className='grid gap-3 grid-cols-2 md:grid-cols-3 2xl:grid-cols-4'>  
                <div className="border border-solid border-lime-500">
                    <p className="text-center uppercase font-bold text-2xl">Aserrdero</p>
                    <p className="text-center text-lg">{formatoNumero(totalVolumen)} m³</p>
                    <p className="text-center text-sm">{formatoNumero(totalVolumen / 9)} m³ Por Horas </p>
                </div>
                <div className="border border-solid border-lime-500">
                <p className="text-center uppercase font-bold text-2xl">Stacker</p>
                    <p className="text-center text-lg">{formatoNumero(totalVolumen01)} m³</p>
                    <p className="text-center text-sm">{formatoNumero(totalVolumen01 / 9)} m³ Por Horas </p>
                </div>
                <div className="border border-solid border-lime-500">
                <p className="text-center uppercase font-bold text-2xl">Clasificado</p>
                    <p className="text-center text-lg">{formatoNumero(totalVolumen)} m³</p>
                    <p className="text-center text-sm">{formatoNumero(totalVolumen / 9)} m³ Por Horas </p>
                </div>
                <div className="border border-solid border-lime-500">
                <p className="text-center uppercase font-bold text-2xl">Secado</p>
                    <p className="text-center text-lg">{formatoNumero(totalVolumen)} m³</p>
                    <p className="text-center text-sm">{formatoNumero(totalVolumen / 9)} m³ Por Horas </p>
                </div>                
            </div>

            <div className="text-center py-5">
            <button className="text-black" onClick={calcularVolumen}>Calcular Volumen</button>
            </div>
            

                

                

        </LayoutInformeAgr>
        
        
   )
}