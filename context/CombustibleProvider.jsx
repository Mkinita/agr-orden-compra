import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

const CombustibleContext = createContext()


const CombustibleProvider = ({children}) => {

    const router = useRouter()
    const [nombre, setNombre] = useState('')
    const [nombreproveedor, setNombreproveedor] = useState('')
    const [rut, setRut] = useState ('')
    const [fecha, setFecha] = useState('')
    const [area, setArea] = useState('')
    const [valor, setValor] = useState('0')
    const [nombre01, setNombre01] = useState('')
    const [firma, setFirma] = useState ('')
    
    const [solicita, setSolicita] = useState([]);

    const [cotizacion, setCotizacion] = useState('')
    const [atencion, setAtencion] = useState('')
    const [numerosoli, setNumeroSoli] = useState('')
    const [pago, setPago] = useState('-')

    const [cantidades, setCantidades] = useState('');
    const [detalles, setDetalles] = useState('');
    const [valores, setValores] = useState('');

    const [cantidad01 , setCantidad01] = useState('');
    const [detalle01, setDetalle01] = useState('');
    const [valor01, setValore01] = useState('');

    const [cantidad02, setCantidad02] = useState('')
    const [descripcion02, setDescripcion02] = useState('')
    const [valor02, setValor02] = useState('')

    const [cantidad03, setCantidad03] = useState('')
    const [descripcion03, setDescripcion03] = useState('')
    const [valor03, setValor03] = useState('')

    const [cantidad04, setCantidad04] = useState('')
    const [descripcion04, setDescripcion04] = useState('')
    const [valor04, setValor04] = useState('')

    const [cantidad05, setCantidad05] = useState([])
    const [descripcion05, setDescripcion05] = useState([])
    const [valor05, setValor05] = useState('')

    const [cantidad06, setCantidad06] = useState([])
    const [descripcion06, setDescripcion06] = useState([])
    const [valor06, setValor06] = useState('')

    const [cantidad07, setCantidad07] = useState([])
    const [descripcion07, setDescripcion07] = useState([])
    const [valor07, setValor07] = useState('')

    const [cantidad08, setCantidad08] = useState([])
    const [descripcion08, setDescripcion08] = useState([])
    const [valor08, setValor08] = useState('')

    const [cantidad09, setCantidad09] = useState([])
    const [descripcion09, setDescripcion09] = useState([])
    const [valor09, setValor09] = useState('')

    const [modal, setModal] = useState(false)

    const [pedido, setPedido] = useState([])
    const [pedido01, setPedido01] = useState([])
    const [orden, setOrden] = useState([])

    const [articulo, setArticulo] = useState({})
    const [solicitud, setSolicitud] = useState({})
    const [proveedor, setProveedor] = useState({})


    
    





    const handlesetArticulo = articulo => {
        setArticulo(articulo)
    }


    const handlesetOcpedidos = solicitud => {
        setSolicitud(solicitud)
    }

    const handlesetProveedor = proveedor => {
        setProveedor(proveedor)
    }

    

    const handlesetOrden = orden => {
        setOrden(orden)
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }

    const handleElimanarproveedor = id => {
        const proveedoreliminado = pedido01.filter( proveedor => proveedor.id !== id)
        setPedido01(proveedoreliminado)
        toast.error('Solicitud Eliminada')
        setTimeout(() =>{
            router.push('/proveedores')
        },2000)
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

    const handleAgregarOrden = ({...proveedor}) => {
        if(pedido01.some(proveedorState => proveedorState.id === proveedor.id)) {
           

           toast.success('Guardado Correctamente')
           setTimeout(() =>{
            router.push('/resumen-oc')
        },500)
        } else {
            setPedido01([...pedido01, proveedor])
            toast.success('Agregado Solicitud')

            setTimeout(() =>{
                router.push('/resumen-oc')
            },500)
        }
        setModal(false)
    }



    const handleAgregarOrdenSolicitud = ({...solicitud}) => {
        if(pedido.some(solicitudState => solicitudState.id === solicitud.id)) {
           

           toast.success('Guardado Correctamente')
           setTimeout(() =>{
            router.push('/proveedores')
        },500)
        } else {
            setPedido([...pedido, solicitud])
            toast.success('Agregado Solicitud')

            setTimeout(() =>{
                router.push('/proveedores')
            },500)
        }
        setModal(false)
    }


    



    const agregarArticulo = async (e) => {
        e.preventDefault()

        try {
           await axios.post('/api/articulo',{nombre,valor})
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


    const agregarProveedor = async (e) => {
        e.preventDefault()

        try {
           await axios.post('/api/proveedor',{nombreproveedor, rut})
            // Resetear la app
            setNombreproveedor('')
            setRut('')
            toast.success('Agregando ⏳')

            setTimeout(() =>{
                router.push('/listado-proveedores')
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

    const AgregarNuevaSolicitud = async (e) => {
        e.preventDefault();

        try {
            await axios.post('/api/nuevasolicitud',
            {   
                cantidades,detalles,valores,
                cantidad01,detalle01,valor01,
                cantidad02,descripcion02,valor02,
                cantidad03,descripcion03,valor03,
                cantidad04,descripcion04,valor04,firma,
                nombre01,area,fecha: new Date()
            })
            //resetear la app
            setFirma('')
            setNombre01('')
            setArea('')
            setFecha('')
            setCantidades('')
            setDetalles('')
            setValores('')
            setCantidad01('')
            setDetalle01('')
            setValore01('')
            setCantidad02('')
            setCantidad03('')
            setCantidad04('')
            setDescripcion02('')
            setDescripcion03('')
            setDescripcion04('')
            setValor02('')
            setValor03('')
            setValor04('')
            toast.success('Genrando Solicitud ⏳')
            setTimeout(() =>{
                router.push('/notificar-solicitud')
            },3000)

        } catch (error) {
            
        }
    }


    const AgregarNuevaSolicitudCarlos = async (e) => {
        e.preventDefault();

        try {
            await axios.post('/api/nuevasolicitudcarlos',
            {   
                cantidades,detalles,valores,
                cantidad01,detalle01,valor01,
                cantidad02,descripcion02,valor02,
                cantidad03,descripcion03,valor03,
                cantidad04,descripcion04,valor04,
                cantidad05,descripcion05,valor05,
            cantidad06,descripcion06,valor06,
            cantidad07,descripcion07,valor07,
            cantidad08,descripcion08,valor08,
            cantidad09,descripcion09,valor09,
            firma,
                nombre01,area,fecha: new Date()
            })
            //resetear la app
            setFirma('')
            setNombre01('')
            setArea('')
            setFecha('')
            setCantidades('')
            setDetalles('')
            setValores('')
            setCantidad01('')
            setDetalle01('')
            setValore01('')
            setCantidad02('')
            setCantidad03('')
            setCantidad04('')
            setCantidad05([])
            setCantidad06([])
            setCantidad07([])
            setCantidad08([])
            setCantidad09([])
            setDescripcion02([])
            setDescripcion03([])
            setDescripcion04([])
            setDescripcion05([])
            setDescripcion06([])
            setDescripcion07([])
            setDescripcion08([])
            setDescripcion09([])
            setValor02('')
            setValor03('')
            setValor04('')
            setValor05('')
            setValor06('')
            setValor07('')
            setValor08('')
            setValor09('')
            toast.success('Genrando Solicitud ⏳')
            setTimeout(() =>{
                router.push('/notificar-solicitud-carlos')
            },3000)

        } catch (error) {
            
        }
    }



    const agregarOC = async (e) => {
        e.preventDefault()

        try {
           await axios.post('/api/ordencompra',{area,pedido01,numerosoli,cotizacion,atencion,solicita,cantidades,detalles,valores,
            cantidad01,detalle01,valor01,fecha: new Date(),
            cantidad02,descripcion02,valor02,
            cantidad03,descripcion03,valor03,
            cantidad04,descripcion04,valor04,
            cantidad05,descripcion05,valor05,
            cantidad06,descripcion06,valor06,
            cantidad07,descripcion07,valor07,
            cantidad08,descripcion08,valor08,
            cantidad09,descripcion09,valor09})
            // Resetear la app
            setArea('')
            setNumeroSoli('')
            setCotizacion('')
            setSolicita([])
            setPedido01([])
            setCantidades([])
            setDetalles([])
            setValores('')
            setCantidad01([])
            setDetalle01([])
            setValore01('')
            setCantidad02([])
            setCantidad03([])
            setCantidad04([])
            setCantidad05([])
            setCantidad06([])
            setCantidad07([])
            setCantidad08([])
            setCantidad09([])
            setDescripcion02([])
            setDescripcion03([])
            setDescripcion04([])
            setDescripcion05([])
            setDescripcion06([])
            setDescripcion07([])
            setDescripcion08([])
            setDescripcion09([])
            setValor02('')
            setValor03('')
            setValor04('')
            setValor05('')
            setValor06('')
            setValor07('')
            setValor08('')
            setValor09('')
            setAtencion('')
            toast.success('Agregando ⏳')

            setTimeout(() =>{
                router.push('/contact')
            },3000)

        } catch (error) {
            console.log(error)
        }
    }


    const crearOC = async (e) => {
        e.preventDefault()

        try {
           await axios.post('/api/crearordencompra',{pedido,pedido01,pago,cotizacion,atencion,solicita,fecha: new Date(),})
            // Resetear la app
            setPago('')
            setArea('')
            setNumeroSoli('')
            setCotizacion('')
            setSolicita([])
            setPedido01([])
            setPedido([])
            setCantidades([])
            setDetalles([])
            setValores('')
            setCantidad01([])
            setDetalle01([])
            setValore01('')
            setCantidad02([])
            setCantidad03([])
            setCantidad04([])
            setCantidad05([])
            setCantidad06([])
            setCantidad07([])
            setCantidad08([])
            setCantidad09([])
            setDescripcion02([])
            setDescripcion03([])
            setDescripcion04([])
            setDescripcion05([])
            setDescripcion06([])
            setDescripcion07([])
            setDescripcion08([])
            setDescripcion09([])
            setValor02('')
            setValor03('')
            setValor04('')
            setValor05('')
            setValor06('')
            setValor07('')
            setValor08('')
            setValor09('')
            setAtencion('')
            toast.success('Agregando ⏳')

            setTimeout(() =>{
                router.push('/pdf-imprimir')
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
            pedido01,setPedido01,
            modal,setModal,
            area, setArea,
            solicitud,setSolicitud,
            numerosoli,setNumeroSoli,
            nombreproveedor,setNombreproveedor,
            rut,setRut,
            proveedor,setProveedor,
            orden,setOrden,
            valor,setValor,
           
            solicita,setSolicita,
            cantidades,setCantidades,
            detalles,setDetalles,
            valores,setValores,
            cantidad01 , setCantidad01,
            detalle01, setDetalle01,
            valor01, setValore01,

            valor02,setValor02,
            cantidad02,setCantidad02,
            descripcion02,setDescripcion02,

            valor03,setValor03,
            cantidad03,setCantidad03,
            descripcion03,setDescripcion03,

            valor04,setValor04,
            cantidad04,setCantidad04,
            descripcion04,setDescripcion04,

            valor05,setValor05,
            cantidad05,setCantidad05,
            descripcion05,setDescripcion05,

            valor06,setValor06,
            cantidad06,setCantidad06,
            descripcion06,setDescripcion06,

            valor07,setValor07,
            cantidad07,setCantidad07,
            descripcion07,setDescripcion07,

            valor08,setValor08,
            cantidad08,setCantidad08,
            descripcion08,setDescripcion08,

            valor09,setValor09,
            cantidad09,setCantidad09,
            descripcion09,setDescripcion09,

            atencion,setAtencion,
            cotizacion,setCotizacion,
            pago,setPago,
            


            agregarArticulo,
            agregarSolicitud01,
            agregarProveedor,
            agregarOC,
            handleAgregarOrden,
            AgregarNuevaSolicitud,
            crearOC,
            

            handlesetProveedor,
            handlesetOrden,
            handlesetArticulo,
            handlesetOcpedidos,
            handleChangeModal,
            handleAgregarPedido,
            handleAgregarOrdenSolicitud,
            handleEditarCantidades,
            handleElimanarSolicitud,
            handleElimanarproveedor,
            AgregarNuevaSolicitudCarlos
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