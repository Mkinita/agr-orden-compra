import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const fechaActual = new Date(); // Obtener la fecha actual

  // Obtener ordenes
  const ordenes = await prisma.nuevaorden.findMany({
    where: {
      estado01: false,
      anular: false
    },
    orderBy: {
      id: "desc"
    },
    take: 20
  });

  // Filtrar las órdenes que contienen el nombre "Carlos Vera" en el campo "nombre01"
  const ordenesFiltradas = ordenes.filter((orden) => {
    return orden.pedido.some((item) => item.nombre01 === "Carlos Vera");
  });

  res.status(200).json(ordenesFiltradas);
}
