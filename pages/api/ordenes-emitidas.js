import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const fechaActual = new Date(); // Obtener la fecha actual
  //Obtener solicitudes
  const ordenes = await prisma.nuevaorden.findMany({
    
    orderBy: {
      id: "desc",
    },
    take: 100,
  });
  

  res.status(200).json(ordenes);
}
