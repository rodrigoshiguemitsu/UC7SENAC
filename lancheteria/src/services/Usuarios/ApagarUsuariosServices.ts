


import prismaClient from "../../prisma";

interface ApagarUsuarios{

    deletar:string
}

class ApagarUsuariosServices{
    async execute({deletar}:ApagarUsuarios){
        await prismaClient.user.delete({
            where:{
                id:deletar
            }
        })
        return {dados:'Registro apagado com sucesso'}
    }
}
export{ApagarUsuariosServices}