import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  // Obtener Ordenes
  const stocks = await prisma.stock.findMany({
    where:  {
      estado: false,
    },
    orderBy: {
      id: "desc",
    },
  });

  res.status(200).json(stocks);

  // Crear stockes
  if (req.method === "POST") {
    const stock = await prisma.stock.create({
      data: {
        nombre: req.body.nombre,
        fecha: req.body.fecha,
        cantidad: req.body.cantidad,
        pedido: req.body.pedido,
        cliente: req.body.cliente,
      },
    });

  

    res.json(stock);
  }
}
