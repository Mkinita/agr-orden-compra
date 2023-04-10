import Link from "next/link"
import { useEffect, useCallback, useState } from "react"

export const SidebarAdmin = () => {

   const [isVisible, setIsVisible] = useState(false);
   const [isVisible1, setIsVisible1] = useState(false);
   const [isVisible2, setIsVisible2] = useState(false);
      
   const toggleVisibility = () => {
     setIsVisible(!isVisible);
   };

   const toggleVisibility1 = () => {
    setIsVisible1(!isVisible1);
  };


  const toggleVisibility2 = () => {
    setIsVisible2(!isVisible2);
  };



    return (
      <div class="px-3 py-4 overflow-y-auto rounded bg-white">
        <ul class="space-y-2">

         </ul>

        </div>
    )
  }
  
  
  export default SidebarAdmin