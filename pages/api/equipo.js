import  {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const equipos = await prisma.equipo.findMany()
  
  res.status(200).json(equipos)
}
