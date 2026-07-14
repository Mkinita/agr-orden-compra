import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Home() {

    const router = useRouter();

    const personas = [

    {
        id: 1,
        nombre: "Manuel Martinez",
        rut: "154377743",
        cargo: "Enc. Mantención"
    },
    {
        id: 2,
        nombre: "Ramon LLeucún",
        rut: "78226374",
        cargo: "Jefe Planta"
    },
    {
        id: 3,
        nombre: "Marcela Alvarez",
        rut: "184375923",
        cargo: "Prevencionista"
    },
    {
        id: 4,
        nombre: "Jose Buholzer",
        rut: "95461905",
        cargo: "Jefe Aserradero"
    }
];

    const [nombre, setNombre] = useState("");
    const [rut, setRut] = useState("");



    const ingresar = (e) => {
    e.preventDefault();

    const persona = personas.find(
        p => p.nombre === nombre && p.rut === rut
    );

    if (!persona) {
        alert("Nombre o RUT incorrecto");
        return;
    }

    // Guarda el usuario
    localStorage.setItem("usuario", persona.nombre);

    router.push("/bienvenido");
}

    return (
        
        <div className="min-h-screen flex justify-center items-center bg-gray-100">

            <div className="flex flex-col items-center ">

                

                <form
                    onSubmit={ingresar}
                    className="bg-white p-8 rounded-lg shadow-lg w-96"
                >
                    <Image
                        width={280}
                        height={100}
                        src="/assets/img/AGRF.png"
                        alt="logo"
                        className="mx-auto mb-4"
                    />
                    <h1 className="text-3xl font-bold text-center mb-6">
                        Ingresa
                    </h1>
                    

                    <label className="block font-bold mb-2">
                        Persona
                    </label>

                    <select
                        className="w-full bg-gray-200 rounded p-2 mb-5"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    >
                        <option value="">Seleccione...</option>

                        {personas.map((persona) => (
                            <option
                                key={persona.rut}
                                value={persona.nombre}
                            >
                                {persona.nombre}
                            </option>
                        ))}
                    </select>

                    <label className="block font-bold mb-2">
                        RUT
                    </label>
                    

                    <input
                        type="text"
                        className="w-full bg-gray-200 rounded p-2 mb-6"
                        placeholder="Ingrese su RUT"
                        value={rut}
                        onChange={(e) => setRut(e.target.value)}
                    />
                    <br></br>

                    <button className="w-full p-2  text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                        Ingresar
                    </button>

                </form>

            </div>

        </div>
    );
}