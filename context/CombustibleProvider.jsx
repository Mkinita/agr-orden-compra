import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

const CombustibleContext = createContext()


const CombustibleProvider = ({children}) => {

    const router = useRouter()
    const [articulo, setArticulo] = useState({})
    const [nombre, setNombre] = useState('')
    const [nombre01, setNombre01] = useState('Gavino Ugalde')
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])
    const [solicitud, setSolicitud] = useState({})
    const [fecha, setFecha] = useState('')
    const [area, setArea] = useState('')




    const handlesetArticulo = articulo => {
        setArticulo(articulo)
    }


    const handlesetOcpedidos = solicitud => {
        setSolicitud(solicitud)
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }


    const handleEditarCantidades = id => {
        const productoActualizar = pedido.filter( articulo => articulo.id === id)
        setArticulo(productoActualizar[0])
        setModal(!modal)
    }



    const handleElimanarSolicitud = id => {
        const pedidoActualizado = pedido.filter( articulo => articulo.id !== id)
        setPedido(pedidoActualizado)
        toast.error('Solicitud Eliminada')
    }

    const handleAgregarPedido = ({...articulo}) => {
        if(pedido.some(articuloState => articuloState.id === articulo.id)) {
           // Actualizar la cantidad
           const pedidoActualizado = pedido.map(articuloState => articuloState.id === articulo.id ? articulo : articuloState)
           setPedido(pedidoActualizado)

           toast.success('Guardado Correctamente')
           setTimeout(() =>{
            router.push('/resumen')
        },500)
        } else {
            setPedido([...pedido, articulo])
            toast.success('Agregado Solicitud')

            setTimeout(() =>{
                router.push('/resumen')
            },500)
        }

        setModal(false)
        
    }



    const agregarArticulo = async (e) => {
        e.preventDefault()

        try {
           await axios.post('/api/articulo',{nombre})
            // Resetear la app
            setNombre('')
            toast.success('Agregando ⏳')

            setTimeout(() =>{
                router.push('/agregar-solicitud')
            },3000)

        } catch (error) {
            console.log(error)
        }
    }



    const agregarSolicitud01 = async (e) => {
        e.preventDefault()

        try {
           await axios.post('/api/solicitud',{pedido,nombre01,area,fecha: new Date()})
            // Resetear la app
            setNombre01('Gavino Ugalde')
            setArea('')
            setFecha('')
            setPedido([])
            toast.success('Agregando ⏳')

            setTimeout(() =>{
                router.push('/agregar-solicitud')
            },3000)

        } catch (error) {
            console.log(error)
        }
    }




    return(
        <CombustibleContext.Provider
        value={{
            articulo,
            nombre,setNombre,
            nombre01,setNombre01,
            pedido,setPedido,
            modal,setModal,
            area, setArea,
            solicitud,setSolicitud,

            agregarArticulo,
            agregarSolicitud01,

            handlesetArticulo,
            handlesetOcpedidos,
            handleChangeModal,
            handleAgregarPedido,
            handleEditarCantidades,
            handleElimanarSolicitud
        }}
        >
        {children}
        </CombustibleContext.Provider>
    )

}
export {
    CombustibleProvider
}


export default CombustibleContext