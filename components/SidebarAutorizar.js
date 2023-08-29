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
                            {isVisible ? '➖ Ordenes de compra' : '📋 Ordenes de compra'}
                        </button>
                                        
                                
                        <div className="">
                            
                            {isVisible && (
                            <div className="p-2 space-y-1">
                                

                                <li>
                                    <Link href="autorizar" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                                        🔐
                                        <span class="ml-3">Autorizar Ordenes De Compra</span>
                                    </Link>
                                </li>


                                <li>
                                    <Link href="/orden-autorizada" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                                        ✔️
                                        <span class="ml-3">Ordenes Atorizadas</span>
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
                            {isVisible1 ? '➖ Recepcion' : '📦 Recepcion'}
                        </button>
                                        
                                
                        <div className="">
                            
                            {isVisible1 && (
                            <div className="p-2 space-y-1">
                                
                            
                                <li>
                                    <Link href="conforme-admin" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                                        ✔️
                                        <span class="ml-3">Conforme</span>
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