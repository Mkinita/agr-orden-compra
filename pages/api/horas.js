import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  //Obtener Ordenes
  const hr = await prisma.horas.findMany({
  })

  res.status(200).json(hr);
  //Crear saldoes
  if (req.method === "POST") {
    const horas = await prisma.horas.create({
      data: {
        horasmes: req.body.horasmes,
        horastrabajadas: req.body.horastrabajadas,
      },
    });
    res.json(horas);
  }
}