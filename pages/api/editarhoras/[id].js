import { PrismaClient } from '@prisma/client'

export default async function handler (req,res){

    const prisma = new PrismaClient()
    if(req.method === 'POST'){
        const { id }  = req.query
        const { horasmes, horastrabajadas } = req.body;

        

        const ordenActualizada = await prisma.horas.update({
            where: { id: parseInt(id) },
            data: {
              horasmes: horasmes,
              horastrabajadas: horastrabajadas,
            },
          });
          

        res.status(200).json(ordenActualizada)
    }
}