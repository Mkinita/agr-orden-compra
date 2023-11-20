import { PrismaClient } from '@prisma/client'

export default async function handler (req,res){

    const prisma = new PrismaClient()
    if(req.method === 'POST'){
        const { id }  = req.query
        

        const autorizarorden = await prisma.nuevaorden.update({
            where:{
                id: parseInt(id)
            },
            data:{
                estado01:true,
                
            }
        })
        res.status(200).json(autorizarorden)

    }

}