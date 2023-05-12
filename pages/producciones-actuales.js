import { useEffect, useCallback, useState } from "react"
import useCombustible from "../hooks/useCombustible"
import LayoutInformeAgr from "../layout/LayoutInformeAgr"
import useSWR from 'swr'
import axios from 'axios'
import InformeClasificado from '../components/InformeClasificado'
import {formatoNumero} from "helpers/formato";
import CamarasInforme from '../components/CamarasInforme'



export default function InformeAgr() {


    const fetcher = () => axios('/api/listado-producciones').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/listado-producciones',fetcher,{refreshInterval: 100} )

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


    const fetcherCamara1 = () => axios('/api/camara1').then(datos => datos.data)
    const { data: dataCamara1, error: errorCamara1, isLoading: isLoadingCamara1 } = useSWR('/api/camara1',fetcherCamara1,{refreshInterval: 100} )

    const fetcherCamara2 = () => axios('/api/camara2').then(datos => datos.data)
    const { data: dataCamara2, error: errorCamara2, isLoading: isLoadingCamara2 } = useSWR('/api/camara2',fetcherCamara2,{refreshInterval: 100} )

    const fetcherCamara3 = () => axios('/api/camara3').then(datos => datos.data)
    const { data: dataCamara3, error: errorCamara3, isLoading: isLoadingCamara3 } = useSWR('/api/camara3',fetcherCamara3,{refreshInterval: 100} )

    const [totalVolumen1, setTotalVolumen1] = useState(0);
    const [totalVolumen2, setTotalVolumen2] = useState(0);
    const [totalVolumen3, setTotalVolumen3] = useState(0);



    const sumarVolumenes1 = () => {
        let suma = 0;
        dataCamara1.forEach((seco) => {
            suma += seco.espesor * seco.ancho * seco.largo * seco.piezas * seco.cantidad / 1000000;
        
        });
        setTotalVolumen1(suma);
    };

    const sumarVolumenes2 = () => {
        let suma = 0;
        dataCamara2.forEach((seco) => {
            suma += seco.espesor * seco.ancho * seco.largo * seco.piezas * seco.cantidad / 1000000;
        
        });
        setTotalVolumen2(suma);
    };

    const sumarVolumenes3 = () => {
        let suma = 0;
        dataCamara3.forEach((seco) => {
            suma += seco.espesor * seco.ancho * seco.largo * seco.piezas * seco.cantidad / 1000000;
        
        });
        setTotalVolumen3(suma);
    };

    const [isVisibleproveedor, setIsVisibleproveedor] = useState(false);
      
    const toggleVisibilityproveedor = () => {
        setIsVisibleproveedor(!isVisibleproveedor);
    };
    const [cuadro, setCuadro] = useState(false);

    const toggleCuadro = () => {
        setCuadro(!cuadro);
    };

    

    function calcularVolumen() {
    sumarVolumenes();
    sumarVolumenesemp();
    }


    function calcularVolumensecado() {
        sumarVolumenes1();
        sumarVolumenes2();
        sumarVolumenes3();
        }


   return (
        <>
        <LayoutInformeAgr pagina='Informe-agr'>



            <div className={`${isVisibleproveedor ? 'hidden' : ''}`}>
                <div className={`${cuadro ? 'hidden' : ''}`}>
                    <h1 className="text-3xl font-black text-center py-2">Producciones Actuales</h1>
                    <p className='py-2 text-center pb-8'>Fecha: {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'numeric', year: 'numeric' })}</p>
                    
                    {data && data.length ? data.map(orden =>
                        
                        <InformeClasificado
                            key={orden.id}
                            orden={orden}
                            
                        />

                        ):
                        <p></p>
                    }

                    {dataEmpalillado && dataEmpalillado.length ? dataEmpalillado.map(emp =>
                        
                        <InformeClasificado
                            key={emp.id}
                            emp={emp}
                            
                        />

                        ):
                        <p className=''></p>
                    }
                        
                    <div className='grid gap-2 grid-cols-1 md:grid-cols-3 2xl:grid-cols-3'>  
                        <div className="border border-solid border-lime-500">
                            <p className="text-center uppercase font-bold text-xl">Aserradero</p>
                            <p className="text-center text-lg">{formatoNumero(totalVolumen)} m³</p>
                            <p className="text-center text-sm">{formatoNumero(totalVolumen / 9)} m³ Por Horas </p>
                        </div>
                        <div className="border border-solid border-lime-500">
                        <p className="text-center uppercase font-bold text-xl">Stacker</p>
                            <p className="text-center text-lg">{formatoNumero(totalVolumen01)} m³</p>
                            <p className="text-center text-sm">{formatoNumero(totalVolumen01 / 9)} m³ Por Horas </p>
                        </div>
                        <div className="border border-solid border-lime-500">
                        <p className="text-center uppercase font-bold text-xl">Clasificado</p>
                            <p className="text-center text-lg">{formatoNumero(totalVolumen)} m³</p>
                            <p className="text-center text-sm">{formatoNumero(totalVolumen / 9)} m³ Por Horas </p>
                        </div>
                    </div>
                </div>
            

                    <div className="text-center py-5 hover:scale-110 text-black font-bold">
                        <button className="text-black border border-solid border-lime-500 p-2" onClick={calcularVolumen}>
                            Generar Informe
                        </button>
                    </div>
            </div>
                    <div className="w-1/4 m-auto border border-solid border-lime-500">
                        <button
                            className="text-center py-2 hover:scale-110 text-black font-bold m-auto  w-full"
                            onClick={toggleVisibilityproveedor}            
                            >
                            {isVisibleproveedor ? '➖' : 'Camaras'}
                        </button>
                    </div>
                    {isVisibleproveedor && (
                    <div className="py-2 grid gap-2 grid-cols-1 md:grid-cols-1 2xl:grid-cols-1 ">
                        <h2 className="text-3xl font-black text-center py-2">Dentro Camaras</h2>
                        <p className="text-center uppercase font-bold text-xl">Camara 1</p>
                        <div className='grid gap-2 grid-cols-5 md:grid-cols-5 2xl:grid-cols-5'>
                            <p className="text-center uppercase font-bold text-xs">Ingreso</p>
                            <p className="text-center uppercase font-bold text-xs ">Detalle</p>
                            <p className="text-center uppercase font-bold text-xs">Cantidad</p>
                            <p className="text-center uppercase font-bold text-xs">Calidad</p>
                            <p className="text-center uppercase font-bold text-xs">m³</p>
                        </div>
                        <div className="border border-solid border-lime-500 rounded-xl">
                            {dataCamara1 && dataCamara1.length ? dataCamara1.map(seco =>
                                
                                <CamarasInforme
                                
                                    key={seco.id}
                                    seco={seco}
                                    
                                    
                                />
                                

                                ):
                                <p className='text-center m-10'>Sin Produccion</p>
                            }
                            <div className='grid gap-2 grid-cols-5 md:grid-cols-5 2xl:grid-cols-5'>
                                <p className="text-center uppercase font-bold text-xs"></p>
                                <p className="text-center uppercase font-bold text-xs"></p>
                                <p className="text-center uppercase font-bold text-xs"></p>
                                <p className="text-center uppercase font-bold text-xs">Total</p>
                                <p className="text-center uppercase font-bold text-xs">{formatoNumero(totalVolumen1)}</p>
                            </div>
                        </div>

                        <p className="text-center uppercase font-bold text-xl">Camara 2</p> 
                        <div className='grid gap-2 grid-cols-5 md:grid-cols-5 2xl:grid-cols-5'>
                            <p className="text-center uppercase font-bold text-xs">Ingreso</p>
                            <p className="text-center uppercase font-bold text-xs ">Detalle</p>
                            <p className="text-center uppercase font-bold text-xs">Cantidad</p>
                            <p className="text-center uppercase font-bold text-xs">Calidad</p>
                            <p className="text-center uppercase font-bold text-xs">m³</p>
                        </div>
                        <div className="border border-solid border-lime-500 rounded-xl">
                            {dataCamara2 && dataCamara2.length ? dataCamara2.map(seco =>
                                
                                <CamarasInforme
                                
                                    key={seco.id}
                                    seco={seco}
                                    
                                    
                                />
                                

                                ):
                                <p className='text-center m-10'>Sin Produccion</p>
                            }
                            <div className='grid gap-2 grid-cols-5 md:grid-cols-5 2xl:grid-cols-5'>
                                <p className="text-center uppercase font-bold text-xs"></p>
                                <p className="text-center uppercase font-bold text-xs"></p>
                                <p className="text-center uppercase font-bold text-xs"></p>
                                <p className="text-center uppercase font-bold text-xs">Total</p>
                                <p className="text-center uppercase font-bold text-xs">{formatoNumero(totalVolumen2)}</p>
                            </div>
                        </div>


                        <p className="text-center uppercase font-bold text-xl">Camara 3</p> 
                        <div className='grid gap-2 grid-cols-5 md:grid-cols-5 2xl:grid-cols-5'>
                            <p className="text-center uppercase font-bold text-xs">Ingreso</p>
                            <p className="text-center uppercase font-bold text-xs ">Detalle</p>
                            <p className="text-center uppercase font-bold text-xs">Cantidad</p>
                            <p className="text-center uppercase font-bold text-xs">Calidad</p>
                            <p className="text-center uppercase font-bold text-xs">m³</p>
                        </div>
                        <div className="border border-solid border-lime-500 rounded-xl">
                            {dataCamara3 && dataCamara3.length ? dataCamara3.map(seco =>
                                
                                <CamarasInforme
                                
                                    key={seco.id}
                                    seco={seco}
                                    
                                    
                                />
                                

                                ):
                                <p className='text-center m-10'>Sin Produccion</p>
                                
                            }
                            <div className='grid gap-2 grid-cols-5 md:grid-cols-5 2xl:grid-cols-5'>
                                <p className="text-center uppercase font-bold text-xs"></p>
                                <p className="text-center uppercase font-bold text-xs"></p>
                                <p className="text-center uppercase font-bold text-xs"></p>
                                <p className="text-center uppercase font-bold text-xs">Total</p>
                                <p className="text-center uppercase font-bold text-xs">{formatoNumero(totalVolumen3)}</p>
                            </div>
                            
                        </div>
                    </div>
                    
                    ) }
                    {isVisibleproveedor && (                        
                    <div className="text-center py-5 hover:scale-110 text-black font-bold">
                        <button className="text-black border border-solid border-lime-500 p-2" onClick={calcularVolumensecado}>
                            Calcular Total
                        </button>
                    </div>
                    ) }

                    
                  

                

            



        </LayoutInformeAgr>
        </>
        
        
   )
}