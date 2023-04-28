import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  //Obtener Ordenes
  const produc = await prisma.producciones.findMany({
    where: {
        nombre:'SECADO'
      },
    orderBy: {
      id: "asc",
    },

  })

  res.status(200).json(produc);
}