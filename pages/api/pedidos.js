import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  try {
    // Obtener los pedidos sin ordenar
    const pedidosSinOrdenar = await prisma.pedidos.findMany({
      where: {
        estado: false,
      },
    });

    // Ordenar los pedidos por el campo "ordenar"
    const pedidosOrdenados = pedidosSinOrdenar.sort((a, b) => a.ordenar - b.ordenar);

    // Enviar la respuesta con los pedidos ordenados
    res.status(200).json(pedidosOrdenados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los pedidos" });
  } finally {
    await prisma.$disconnect();
  }






  //Crear pedidoses
  if (req.method === "POST") {

    const pedidos = await prisma.pedidos.create({
    data: {
    tipo: req.body.tipo,
    cliente: req.body.cliente,
    oc: req.body.oc,
    producto: req.body.producto,
    solicitud: req.body.solicitud,
    despacho: req.body.despacho,
    imagen: req.body.imagen,
      },
    });
    res.json(pedidos);
  }
}