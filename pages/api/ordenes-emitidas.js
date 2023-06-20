import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const fechaActual = new Date(); // Obtener la fecha actual
  //Obtener solicitudes
  const ordenes = await prisma.orden.findMany({
    
    orderBy: {
      id: "desc",
    },
    take: 10,
  });
  

  res.status(200).json(ordenes);
}
