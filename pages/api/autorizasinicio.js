import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {

    const { nombre } = req.query;

    if (!nombre) {
        return res.status(400).json({
            mensaje: "Debe enviar el nombre."
        });
    }

    try {

        const ordenes = await prisma.nuevaorden.findMany({

            where: {
                estado01: true,
                anular: false
            },

            orderBy: {
                id: "desc"
            },

            take: 20

        });

        const ordenesFiltradas = ordenes.filter((orden) =>
            orden.pedido.some(
                (item) => item.nombre01 === nombre
            )
        );

        res.status(200).json(ordenesFiltradas);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            mensaje: "Error del servidor."
        });

    }

}