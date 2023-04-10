
import { PrismaClient } from '@prisma/client'

export default async function handler (req,res){

    const prisma = new PrismaClient()
    if(req.method === 'POST'){
        const { id }  = req.query
        const {despacho} = req.body
        

        const ordenActualizada = await prisma.pedidos.update({
            where: { id: parseInt(id) },
            data: {despacho: despacho},
          })

        res.status(200).json(ordenActualizada)
    }
}
