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


      const toggleVisibility3 = () => {
        setIsVisible3(!isVisible3);
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
               {isVisible ? '➖ CLASIFICACION' : '📋 CLASIFICACION'}
            </button>
                        
                  
            <div className="">
            
                {isVisible && (
            <div className="p-2 space-y-1">
                

                <li>
                        <Link href="/" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                            ➕
                            <span class="ml-3">Ingresar Produccion</span>
                        </Link>
                    </li>

                    <li>
                        <Link href="/saldos" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                            ➕
                            <span class="ml-3">Ingresar Saldos</span>
                        </Link>
                    </li>


                    <li>
                        <Link href="/listado-producciones" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                            📆
                            <span class="ml-3">Produccion Actual</span>
                        </Link>
                    </li>


                    <li>
                        <Link href="/listado-produciones-fecha" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                            📅
                            <span class="ml-3">Producciones</span>
                        </Link>

                        
                    </li>


                    <li>
                        <Link href="/acumulado" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                            📅
                            <span class="ml-3">Acumulado {currentMonth}</span>
                        </Link>

                        
                    </li>


                    <li>
                        <Link href="/listado-producciones.-saldo" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                            📝
                            <span class="ml-3">Saldos Actual</span>
                        </Link>
                    </li>


                    <li>
                        <Link href="/imprecion-etiqueta" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                            🎫
                            <span class="ml-3">Etiquetas</span>
                        </Link>
                    </li>

                    <li>
                        <Link href="/imprecion-etiqueta-saldo" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                            🎫
                            <span class="ml-3">Etiquetas Saldo</span>
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
               {isVisible1 ? '➖ STACKER' : '📋 STACKER'}
            </button>
                        
                  
            <div className="">
            
                {isVisible1 && (
            <div className="p-2 space-y-1">
                

                

                <li>
                        <Link href="/ingreso-empalillado" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                            ➕
                            <span class="ml-3">Ingreso Produccion</span>
                        </Link>
                    </li>


                    <li>
                        <Link href="/empalillado-actual" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                            📆
                            <span class="ml-3">Produccion Actual</span>
                        </Link>
                    </li>

                    <li>
                        <Link href="/listado-produciones-fecha-emp" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                            📅
                            <span class="ml-3">Producciones</span>
                        </Link>

                        
                    </li>


                    
                    <li>
                        <Link href="/acumulado-stacker" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                            📅
                            <span class="ml-3">Acumulado {currentMonth}</span>
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
               {isVisible2 ? '➖ SECADO' : '📋 SECADO'}
            </button>
                        
                  
            <div className="">
            
                {isVisible2 && (
            <div className="p-2 space-y-1">
                

                

                <li>
                        <Link href="/ingreso-camaras" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                            ➕
                            <span class="ml-3">Ingreso Produccion</span>
                        </Link>
                    </li>

                    <li>
                        <Link href="/dentro-camaras" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                            📋
                            <span class="ml-3">Dentro Camaras</span>
                        </Link>
                    </li>


                    <li>
                        <Link href="/acumulado-secado" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                            📅
                            <span class="ml-3">Acumulado {currentMonth}</span>
                        </Link>  
                    </li>

                    

                    


            </div>
            
                )}

               </div>
           </li>


           <li>
           <button
            className="flex w-full items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase"
            onClick={toggleVisibility3}
                            
            >
               {isVisible3 ? '➖ ASERRADERO' : '📋 ASERRADERO'}
            </button>
                        
                  
            <div className="">
            
                {isVisible3 && (
            <div className="p-2 space-y-1">
                

                

                <li>
                        <Link href="/ingreso-aserradero" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                            ➕
                            <span class="ml-3">Ingreso Produccion</span>
                        </Link>
                    </li>

                    <li>
                        <Link href="/aserradero-actual" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                            📆
                            <span class="ml-3">Produccion Actual</span>
                        </Link>
                    </li>


                    <li>
                        <Link href="/acumulado-asr" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                            📅
                            <span class="ml-3">Acumulado {currentMonth}</span>
                        </Link>  
                    </li>

                    


            </div>
            
                )}

               </div>
           </li>

           



                    


                    <li>
                        <Link href="/stock-terminado" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                            🔧
                            <span class="ml-3">Stock / Pedidos</span>
                        </Link>
                    </li>

                
                

                    
                </ul>



                

                


                
            </div>
        </>
    )
}


export default Sidebar