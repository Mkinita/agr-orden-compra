import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Sidebar = () => {

    const router = useRouter();
    const [nombre, setNombre] = useState("");

    useEffect(() => {
        const usuario = localStorage.getItem("usuario");

        if (!usuario) {
            router.push("/inicio");
            return;
        }

        setNombre(usuario);

    }, []);

    const cerrarSesion = () => {
        localStorage.removeItem("usuario");
        router.push("/inicio");
    };

    return (
        <>
            <Image
                width={280}
                height={100}
                src="/assets/img/AGRF.png"
                alt="logo"
                className="mx-auto"
            />

            <div className="text-center py-3 font-bold text-lg">
                👤 {nombre}
            </div>

            <div className="px-3 py-4 bg-white rounded">

                <ul className="space-y-3">

                    <li>
                        <Link
                            href="/bienvenido"
                            className="flex items-center p-2 font-bold rounded-lg bg-amber-400 hover:bg-amber-500 uppercase"
                        >
                            🔐
                            <span className="ml-3">Autorizar Ordenes</span>
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/bienvenidoautorizadas"
                            className="flex items-center p-2 font-bold rounded-lg bg-amber-400 hover:bg-amber-500 uppercase"
                        >
                            ✔️
                            <span className="ml-3">Ordenes Autorizadas</span>
                        </Link>
                    </li>

                </ul>

                <button
                    onClick={cerrarSesion}
                    className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white rounded p-2 font-bold"
                >
                    Cerrar sesión
                </button>

            </div>
        </>
    );
}

export default Sidebar;