import Image from "next/image";
import Link from "next/link"
import { useEffect, useCallback, useState } from "react"

const Sidebar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [currentMonth, setCurrentMonth] = useState('');

    useEffect(() => {
        const date = new Date();
        const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        setCurrentMonth(monthNames[date.getMonth()]);
    }, []);

       
    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };


    
 
    

    return(
        <>
            <Image width={280} height={100} src="/assets/img/AGRF.png" alt="logo" className="m-auto"/>

            <div class="px-3 py-4 overflow-y-auto rounded bg-white">
                <ul class="space-y-2">
                    <li>
                        <Link href="/solicitudes" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                            💬
                            <span class="ml-3">Solicitides</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/cotizacion" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                            💬
                            <span class="ml-3">Solicitud Cotizaciones</span>
                        </Link>
                    </li>
                    <li>
                        <button
                            className="flex w-full items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase"
                            onClick={toggleVisibility}
                                            
                        >
                            {isVisible ? '➖ Ordenes de compra' : '📋 Ordenes de compra'}
                        </button>
                                        
                                
                        <div className="">
                            
                            {isVisible && (
                            <div className="p-2 space-y-1">
                                

                                <li>
                                    <Link href="/solicitudes" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                                        👁
                                        <span class="ml-3">Generar Orden De Compra</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/cotizacion" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                                        ⌚
                                    <span class="ml-3">Solicitud Cotizaciones</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/solicitud-pendiente-gavino" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                                        ⌚
                                    <span class="ml-3">Estado Solicitud</span>
                                    </Link>
                                </li>
                                

                                <li>
                                    <Link href="/solicitudes-gavino" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                                        📆
                                        <span class="ml-3">Mis Solicitudes</span>
                                    </Link>
                                </li>
                            </div>
                            
                            )}

                        </div>
                    </li>

                    
                </ul> 
            </div>
        </>
    )
}


export default Sidebar