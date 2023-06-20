import { PrismaClient } from '@prisma/client'

export default async function handler (req,res){

    const prisma = new PrismaClient()
    if(req.method === 'POST'){
        const { id }  = req.query
        

        const ordenplanta = await prisma.orden.update({
            where:{
                id: parseInt(id)
            },
            data:{
                planta:true,
                
            }
        })
        res.status(200).json(ordenplanta)

    }

}