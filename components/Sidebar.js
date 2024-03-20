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

    const toggleVisibility1 = () => {
        setIsVisible1(!isVisible1);
    };

    const toggleVisibility2 = () => {
        setIsVisible2(!isVisible2);
    };    


    
 
    

    return(
        <>
            <Image width={280} height={100} src="/assets/img/AGRF.png" alt="logo" className="m-auto"/>

            <div class="px-3 py-4 overflow-y-auto rounded bg-white">
                <ul class="space-y-2">
                    <li>
                        <button
                            className="flex w-full items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase"
                            onClick={toggleVisibility}
                                            
                        >
                            {isVisible ? '➖ SOLICITUD' : '📋 SOLICITUD'}
                        </button>
                                        
                                
                        <div className="">
                            
                            {isVisible && (
                            <div className="p-2 space-y-1">
                                

                                <li>
                                    <Link href="/generar-solicitud" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                                        ➕
                                        <span class="ml-3">Generar Solicutud</span>
                                    </Link>
                                </li>


                                <li>
                                    <Link href="/solicitud-pendiente-gavino" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                                        ⌚
                                    <span class="ml-3">Estado Solicitud</span>
                                    </Link>
                                </li>

                                
                            </div>
                            
                            )}

                        </div>
                    </li>

                    <li>
                        <button
                            className="flex w-full items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase"
                            onClick={toggleVisibility1}
                                            
                        >
                            {isVisible1 ? '➖ Ordenes de compra' : '📋 Ordenes de compra'}
                        </button>
                                        
                                
                        <div className="">
                            
                            {isVisible1 && (
                            <div className="p-2 space-y-1">
                                

                                <li>
                                    <Link href="autorizar-oc" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                                        🔐
                                        <span class="ml-3">Autorizar OC</span>
                                    </Link>
                                </li>


                                <li>
                                    <Link href="/orden-autorizada-oc" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                                        ✔️
                                        <span class="ml-3">Ordenes Autorizadas</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="estado-ordenes" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                                        📊
                                        <span class="ml-3">Estado De Ordenes</span>
                                    </Link>
                                </li>

                                
                            </div>
                            
                            )}
                        </div>
                    </li>


                    <li>
                        <button
                            className="flex w-full items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase"
                            onClick={toggleVisibility2}
                                            
                        >
                            {isVisible2 ? '➖ Recepcion' : '📦 Recepcion'}
                        </button>
                                        
                                
                        <div className="">
                            
                            {isVisible2 && (
                            <div className="p-2 space-y-1">

                                <li>
                                    <Link href="/entrega" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                                        ✍️
                                        <span class="ml-3">Firma Conforme</span>
                                    </Link>
                                </li>
                                
                                



                                <li>
                                    <Link href="conforme" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                                        ✔️
                                        <span class="ml-3">Conforme</span>
                                    </Link>
                                </li>


                                

                                
                            </div>
                            
                            )}
                        </div>
                    </li>

                    <li>
                        <Link href="gavino-pendientes" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                            ⏱️
                            <span class="ml-3">Pendientes</span>
                        </Link>
                    </li>


                    <li>
                        <Link href="/notificacion-revision" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                            </svg>
                            <span class="ml-3">Revisión</span>
                        </Link>
                    </li>


                </ul> 
            </div>
        </>
    )
}


export default Sidebar