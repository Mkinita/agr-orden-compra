
import LayoutInformeAgr from "../layout/LayoutInformeAgr"
import Image from "next/image"




export default function InformeAgr() {


    

   return (
        
        <LayoutInformeAgr pagina='Informe-agr'>
         <div className="py-4">
            <Image width={380} height={200} src="/assets/img/inicioadmin.gif" alt="logo" className="m-auto"/>
         </div>
        </LayoutInformeAgr>
        
        
   )
}