import { PrismaClient } from '@prisma/client'

export default async function handler(req, res) {
    const prisma = new PrismaClient();
    if (req.method === 'POST') {
        const { id, pedido01Id,pedido01 } = req.query; // Asegúrate de capturar correctamente el pedido01Id
        const { rut } = req.body;

        const ordenActualizada = await prisma.nuevaorden.update({
            where: { id: parseInt(id) },
            data: {
                pedido01: {
                    pedido01: [
                        {
                            data: {
                                rut: rut,
                            },
                        },
                    ],
                },
            },
        });
        

        res.status(200).json(ordenActualizada);
    }
}
