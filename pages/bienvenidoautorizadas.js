import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import axios from "axios";
import LayoutInicio from "../layout/LayoutInicio";
import OrdenesCompraOc from "../components/OrdenesCompraOc";
import Head from "next/head";

export default function Bienvenido() {

    const router = useRouter();
    const [nombre, setNombre] = useState("");

    useEffect(() => {
        const usuario = localStorage.getItem("usuario");

        if (!usuario) {
            router.push("/");
            return;
        }

        setNombre(usuario);

    }, [router]);

    const fetcher = (url) => axios.get(url).then(res => res.data);

    const { data, isLoading } = useSWR(
        nombre
            ? `/api/autorizasinicio?nombre=${encodeURIComponent(nombre)}`
            : null,
        fetcher,
        {
            refreshInterval: 1000,
            revalidateOnFocus: false
        }
    );

    return (
        <LayoutInicio pagina={"Bienvenido"}>

            <Head>
                <meta name="description" content="Carlos Jerez" />
                <link rel="icon" href="/AGRF.png" />
                <title>Bienvenido</title>
            </Head>

            <h1 className="text-3xl font-bold text-center py-6">
                
            </h1>

            {isLoading ? (
                <p className="text-center">Cargando...</p>
            ) : (
                <div className="grid gap-4 grid-cols-1 md:grid-cols-3">

                    {data && data.length > 0 ? (
                        data.map((orden) => (
                            <OrdenesCompraOc
                                key={orden.id}
                                orden={orden}
                            />
                        ))
                    ) : (
                        <p className="text-center col-span-3">
                            No hay órdenes pendientes
                        </p>
                    )}

                </div>
            )}

        </LayoutInicio>
    );
}