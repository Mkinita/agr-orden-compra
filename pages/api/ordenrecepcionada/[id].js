import { PrismaClient } from '@prisma/client'

export default async function handler (req,res){

    const prisma = new PrismaClient()
    if(req.method === 'POST'){
        const { id }  = req.query
        

        const ordenplanta = await prisma.nuevaorden.update({
            where:{
                id: parseInt(id)
            },
            data:{
                proveedor:true,
                planta:true,
                conforme:true
                
            }
        })
        res.status(200).json(ordenplanta)

    }

}