import Link from "next/link"
import { useEffect, useCallback, useState } from "react"

export const SidebarAdmin = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);
        
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

    const toggleVisibility4 = () => {
        setIsVisible4(!isVisible4);
    };



    return (
      <div class="px-3 py-4 overflow-y-auto rounded bg-white">
        <ul class="space-y-2">


        <li>
           <button
            className="w-full flex items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase"
            onClick={toggleVisibility4}
                            
            >
               {isVisible4 ? '➖ Informes' : '📋 Informes'}
            </button>
                        
                  
            <div className="">
            
                {isVisible4 && (
            <div className="p-2 space-y-1">


           <li>
              <Link href="/listado-total" class="flex items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase">
                  📊
                  <span class="ml-3">Informe</span>
              </Link>
           </li>

           <li>
              <Link href="/listado-aserradero" class="flex items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase">
                  📊
                  <span class="ml-3">Informe Produccion</span>
              </Link>
           </li>


           <Link href="/control-pedidos-informe" class="flex items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase">
                  📋
                  <span class="ml-3">Informe Pedidos</span>
              </Link>


           


           
            </div>
            
                )}

               </div>
           </li>


           <li>
                <Link href="/producciones-actuales" class="flex items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase">
                    <span class="">⌚ Producciones Actuales</span>
                </Link>
            </li>

        


        <li>
           <button
            className="w-full flex items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase"
            onClick={toggleVisibility1}
                            
            >
               {isVisible1 ? '➖ Stock' : '📋 Stock'}
            </button>
                        
                  
            <div className="">
            
                {isVisible1 && (
            <div className="p-2 space-y-1">

           

            <Link href="/stock-terminado-informe" class="flex items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase">
                  📋
                  <span class="ml-3">Stock Terminado</span>
              </Link>

              {/* <Link href="/control-pedidos-informe" class="flex items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase">
                  📋
                  <span class="ml-3">Stock Verde</span>
              </Link> */}

              

           <li>
           

              
           </li>
           
            </div>
            
                )}

               </div>
           </li>
           
           




           


           

           



           

         </ul>



         
            


        </div>
    )
  }
  
  
  export default SidebarAdmin