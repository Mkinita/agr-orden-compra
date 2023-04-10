import Image from "next/image"
import useCombustible from "../hooks/useCombustible"

const Categoria = ({faena}) => {
    const {faenaActual, handleClickFaena} = useCombustible()
    const {nombre,id} = faena
  return (
    <div
      className={`${
        faenaActual?.id === id ? "bg-amber-400" : ""
      } flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}
    >
      📍
        <button
            type="button"
            className="text-2xl font-bold hover:cursor-pointer"
            onClick={() => handleClickFaena(id) }>
            {nombre}
        </button>
    </div>
  )
}





export default Categoria