import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  //Obtener Ordenes
  const hr = await prisma.horasseco.findMany({
  })

  res.status(200).json(hr);
  //Crear saldoes
  if (req.method === "POST") {
    const horasseco = await prisma.horasseco.create({
      data: {
        horasmesseco: req.body.horasmesseco,
        horastrabajadasseco: req.body.horastrabajadasseco,
      },
    });
    res.json(horasseco);
  }
}