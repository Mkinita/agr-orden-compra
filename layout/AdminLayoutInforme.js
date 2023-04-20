import Head from "next/head";
import SidebarAdminInforme from "../components/SidebarAdminInforme";
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

      <div className="">
            <aside className="">
              
                      

                <SidebarAdminInforme/>
            </aside>

            

            <main className="">
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