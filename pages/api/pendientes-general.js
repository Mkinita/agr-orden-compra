import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const fechaActual = new Date(); // Obtener la fecha actual
  //Obtener solicitudes
  const solicitudes = await prisma.nuevaSolicitud.findMany({
    where: {
      compra: false
    },
    orderBy: {
      id: "desc",
    },
    take: 50,
  });
  

  res.status(200).json(solicitudes);
}
