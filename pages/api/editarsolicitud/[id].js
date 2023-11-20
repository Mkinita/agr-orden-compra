import { PrismaClient } from '@prisma/client'

export default async function handler (req,res){

    const prisma = new PrismaClient()
    if(req.method === 'POST'){
        const { id }  = req.query
        const 
            {
                cantidades,detalles,valores,
                cantidad01,detalle01,valor01,
                cantidad02,descripcion02,valor02,
                cantidad03,descripcion03,valor03,
                cantidad04,descripcion04,valor04,
                cantidad05,descripcion05,valor05,
                cantidad06,descripcion06,valor06,
                cantidad07,descripcion07,valor07,
                cantidad08,descripcion08,valor08,
                cantidad09,descripcion09,valor09,
            } = req.body
        

        const ordenActualizada = await prisma.nuevaSolicitud.update({
            where: { id: parseInt(id) },
            data: 
            { 
                cantidades: cantidades, detalles: detalles, valores: valores,
                cantidad01: cantidad01, detalle01: detalle01, valor01: valor01,
                cantidad02: cantidad02, descripcion02: descripcion02, valor02: valor02,
                cantidad03: cantidad03, descripcion03: descripcion03, valor03: valor03,
                cantidad04: cantidad04, descripcion04: descripcion04, valor04: valor04,
                cantidad05: cantidad05, descripcion05: descripcion05, valor05: valor05,
                cantidad06: cantidad06, descripcion06: descripcion06, valor06: valor06,
                cantidad07: cantidad07, descripcion07: descripcion07, valor07: valor07,
                cantidad08: cantidad08, descripcion08: descripcion08, valor08: valor08,
                cantidad09: cantidad09, descripcion09: descripcion09, valor09: valor09,

            },
          })

        res.status(200).json(ordenActualizada)
    }
}

