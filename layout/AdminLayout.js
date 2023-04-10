import Head from "next/head";
import SidebarAdmin from "../components/SidebarAdmin";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalPedidos from "../components/ModalPedidos";
import Modal from "react-modal"
import useCombustible from "../hooks/useCombustible";
import 'react-toastify/dist/ReactToastify.css'


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '390px',
    height: '350px',
    maxWidth: '100%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function AdminLayout({ children, pagina }) {
  const {modal} = useCombustible()
  return (
    <>
      <Head>
        <title>Control - {pagina}</title>
        <meta name="description" content="RestoApp" />
      </Head>

      <div className="md:flex">
            <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5">
                <Image
                    className="m-auto"
                    width={300}
                    height={100}
                    src="/assets/img/agr.png"
                    alt="imagen logotipo"
                />      

                <SidebarAdmin/>
            </aside>

            

            <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                <div className="p-10">
                    {children}
                </div>
            </main>
      </div>
      {modal && (
        <Modal isOpen={modal} style={customStyles}>
          <ModalPedidos />
        </Modal>
      )}
      <ToastContainer />

      
    </>
  );
}