import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const fechaActual = new Date(); // Obtener la fecha actual
  //Obtener solicitudes
  const solicitudes = await prisma.solicitud.findMany({
    where: {
      // nombre01:"gavino ugalde"
    },
    orderBy: {
      id: "desc",
    },
    take: 20,
  });
  

  res.status(200).json(solicitudes);
}
