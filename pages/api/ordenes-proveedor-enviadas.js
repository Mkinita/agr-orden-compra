import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const fechaActual = new Date(); // Obtener la fecha actual
  //Obtener ordenes
  const ordenes = await prisma.nuevaorden.findMany({
    where: {
      proveedor:true,
    },
    orderBy: {
      id: "desc",
    },
    take: 20,
  });
  

  res.status(200).json(ordenes);
}
