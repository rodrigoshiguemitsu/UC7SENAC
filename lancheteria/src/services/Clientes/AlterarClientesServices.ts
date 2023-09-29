import prismaClient from "../../prisma";

interface AlterarCliente{
    id:string
    alterarNome:string
    alterarFone:string
}


class AlterarClientesServices{
async execute ({id, alterarNome, alterarFone}:AlterarCliente){
    await prismaClient.clients.update({
        where:{
            id:id
        },
        data:{
            nome:alterarNome,
            fixo:alterarFone
        }
         
    })
    //return {dados: 'Dados alterados com sucesso'}
    console.log(alterarNome, alterarFone)
}
}

export {AlterarClientesServices}