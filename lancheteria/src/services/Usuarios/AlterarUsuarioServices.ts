
import prismaClient from "../../prisma";

interface AlterarUsuario{
    id:string
    alteraNome:string
    alteraEmail:string
}


class AlterarUsuarioServices{
    async execute ({id,alteraNome,alteraEmail}: AlterarUsuario){
        await prismaClient.user.update({
            where:{
                id:id
            },
            data:{
                nome:alteraNome,
                email:alteraEmail
            }
        })
        return{dados:'Dados alterados com sucesso'}
    }
}
export {AlterarUsuarioServices}